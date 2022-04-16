import React from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../users";

export function Users() {
  const users = getAllUsers();
  return (
    <div>
      <h1>Users</h1>
      <input type="text" placeholder="filter" />
      <ul>
        {users.map((usuario) => (
          <li key={usuario.id}>
            <h2>
              <Link to={usuario.id.toString()}>{usuario.name}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
