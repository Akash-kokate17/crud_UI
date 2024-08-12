import React from "react";

export default function UsersTable({ users, editUser, deleteUser }) {
  return (
    <>
      <div className="table-responsive">
        <table className="table container-fluid table-striped table-border text-center table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user?.id}>
                  <td>{user?.id}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phoneNo}</td>
                  <td>{user?.gender}</td>
                  <td>
                    <button
                      className="btn btn-primary px-4"
                      onClick={() => editUser(user)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger px-4"
                      onClick={() => deleteUser(user?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
  