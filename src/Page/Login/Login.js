import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPersonas } from "../../Redux/actions";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Link to="/home">
        <button>Logeate</button>
      </Link>
    </div>
  );
}

export default Login;
