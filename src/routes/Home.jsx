import { Alert, Button, FloatingLabel } from "flowbite-react";
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
import { useState } from "react";
import axios from "axios";

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

  const handleCreate = (e) => {
    e.preventDefault();
    alert("Berhasil.. Setelah ini anda akan dialihkan ke program IEP");
    window.location.href = "https://program.kampunginggrislc.com/intensive";
    // axios
    //   .post("http://localhost:3306/student", {
    //     nama: nama,
    //     nomor: nomor,
    //     domisili: domisili,
    //     cs: cs,
    //     periode: periode,
    //     tanggal: tanggalKehadiran,
    //     waktu: waktuKehadiran,
    //     instagram: instagram,
    //     pertanyaan: pertanyaan,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     alert("Berhasil.. Setelah ini anda akan dialihkan ke program IEP");
    //     window.location.href = "https://program.kampunginggrislc.com/intensive";
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="container">
        <article className="prose max-w-full mx-auto pt-[2rem] lg:pt-[4rem]">
          <h1 className="text-xl lg:text-3xl">
            Form Kehadiran Registrasi Ulang (check-in)
          </h1>
          <p className="text-sm lg:text-lg">
            Hai semua, salam dari mincaaa~ 👋🏻👋🏻 <br /> Bagaimana kabarnya?
            Semoga tetap sehat & tetap baik-baik saja😇 <br /> Besar harapan
            gform ini diisi ketika sebelum sampai lokasi registrasi ulang.{" "}
            <br />
            ⚠️Sekedar info, Jam Layanan Registrasi Ulang (check-in) dimulai dari
            jam 08:00 sampai 16:00. Hari Sabtu & Minggu.
          </p>
        </article>
      </div>

      <form onSubmit={handleCreate}>
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
            className="my-4 bg-[#ea1d23] hover:bg-[#ea1d23]/70"
          >
            Kirim
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Home;
