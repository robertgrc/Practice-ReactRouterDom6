import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../users";

export function User() {
  const params = useParams();

  const user = getUser(parseInt(params.userId));

  const handleDelete = () => {
    deleteUser(user.id);
    Navigate("/users");
  };
  return (
    <div>
      <h2>{params.userId}</h2>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
      <div>
        <strong>website:</strong> {user.website}
      </div>
      <div>
        <strong>email:</strong> {user.email}
      </div>
      <br />
      <button onClick={handleDelete}> Delete </button>
    </div>
  );
}
