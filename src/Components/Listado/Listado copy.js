import React, { useState } from "react";
import { eliminarPersona, actualizarPersona } from "../../Redux/actions";
import { Table, Popconfirm, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Listado.css";

function Listado({ personas }) {
  const dispatch = useDispatch();
  const [row, setRow] = useState(null);
  const [form] = Form.useForm();

  const handleDelete = (id) => {
    dispatch(eliminarPersona(id));
    console.log(id);
  };

  const columns = [
    {
      title: "Type Document",
      dataIndex: "type_document",
      key: "type_document",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="type_document"
              rules={[
                { required: true, message: "Please Enter you type document" },
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
      title: "Document",
      dataIndex: "document",
      key: "document",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="document"
              rules={[
                { required: true, message: "Please Enter you  document" },
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please Enter you  name" }]}
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
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="last_name"
              rules={[
                { required: true, message: "Please Enter you last name" },
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
      title: "Hobbie",
      dataIndex: "hobbie",
      key: "hobbie",
      align: "center",
      render: (text, record) => {
        if (row == record.id) {
          return (
            <Form.Item
              name="hobbie"
              rules={[{ required: true, message: "Please Enter you hobbie" }]}
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
      title: "Actions",
      key: "acciones",

      render: (_, record) => (
        <>
          <EditTwoTone
            twoToneColor="#48cae4"
            style={{ fontSize: "1.3rem" }}
            onClick={() => {
              setRow(record.id);
              form.setFieldsValue({
                type_document: record.type_document,
                document: record.document,
                hobbie: record.hobbie,
                last_name: record.last_name,
                name: record.name,
              });
            }}
          />

          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteTwoTone
              twoToneColor="#eb2f96"
              style={{ fontSize: "1.3rem" }}
            />
          </Popconfirm>
          <Button type="link" htmlType="submit">
            Save
          </Button>
        </>
      ),
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
