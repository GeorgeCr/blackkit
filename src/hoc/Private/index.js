import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const Private = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.root.isLoggedIn);
    return isLoggedIn ? children : <Redirect to="/auth" />
};

export default Private;