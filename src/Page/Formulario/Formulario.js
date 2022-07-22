import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Input, Select, Divider, Row, Col, message } from "antd";
import { createPersona } from "../../Redux/actions";
import "antd/dist/antd.css";

function Formulario() {
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
      <Row type="flex" justify="center" align="top">
        <Col span={3.5} style={{ margin: 18 }}>
          <Link to="/home">
            <Button type="primary" shape="round" style={{ width: 200 }}>
              Go to home!
            </Button>
          </Link>
        </Col>
      </Row>

      <Divider style={{ color: "blue" }}>CREANDO PERSONAJE</Divider>

      <Row justify="center" align="top" type="flex">
        <Col span={9}>
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name:"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input style={{ width: 300 }} />
            </Form.Item>

            <Form.Item
              label="Last Name:"
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input style={{ width: 300 }} />
            </Form.Item>

            <Form.Item
              label="Document"
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
              label="Type Document:"
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
              label="Hobbie:"
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
