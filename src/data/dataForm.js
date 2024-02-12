export const arrPeriode = [
  "08 Januari 2024",
  "15 Januari 2024",
  "22 Januari 2024",
  "29 Januari 2024",
];
export const arrTanggalKehadiran = [
  "Selasa, 20 Januari 2024",
  "Rabu, 21 Januari 2024",
  "Kamis, 22 Januari 2024",
];
export const arrWaktuKehadiran = [
  "Pagi hari (04.00-10.00)",
  "Siang hari (10.00-15.00)",
  "Sore hari (15.00-18.30)",
  "Malam hari (18.30-00.00)",
  "Dini hari (01.00-04.00)",
];
export const arrCS = [
  "Pilih salah satu",
  "Ms. ARA",
  "Ms. CELSY",
  "Ms. FATIM",
  "Ms. FITA",
  "Ms. HANA",
  "Ms. IMEL",
  "Ms. LUCY",
  "Ms. MAX",
  "Ms. NADA",
  "Ms. RYAS",
  "Ms. TYA",
  "Ms. YUKI",
  "Ms. ZEA",
  "Other",
];

export const columnsTabel = [
  {
    name: "Nama",
    selector: (row) => row.name,
  },
  {
    name: "No. WA",
    selector: (row) => row.number_whatsapp,
  },
  {
    name: "Domisili",
    selector: (row) => row.domicile,
  },
  {
    name: "Nama CS",
    selector: (row) => row.customer_service,
  },
  {
    name: "Periode",
    selector: (row) => row.course_period,
  },
  {
    name: "Tanggal Kehadiran",
    selector: (row) => row.arrival_date,
  },
  {
    name: "Waktu Kehadiran",
    selector: (row) => row.arrival_time,
  },
  {
    name: "Akun Instagram",
    selector: (row) => row.account_instagram,
  },
  {
    name: "Pertanyaan",
    selector: (row) => row.notes,
  },
];
