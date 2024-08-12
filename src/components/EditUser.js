import React from "react";

function EditUser({ userName, setUser, addUserActive, editUserName }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userName, [name]: value });
  };

  return (
    <>
      <div className="container-fluid text-center">
        <div className="col">
          <div>
            <label className="fw-bold">Name</label>
            <input
              type="text"
              name="name"
              value={userName?.name || ""}
              className="form-control text-center"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="fw-bold">Email</label>
            <input
              type="email"
              name="email"
              value={userName?.email || ""}
              className="form-control text-center"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="fw-bold">Phone No.</label>
            <input
              type="text"
              name="phoneNo"
              value={userName?.phoneNo || ""}
              className="form-control text-center"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="fw-bold">Gender</label>
            <input
              type="text"
              name="gender"
              value={userName?.gender || ""}
              className="form-control text-center"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col mt-3">
          <div
            className="btn btn-success me-3 px-5"
            onClick={() => editUserName(userName)}
          >
            Edit
          </div>
          <div className="btn btn-danger ms-3 px-4" onClick={addUserActive}>
            Add User
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(EditUser);
