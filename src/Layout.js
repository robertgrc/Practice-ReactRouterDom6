import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

export function Layout() {
  return (
    <main>
      <section>
        <Outlet />
      </section>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
    </main>
  );
}
