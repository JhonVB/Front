import React from "react";
import { Table, Button } from "antd";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
// import { getPersonas } from "../../Redux/actions";
import "antd/dist/antd.css";
import "./Listado.css";

function Listado({ personas }) {
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Document",
      dataIndex: "document",
      key: "document",
      align: "center",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      align: "center",
    },
    {
      title: "Type Document",
      dataIndex: "type_document",
      key: "type_document",
      align: "center",
    },
    {
      title: "Actions",
      key: "acciones",

      render: () => (
        <>
          <EditTwoTone twoToneColor="#48cae4" style={{ fontSize: "1.3rem" }} />
          <DeleteTwoTone
            twoToneColor="#eb2f96"
            style={{ fontSize: "1.3rem" }}
          />
        </>
      ),
    },
  ];

  return (
    <div className="contenedor">
      <Table
        bordered="true"
        size="small"
        align="center"
        columns={columns}
        dataSource={personas}
        loading={personas.length === 0}
      />
    </div>
  );
}

export default Listado;
