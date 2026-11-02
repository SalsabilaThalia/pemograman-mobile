import { useState } from "react";

function KartuMahasiswa({
    nama = "Tidak Diketahui", 
    nim = "Tidak Diketahui", 
    program_studi = "Tidak Diketahui",
  }) {

  const [absensiCount, setAbsensiCount] = useState(0);

  return (
    <div>
      <p>Nama: {nama}</p>
      <p>NIM: {nim}</p>
      <p>Program Studi: {program_studi}</p>
      <p>Absensi: {absensiCount}</p>
      <button onClick={() => setAbsensiCount(absensiCount + 1)}>Tambah Absensi</button>
      <button onClick={() => setAbsensiCount(absensiCount - 1)}>Kurangi Absensi</button>
    </div>
  )
}

export default KartuMahasiswa;