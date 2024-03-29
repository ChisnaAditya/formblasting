import { Alert, Button, FloatingLabel, Modal } from "flowbite-react";
import TextInputField from "../components/TextInputField";
import SelectInputField from "../components/SelectInputField";
import RadioInputField from "../components/RadioInputField";
import ModalPopUp from "../components/ModalPupUp";
import {
  arrCS,
  arrPeriode,
  arrTanggalKehadiran,
  arrWaktuKehadiran,
} from "../data/dataForm";
import { Suspense, useState } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import Loading from "../loading";

function Home() {
  const [nama, setNama] = useState("");
  const [nomor, setNomor] = useState("");
  const [domisili, setDomisili] = useState("");
  const [cs, setCS] = useState("");
  const [periode, setPeriode] = useState("");
  const [tanggalKehadiran, setTanggalKehadiran] = useState("");
  const [waktuKehadiran, setWaktuKehadiran] = useState("");
  const [instagram, setInstagram] = useState("");
  const [pertanyaan, setPertanyaan] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://marketing-service.kampunginggrislc.com/api/marketing-service/survey/create",
        {
          name: nama,
          number_whatsapp: nomor,
          domicile: domisili,
          customer_service: cs,
          course_period: periode,
          arrival_date: tanggalKehadiran,
          arrival_time: waktuKehadiran,
          account_instagram: instagram,
          notes: pertanyaan,
        }
      )
      .then((res) => {
        console.log(res);
        setOpenModal(!openModal);
        if (res.data.success) {
          alert("Berhasil..");
          setOpenModal(!openModal);
          setNama("");
          setNomor("");
          setDomisili("");
          setCS("");
          setPeriode("");
          setTanggalKehadiran("");
          setWaktuKehadiran("");
          setInstagram("");
          setPertanyaan("");
          window.location.href =
            "https://program.kampunginggrislc.com/intensive";
        } else {
          alert("gagal..");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <Jumbotron />
      </Suspense>
      <form onSubmit={handleOpenModal}>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center my-10">
          <TextInputField
            title="Nama"
            desc="Nama lengkap ya"
            label="Tulis nama disini"
            onChangeInput={(e) => setNama(e.target.value)}
          />
          <TextInputField
            title="No. WA"
            desc="Nomor whatsapp kamu"
            label="Tulis nomor whatsapp disini"
            onChangeInput={(e) => setNomor(e.target.value)}
          />
          <TextInputField
            title="Domisili"
            desc="Tempat tinggalmu"
            label="Tulis domisili disini"
            onChangeInput={(e) => setDomisili(e.target.value)}
          />
          <SelectInputField
            title="Nama CS"
            desc="Apakah masih ingat dibantu oleh CS siapa ketika pendaftaran? Jika, YA. Silahkan pilih nama CS yang membantu kamu daftar."
            label="Nama CS"
            listOfArray={arrCS}
            onChangeInput={(e) => setCS(e.target.value)}
          />
          <RadioInputField
            title="Periode"
            desc="PERIODE berapa nih yang kamu sedang ikutin?"
            label="Periode"
            listOfArray={arrPeriode}
            onChangeInput={(e) => setPeriode(e.target.value)}
          />
          <RadioInputField
            title="Tanggal Kehadiran"
            desc="[Estimasi] Tanggal Kehadiran di Kampung Inggris LC, Pare"
            label="Tanggal Kehadiran"
            listOfArray={arrTanggalKehadiran}
            onChangeInput={(e) => setTanggalKehadiran(e.target.value)}
          />
          <RadioInputField
            title="Waktu Kehadiran"
            desc="[Estimasi] Jam kehadiran di Kampung Inggris LC, Pare*"
            label="Waktu Kehadiran"
            listOfArray={arrWaktuKehadiran}
            onChangeInput={(e) => setWaktuKehadiran(e.target.value)}
          />
          <TextInputField
            title="Akun Instagram"
            desc="(opsional)"
            label="Akun Instagram"
            onChangeInput={(e) => setInstagram(e.target.value)}
          />
          <TextInputField
            title="Pertanyaan lain?"
            desc="Jika ada pertanyaan lain bisa tulis di kolom bawah ya"
            label="Hal yang ingin ditanyakan"
            onChangeInput={(e) => setPertanyaan(e.target.value)}
          />
        </div>

        <div className="bg-[#fccf00] p-10 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Sudah selesai mengisi?
          </h1>
          <p>Klik tombol dibawah jika sudah selesai</p>
          <Button
            type="submit"
            // onClick={() => setOpenModal(true)}
            className="my-4 bg-[#ea1d23] hover:bg-[#ea1d23]/70"
          >
            Kirim
          </Button>
        </div>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Sudah selesai mengisi form dan ingin mengirim sekarang?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" type="submit" onClick={handleCreate}>
                  {"Oke, Kirim sekarang"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No, tunggu dulu
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </form>
    </div>
  );
}

export default Home;
