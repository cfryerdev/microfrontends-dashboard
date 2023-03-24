import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import importRemote from '@shared/utilities/dynamic-remotes';

import PageLoader from "@shared/components/page-loader";

const RemoteLoader = () => {
    let { remote } = useParams();
    const RemoteComponent = React.lazy(() =>
        importRemote({
            configApiUrl: process.env.CONFIG_API!,
            remoteName: remote as string,
            scope: `remote_${remote}`,
            module: 'Application',
            remoteUrlFallback: null
        })
    );
    return (
        <Suspense fallback={<PageLoader message="Loading asset..." />}>
            <RemoteComponent />
        </Suspense>
    );
}

export default RemoteLoader;
