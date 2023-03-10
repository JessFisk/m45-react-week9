import React, { useState } from "react";
import "./UserWrapper.css";
import LoginUser from "../loginUser/LoginUser";
import AddUser from "../addUser/AddUser";

const UserWrapper = ({ user, setUser }) => {
    return (
        <div className="user-wrapper">
            <AddUser user={user} setUser={setUser} />
            <LoginUser user={user} setUser={setUser} />
        </div>
    )
}
export default UserWrapper;

