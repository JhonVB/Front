import React from "react";
import { Button, Form, Input, Col, Row } from "antd";
import { useDispatch, useSelector, useEffect } from "react-redux";
import { logear } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

function Login() {
  const { Title } = Typography;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log(token);

  const onFinish = (values) => {
    dispatch(logear(values));
    setTimeout(() => {
      navigate("/home");
    }, 100000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contenedor">
      <Row justify="center" align="center" type="flex">
        <Col span={3} offset={1} style={{ marginTop: 150 }}>
          <Title
            style={{
              color: "#0582ca",
              fontWeight: "700",
              fontFamily: "sans-serif",
              fontSize: "2.5rem",
            }}
          >
            LOGIN
          </Title>
        </Col>
      </Row>

      <Row justify="center" align="center" type="flex">
        <Col span={24} style={{ marginTop: 15 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Usuario:"
              name="username"
              rules={[
                { required: true, message: "Por favor ingresa tu usuario!" },
              ]}
            >
              <Input
                placeholder="usuario1..."
                style={{ width: 500, borderColor: "#0582ca" }}
              />
            </Form.Item>

            <Form.Item
              label="Clave:"
              name="password"
              rules={[
                { required: true, message: "Por favor ingresa tu clave!" },
              ]}
            >
              <Input.Password
                placeholder="12345..."
                style={{ width: 500, borderColor: "#0582ca" }}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ fontFamily: "sans-serif" }}
              >
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
