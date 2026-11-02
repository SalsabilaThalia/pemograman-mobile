import KartuMahasiswa from "./components/KartuMahasiswa";

import { useState } from "react";


function Counter(){
  // const count = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
    </div>
  )
}

const mahasiswa = [
  {
    nama: "Budi Santoso",
    nim: "231002",
    programStudi: "Informatika"
  },
  {
    nama: "Siti Aminah",
    nim: "231003",
    programStudi: "Sistem Informasi"
  },
  {
    nama: "Rina Putri",
    nim: "231004",
    programStudi: "Informatika"
  }
];


function App() {
  return (
    <div>
      {mahasiswa.map((mhs) => (
        <KartuMahasiswa
          nama={mhs.nama}
          nim={mhs.nim}
          program_studi={mhs.programStudi}
        />
      ))}
    </div>
  );
}

export default App;
