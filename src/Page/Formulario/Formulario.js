import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Select, Divider } from "antd";
import { createPersona } from "../../Redux/actions";
import "./Formulario.css";
import "antd/dist/antd.css";

function Formulario() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navegador = useNavigate();

  const errores = useSelector((state) => state.personas);

  console.log(errores);

  useEffect(() => {
    if (errores.isError) {
      const errorFormate = Object.entries(errores.errors).map(
        ([name, value]) => ({
          name,
          touched: true,
          errors: value,
        })
      );
      console.log("errorFormate", errorFormate);

      form.setFields(errorFormate);
    }
  }, [form, errores]);

  const onFinish = (values) => {
    dispatch(createPersona(values));
    if (errores.error.length === 0) form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contendedor">
      <Link to="/home">
        <Button>IR AL HOME</Button>
      </Link>

      <Divider>CREANDO PERSONAJE</Divider>

      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        form={form}
        //   style={{ width: 1200 }}
      >
        <Form.Item
          label="Name:"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>

        <Form.Item
          label="Last Name:"
          name="last_name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>

        <Form.Item
          label="Type Document:"
          name="type_document"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select style={{ width: 100 }}>
            <Select.Option value="T.I">T.I</Select.Option>
            <Select.Option value="C.C.">C.C</Select.Option>
            <Select.Option value="DNI">DNI</Select.Option>
            <Select.Option value="OTRO">Otro</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Document"
          name="document"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>

        <Form.Item
          label="Hobbie:"
          name="hobbie"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select style={{ width: 100 }}>
            <Select.Option value="Correr">Correr</Select.Option>
            <Select.Option value="Bailar">Bailar</Select.Option>
            <Select.Option value="Cantar">Cantar</Select.Option>
            <Select.Option value="Otro">Otro</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Formulario;
