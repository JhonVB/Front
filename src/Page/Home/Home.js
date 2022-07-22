import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersonas } from "../../Redux/actions";
import { Link } from "react-router-dom";
import Listado from "../../Components/Listado/Listado";
import { Col, Row, Button } from "antd";

function Home() {
  const dispatch = useDispatch();
  const personas = useSelector((state) => state.personas);

  useEffect(() => {
    dispatch(getPersonas());
  }, [dispatch]);

  return (
    <div className="">
      <Row type="flex" justify="center" align="top" j>
        <Col sm={3} offset={10} style={{ margin: 15 }}>
          <Link to="/create">
            <Button type="primary" shape="round" style={{ width: 200 }}>
              Create Persona
            </Button>
          </Link>
        </Col>
      </Row>

      {personas.length > 0 ? <Listado personas={personas} /> : null}
    </div>
  );
}

export default Home;
