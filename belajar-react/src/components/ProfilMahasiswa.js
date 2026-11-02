// const {nama, nim, program_studi, semester} = props;
function ProfilMahasiswa({nama, nim, program_studi, semester}) {
  const tulisanBiru = {color: "blue"};
  
  return (
     <div>
       <p style={{color: "red"}}>Nama: {nama}</p>
       <p style={tulisanBiru}>NIM: {nim}</p>
       <p>Program Studi: {program_studi}</p>
       <p>Semester: {semester}</p>
     </div>
   )
} 

export default ProfilMahasiswa;