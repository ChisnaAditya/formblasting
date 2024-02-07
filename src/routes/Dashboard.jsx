import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columnsTabel } from "../data/dataForm";

function Dashboard() {
  const [dataStudent, setDataStudent] = useState([]);
  const [detailStudent, setDetailStudent] = useState([0, "", "", ""]);
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();

  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3306/student", {
        nama: nama,
        umur: umur,
        gender: gender,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleRead = (paramID) => {
    axios
      .get(`http://localhost:3306/detail/${paramID}`)
      .then((res) => {
        console.log(res);
        setDetailStudent(res.data);
      })
      .catch((err) => console.log(err));

    setOpenModal(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3306")
      .then((res) => {
        console.log(res);
        setDataStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <Table className="mx-auto overflow-x-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {dataStudent.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.umur}</td>
                <td>{item.gender}</td>
                <td className="flex gap-5">
                  <a onClick={() => handleRead(item.id)}>Read</a>
                  <Button>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table> */}
      <DataTable columns={columnsTabel} data={dataStudent} selectableRows />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Detail User {detailStudent[0].id}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Nama: {detailStudent[0].nama}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Umur: {detailStudent[0].umur}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Gender: {detailStudent[0].gender}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
