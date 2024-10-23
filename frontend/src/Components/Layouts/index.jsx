import React from "react";
import { Outlet } from "react-router-dom";

// Layout component to structure the app with header and main content
const Layout = () => {
  return (
    <div>
      <homepage>
        {/* Header */}
        <header>
          <h1>Mazoezi Tailored workout Projects </h1>
        </header>

        {/* Main content */}
        <main>
          <Outlet /> {/* This renders the nested routes */}
        </main>
      </homepage>
    </div>
  );
};

export { Layout };
