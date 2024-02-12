import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { columnsTabel } from "../data/dataForm";
import SideBarMenu from "../components/SideBarMenu";
import Loading from "../loading";

function Dashboard() {
  const [dataStudent, setDataStudent] = useState([]);
  const [detailStudent, setDetailStudent] = useState([0, "", "", ""]);
  const [openModal, setOpenModal] = useState(false);

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

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(dataStudent[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "data_survey.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <Button
      className="bg-[#ea1d23] hover:bg-[#ea1d23]/70"
      onClick={(e) => onExport(e.target.value)}
    >
      Export
    </Button>
  );
  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(dataStudent)} />,
    []
  );

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#fccf00",
        fontWeight: "bold",
      },
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://marketing-service.kampunginggrislc.com/api/marketing-service/survey"
      )
      .then((res) => {
        console.log(res.data.message);
        setDataStudent(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  if (dataStudent === "") {
    return <Loading />;
  }

  return (
    <div className="flex">
      <div className="basis-1/6">
        <SideBarMenu />
      </div>
      <div className="basis-5/6 overflow-hidden px-10  py-5">
        <div className="flex flex-col px-10 rounded-xl shadow-xl">
          <DataTable
            title="Data Survey"
            columns={columnsTabel}
            data={dataStudent}
            actions={actionsMemo}
            customStyles={customStyles}
            pagination
            highlightOnHover
            fixedHeader
            responsive
          />
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Detail User {detailStudent[0]._id}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Nama: {detailStudent[0].name}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              WA: {detailStudent[0].number_whatsapp}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Domisili: {detailStudent[0].domicile}
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
