import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersonas } from "../../Redux/actions";
import { Link } from "react-router-dom";
import Listado from "../../Components/Listado/Listado";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const personas = useSelector((state) => state.personas);

  useEffect(() => {
    dispatch(getPersonas());
  }, [dispatch]);

  return (
    <div className="contenedorTabla">
      <Link to="/create">
        <button>CREAR NUEVA PERSONA</button>
      </Link>
      <Listado personas={personas} />
    </div>
  );
}

export default Home;
