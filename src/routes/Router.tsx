import React from "react";
import App from "../App";
import Layout from "../components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Planner, Personal } from "../pages";

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
