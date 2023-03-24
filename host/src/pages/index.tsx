import React, { Suspense, useEffect, useState } from 'react';
import importRemote from '@shared/utilities/dynamic-remotes';
import ErrorBoundary from "@shared/components/error-boundary";

interface RemoteProps {
  remoteName: string;
  scope: string;
  fallBackUrl: string;
  module?: string;
};

interface RemoteResponse {
  name: string;
  url: string;
  scope: string;
};

const RemoteWrapper = ({ remoteName, scope, fallBackUrl }: RemoteProps) => {
  const TileComponent = React.lazy(() =>
    importRemote({
      configApiUrl: process.env.CONFIG_API!,
      remoteName,
      scope,
      module: './Tile',
      remoteUrlFallback: fallBackUrl
    })
  );
  return (
    // @ts-ignore
    <ErrorBoundary fallback={<div className="card card-body border-danger mb-3">Error loading remote: {remoteName || 'Unknown'}</div>}>
      <Suspense fallback={<div>Loading application...</div>}>
        <TileComponent />
      </Suspense>
    </ErrorBoundary>
  );
};


const IndexPage = () => {
  const [remotes, setRemotes] = useState<RemoteResponse[]>();
  const fetchRemotes = () => {
    fetch(process.env.CONFIG_API!)
      .then(response => response.json())
      .then(result => {
        setRemotes(result as unknown as RemoteResponse[]);
      });
  };
  useEffect(() => {
    fetchRemotes();
  }, []);
  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      {remotes && remotes.map((remote, i) => {
          return (
            <span className="m-2" key={i}>
              <RemoteWrapper
                remoteName={remote.name} 
                scope={remote.scope} 
                fallBackUrl={remote.url} />
            </span>
          );
        })}
      </div>
    </>
  )
}

export default IndexPage;