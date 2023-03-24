import { BrowserRouter } from "react-router-dom";
import Routing from "./_routing";
import Layout from "@shared/components/layout";

const HostRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
    </BrowserRouter>
  );
};

export default HostRouter;