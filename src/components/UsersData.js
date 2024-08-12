import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersTable from "./UsersTable";
import AddUser from "./AddUser";
import Swal from "sweetalert2";
import EditUser from "./EditUser";

export function UsersData(props) {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(2);
  const [flag, setFlag] = useState(true);
  const [editingUser, setEditingUser] = useState(null);

  async function fetchUsersData() {
    try {
      let response = await axios.get("http://localhost:5000");
      setUsers(response.data);
    } catch (err) {
      console.log("something went wrong", err);
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.log("something went wrong to delete user ", err);
    }
  };

  const addNewData = async (newData) => {
    const newUser = { ...newData, id };
    try {
      if (
        newData.name !== "" &&
        newData.phoneNo !== "" &&
        newData.email !== "" &&
        newData.gender !== ""
      ) {
        await axios.post(`http://localhost:5000/post`, newUser);
        setId(id + 1);
        setUsers([...users, newUser]);
      } else {
        Swal.fire("All Fields Are Required!");
      }
    } catch (err) {
      console.log("something went wrong", err);
    }
  };

  const editUser = (userName) => {
    setFlag(false);
    setEditingUser(userName);
  };

  const addUserActive = () => {
    setFlag(true);
  };

  const editUserName = async (updatedUser) => {
    try {
      console.log(updatedUser, "updated user");

      // Update the users array
      let changeUser = users.map((user) => {
        if (updatedUser.id === user.id) {
          return { ...user, ...updatedUser }; // Update all user data
        }
        return user;
      });

      // Find the specific user to update
      const userToUpdate = changeUser.find(
        (user) => user.id === updatedUser.id
      );

      // Send the updated user data to the server
      if (userToUpdate) {
        await axios.patch(
          `http://localhost:5000/patch/${updatedUser.id}`,
          userToUpdate
        );
      }
      console.log(changeUser, "changeUser");
      return changeUser;
    } catch (err) {
      console.log("something went wrong to edit user data", err);
    }
  };

  return (
    <>
      <div className="container container-fluid border border-2 rounded rounded-3 p-4">
        <div className="row">
          <div className="col-sm-8">
            <UsersTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
          <div className="col-sm-4 border border-2 rounded rounded-2 p-3">
            {flag ? (
              <AddUser addNewData={addNewData} />
            ) : (
              <EditUser
                userName={editingUser}
                setUser={setEditingUser}
                addUserActive={addUserActive}
                editUserName={editUserName}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
