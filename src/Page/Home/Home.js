import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPersonas } from "../../Redux/actions";
import { Link } from "react-router-dom";
import Listado from "../../Components/Listado/Listado";
import { Col, Row, Button } from "antd";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personas = useSelector((state) => state.personas);

  const cerrarSesion = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };

  useEffect(() => {
    dispatch(getPersonas());
    if (localStorage.getItem("token").length === 0) navigate("/");
  }, [dispatch]);

  return (
    <div className="">
      <Row
        type="flex"
        justify="start"
        align="middle"
        style={{ backgroundColor: "#d8d8d8" }}
      >
        <Col sm={2} style={{ margin: 15 }}>
          <Link to="/create">
            <Button
              type="primary"
              shape="round"
              style={({ width: 120 }, { fontFamily: "sans-serif" })}
            >
              Crear Persona
            </Button>
          </Link>
        </Col>

        <Col sm={1} style={{ margin: 15 }}>
          <Button
            danger="true"
            shape="round"
            style={({ width: 120 }, { fontFamily: "sans-serif" })}
            type="primary"
            onClick={() => cerrarSesion()}
          >
            Cerrar Sesión
          </Button>
        </Col>
      </Row>

      {personas.length > 0 ? <Listado personas={personas} /> : null}
    </div>
  );
}

export default Home;
