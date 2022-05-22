import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "components/Spinner";

const Dashboard = lazy(() => import("pages/Dashboard"));

function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<div>not found</div>} />
      </Routes>
    </Suspense>
  );
}

export default Router;
