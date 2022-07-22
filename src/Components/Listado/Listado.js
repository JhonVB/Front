import React, { useState } from "react";
import { eliminarPersona, actualizarPersona } from "../../Redux/actions";
import { Table, Popconfirm, Form, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import {
  DeleteTwoTone,
  EditTwoTone,
  CloseCircleTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

function Listado({ personas }) {
  const dispatch = useDispatch();
  const [row, setRow] = useState(null);
  const [form] = Form.useForm();

  const isEditing = (record) => record.id === row;

  const handleDelete = (id) => {
    dispatch(eliminarPersona(id));
  };

  const edit = (record) => {
    setRow(record.id);
    form.setFieldsValue({
      type_document: record.type_document,
      document: record.document,
      hobbie: record.hobbie,
      last_name: record.last_name,
      name: record.name,
    });
  };

  const cancel = () => {
    setRow(null);
  };

  const columns = [
    {
      title: "NOMBRE",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please Enter your  name" }]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },

    {
      title: "APPELIDO",
      dataIndex: "last_name",
      key: "last_name",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="last_name"
              rules={[
                { required: true, message: "Please Enter your last name" },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "TIPO DE DOCUMENTO",
      dataIndex: "type_document",
      key: "type_document",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="type_document"
              rules={[
                {
                  required: true,
                  message: "Please select your type document!",
                },
              ]}
            >
              <Select style={{ width: 100 }}>
                <Select.Option value="T.I">T.I</Select.Option>
                <Select.Option value="C.C.">C.C</Select.Option>
                <Select.Option value="DNI">DNI</Select.Option>
                <Select.Option value="OTRO">Otro</Select.Option>
              </Select>
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "DOCUMENTO",
      dataIndex: "document",
      key: "document",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="document"
              rules={[
                { required: true, message: "Please input your document!" },
                {
                  pattern: RegExp(/^\d{1,100}$/g),
                  message: "Solo se permiten numeros enteros",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },

    {
      title: "HOBBIE",
      dataIndex: "hobbie",
      key: "hobbie",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              label="Hobbie:"
              name="hobbie"
              rules={[
                { required: true, message: "Please select your hobbie!" },
              ]}
            >
              <Select style={{ width: 100 }}>
                <Select.Option value="Correr">Correr</Select.Option>
                <Select.Option value="Bailar">Bailar</Select.Option>
                <Select.Option value="Cantar">Cantar</Select.Option>
                <Select.Option value="Otro">Otro</Select.Option>
              </Select>
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "ACCIONES",
      key: "acciones",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button type="link" htmlType="submit">
              <CheckCircleTwoTone
                style={{ fontSize: "1.3rem" }}
                twoToneColor="#06bee1"
              />
            </Button>

            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <CloseCircleTwoTone
                twoToneColor="#e71d36"
                style={{ fontSize: "1.3rem" }}
              />
            </Popconfirm>
          </span>
        ) : (
          <>
            <EditTwoTone
              disabled={row !== null}
              twoToneColor="#06bee1"
              onClick={() => edit(record)}
              style={{ fontSize: "1.3rem" }}
            ></EditTwoTone>

            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.id)}
            >
              <DeleteTwoTone
                twoToneColor="#e71d36"
                style={{ fontSize: "1.3rem" }}
              />
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const onFinish = (values) => {
    dispatch(actualizarPersona(row, values));
    setRow(null);
  };

  return (
    <div className="contenedor">
      <Form form={form} onFinish={onFinish}>
        <Table
          bordered="true"
          size="small"
          align="center"
          columns={columns}
          dataSource={personas}
          loading={personas.length === 0}
        />
      </Form>
    </div>
  );
}

export default Listado;
