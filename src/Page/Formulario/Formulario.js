import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Input, Select, Divider, Row, Col, message } from "antd";
import { createPersona } from "../../Redux/actions";
import "antd/dist/antd.css";
import { Typography } from "antd";

function Formulario() {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const errores = useSelector((state) => state.errors);

  console.log(errores);

  useEffect(() => {
    if (Object.keys(errores).length > 0) {
      const errorFormate = Object.entries(errores).map(([name, value]) => ({
        name,
        touched: true,
        errors: value,
      }));
      console.log("errorFormate", errorFormate);
      form.setFields(errorFormate);
    }
  }, [form, errores]);

  const onFinish = (values) => {
    const clear = () => form.resetFields();
    dispatch(createPersona(values, clear));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contendedor">
      <Row
        type="flex"
        justify="center"
        align="top"
        style={{ backgroundColor: "#e0e1dd" }}
      >
        <Col xl={5} style={{ margin: 18 }}>
          <Link to="/home">
            <Button type="primary" shape="round" style={{ width: 200 }}>
              Go to home!
            </Button>
          </Link>
        </Col>
      </Row>

      <Row justify="center" align="center" type="flex">
        <Col xl={5} style={{ marginTop: 25 }}>
          <Title
            style={{
              color: "#0582ca",
              fontWeight: "700",
              fontFamily: "sans-serif",
              fontSize: "2.5rem",
            }}
          >
            CREACIÓN
          </Title>
        </Col>
      </Row>

      <Row justify="center" align="top" type="flex">
        <Col span={24}>
          <Form
            name="basic"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Nombre: "
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input style={{ width: 300 }} />
            </Form.Item>

            <Form.Item
              label="Apellido: "
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input style={{ width: 300 }} />
            </Form.Item>

            <Form.Item
              label="Documento: "
              name="document"
              rules={[
                { required: true, message: "Please input your document!" },
                {
                  pattern: RegExp(/^\d{1,100}$/g),
                  message: "Solo se permiten numeros enteros",
                },
              ]}
            >
              <Input style={{ width: 300 }} />
            </Form.Item>

            <Form.Item
              label="Tipo de documento: "
              name="type_document"
              rules={[
                { required: true, message: "Please input your type document!" },
              ]}
            >
              <Select style={{ width: 100 }}>
                <Select.Option value="T.I">T.I</Select.Option>
                <Select.Option value="C.C.">C.C</Select.Option>
                <Select.Option value="DNI">DNI</Select.Option>
                <Select.Option value="OTRO">Otro</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Hobbie: "
              name="hobbie"
              rules={[{ required: true, message: "Please input your hobbie!" }]}
            >
              <Select style={{ width: 100 }}>
                <Select.Option value="Correr">Correr</Select.Option>
                <Select.Option value="Bailar">Bailar</Select.Option>
                <Select.Option value="Cantar">Cantar</Select.Option>
                <Select.Option value="Otro">Otro</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Formulario;
