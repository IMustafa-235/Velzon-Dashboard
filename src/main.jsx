import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import App from "./App.jsx";
import "./App.css";
import "./responsive.css";
import Sidebar_Provider from "./context/Sidebar_Context.jsx";
import LgToggleSidebar_provider from "./context/LgToggleSidebar_Context.jsx";
import LayoutChangeProvider from "./context/LayoutChange.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <Sidebar_Provider>
      <LgToggleSidebar_provider>
        <LayoutChangeProvider>
        <App />
        </LayoutChangeProvider>
      </LgToggleSidebar_provider>
    </Sidebar_Provider>
);
