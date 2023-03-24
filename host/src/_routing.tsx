import { Routes, Route } from "react-router";

import Index from "./pages";
import Loader from "./pages/loader";

const NotFound = () => (
  <div className="text-center">
    Oops, we could not find what you are looking for.
  </div>
);

const Routing = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/loader/:remote" element={<Loader />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routing;
