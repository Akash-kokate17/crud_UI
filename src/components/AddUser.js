import React, { useState } from "react";

function AddUser({ addNewData }) {
  const newUser = {name: "", email: "", phoneNo: "", gender: "" };
  const [newData, setNewData] = useState(newUser);

  const submitData = (newData) => {
    addNewData(newData);
    setNewData({name:"",email:"",phoneNo:"",gender:""})
  };
  return (
    <>
      <div className="container-fluid text-center">
        <div className="col">
          <div>
            <label className="fw-bold">Name</label>
            <input
              type="text"
              name="userName"
              value={newData.name}
              className="form-control text-center"
              onChange={(e) => setNewData({ ...newData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="fw-bold">Email</label>
            <input
              type="email"
              name="email"
              value={newData.email}
              className="form-control text-center"
              onChange={(e) =>
                setNewData({ ...newData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="fw-bold">Phone</label>
            <input
              type="text"
              name="phone"
              value={newData.phoneNo}
              className="form-control text-center"
              onChange={(e) =>
                setNewData({ ...newData, phoneNo: e.target.value })
              }
            />
          </div>
          <div>
            <label className="fw-bold">Gender</label>
            <input
              type="text"
              name="gender"
              value={newData.gender}
              className="form-control text-center"
              onChange={(e) =>
                setNewData({ ...newData, gender: e.target.value })
              }
            />
          </div>
          <div>
            <button
              className="btn btn-success mt-2"
              onClick={() => submitData(newData)}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(AddUser);
