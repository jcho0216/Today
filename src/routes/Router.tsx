import React from "react";
import App from "../App";
import Layout from "../components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Planner, Personal } from "../pages";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";

const Router: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Router;
