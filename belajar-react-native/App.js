// // https://short.ezapp.id/28KO

// import { 
//   View, Text, StyleSheet, 
//   Button, Pressable, Image, ScrollView, FlatList, useWindowDimensions } from 'react-native';

// const mahasiswa = [
//   {
//     nama: "Andi Saputra",
//     jurusan: "Teknik Informatika",
//     universitas: "Universitas Indonesia",
//     foto: "https://i.pravatar.cc/300?img=11"
//   },
//   {
//     nama: "Siti Nurhaliza",
//     jurusan: "Sistem Informasi",
//     universitas: "Universitas Gadjah Mada",
//     foto: "https://i.pravatar.cc/300?img=47"
//   },
//   {
//     nama: "Budi Santoso",
//     jurusan: "Manajemen",
//     universitas: "Universitas Brawijaya",
//     foto: "https://i.pravatar.cc/300?img=12"
//   },
//   {
//     nama: "Dewi Anggraini",
//     jurusan: "Akuntansi",
//     universitas: "Universitas Sriwijaya",
//     foto: "https://i.pravatar.cc/300?img=44"
//   },
//   {
//     nama: "Rizky Pratama",
//     jurusan: "Teknik Elektro",
//     universitas: "Institut Teknologi Bandung",
//     foto: "https://i.pravatar.cc/300?img=13"
//   },
//   {
//     nama: "Putri Amelia",
//     jurusan: "Ilmu Komunikasi",
//     universitas: "Universitas Diponegoro",
//     foto: "https://i.pravatar.cc/300?img=45"
//   },
//   {
//     nama: "Fajar Ramadhan",
//     jurusan: "Pendidikan Informatika",
//     universitas: "Universitas Negeri Yogyakarta",
//     foto: "https://i.pravatar.cc/300?img=14"
//   },
//   {
//     nama: "Nadia Permatasari",
//     jurusan: "Desain Komunikasi Visual",
//     universitas: "Universitas Telkom",
//     foto: "https://i.pravatar.cc/300?img=46"
//   },
//   {
//     nama: "Dimas Kurniawan",
//     jurusan: "Teknik Sipil",
//     universitas: "Universitas Hasanuddin",
//     foto: "https://i.pravatar.cc/300?img=15"
//   },
//   {
//     nama: "Aulia Rahmawati",
//     jurusan: "Farmasi",
//     universitas: "Universitas Airlangga",
//     foto: "https://i.pravatar.cc/300?img=48"
//   }
// ];

// function KartuMahasiswa({ nama, jurusan, universitas, foto = "avatar.jpg"}) {
// return (
//     <View style={styles.card}>
//       {/* load gambar lokal */}
//       {/* <Image source={require("./assets/avatar.jpg")} */}

//       {/* load gambar remote */}
//       <Image source={{uri: foto}} 
//         style={styles.gambar}
//       />
//       <Text style={styles.nama}>{nama}</Text>
//       <Text style={styles.informasi}>Jurusan : {jurusan} </Text>
//       <Text style={styles.informasi}>Universitas : {universitas}</Text>
//     </View>
// )
// }

// // https://short.ezapp.id/BKZB

// export default function App(){
//   // Menggunakan hook useWindowDimensions untuk mendapatkan lebar layar
//   const screenWidth = useWindowDimensions().width;
//   const numColumns = screenWidth > 600 ? 2 : 1; 
//   // Adjust number of columns based on screen width

//   function handlePress(){
//     return console.log("Tombol ditekan");
//   }

//   return (
//     <View style={styles.container}>
//       {/* <ScrollView>
//         {mahasiswa.map((mhs, index) => {
//           return (
//             <KartuMahasiswa 
//               key={index}
//               nama={mhs.nama} 
//               jurusan={mhs.jurusan}
//               universitas={mhs.universitas}
//               foto={mhs.foto}
//             />
//           );
//         })}
//       </ScrollView> */}
//       <FlatList
//         data={mahasiswa}
//         // Forces re-render when numColumns changes
//         key={numColumns} 
//         numColumns={numColumns}
//         columnWrapperStyle={numColumns > 1 ? styles.row : null} 
//         renderItem={({ item }) => (
//           <KartuMahasiswa
//             nama={item.nama}
//             jurusan={item.jurusan}
//             universitas={item.universitas}
//             foto={item.foto}
//           />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   row: {
//     justifyContent: 'space-between', // Spreads items evenly across the row
//     gap: 10, // Adds space between items in the row
//     paddingHorizontal: 16,
//     marginBottom: 10,
//   },
//   container: {
//     padding: 20,
//     flex: 1
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     marginTop: 20,
//   },
//   gambar: {
//     width: 80,
//     height: 80,
//     borderRadius: 100
//   },
//   nama: {
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   informasi: {
//     fontSize: 16,
//     color: 'gray'
//   },
// });




// TUGAS MEMBUAT FOOD CATALOG



// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   Image,
//   ScrollView,
// } from 'react-native';

// const foods = [
//   {
//     name: 'Nasi Goreng',
//     price: 'Rp 15.000',
//     image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
//   },
//   {
//     name: 'Burger',
//     price: 'Rp 25.000',
//     image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
//   },
//   {
//     name: 'Pizza',
//     price: 'Rp 35.000',
//     image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
//   },
//   {
//     name: 'French Fries',
//     price: 'Rp 12.000',
//     image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
//   },
// ];

// function FoodCatalog({ name, price, image, handlePress }) {
//   return (
//     <View style={styles.card}>
//       <Image
//         source={{ uri: image }}
//         style={styles.foodImage}
//       />

//       <View style={styles.cardContent}>
//         <Text style={styles.foodName}>{name}</Text>

//         <Text style={styles.foodPrice}>{price}</Text>

//         <Pressable
//           style={styles.buyButton}
//           onPress={handlePress}
//         >
//           <Text style={styles.buttonText}>
//             Beli Sekarang
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// export default function App() {

//   function handlePress() {
//     return console.log('Tombol ditekan');
//   }

//   return (
//     <View style={styles.container}>

//       <View style={styles.header}>
//         <Text style={styles.title}>Food Catalog</Text>
//         <Text style={styles.subtitle}>
//           Temukan makanan favoritmu!
//         </Text>
//       </View>

//       <ScrollView>

//         <View style={styles.category}>
//           <Text style={styles.sectionTitle}>
//             Kategori Makanan
//           </Text>

//           <View style={styles.categoryList}>

//             <Pressable style={styles.categoryItem} onPress={handlePress}>
//               <Text>All</Text>
//             </Pressable>

//             <Pressable style={styles.categoryItem} onPress={handlePress}>
//               <Text>Rice</Text>
//             </Pressable>

//             <Pressable style={styles.categoryItem} onPress={handlePress}>
//               <Text>Burger</Text>
//             </Pressable>

//             <Pressable style={styles.categoryItem} onPress={handlePress}>
//               <Text>Pizza</Text>
//             </Pressable>

//           </View>
//         </View>

//         <View style={styles.foodSection}>
//           <Text style={styles.sectionTitle}>
//             Daftar Makanan
//           </Text>

//           {foods.map((food, index) => {
//             return (
//               <FoodCatalog
//                 key={index}
//                 name={food.name}
//                 price={food.price}
//                 image={food.image}
//                 handlePress={handlePress}
//               />
//             );
//           })}

//         </View>

//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },

//   header: {
//     padding: 20,
//     backgroundColor: '#FF6B35',
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: 'white',
//   },

//   subtitle: {
//     color: 'white',
//     marginTop: 5,
//   },

//   category: {
//     padding: 15,
//   },

//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },

//   categoryList: {
//     flexDirection: 'row',
//     gap: 10,
//   },

//   categoryItem: {
//     padding: 12,
//     backgroundColor: 'white',
//     borderRadius: 8,
//   },

//   foodSection: {
//     padding: 15,
//   },

//   card: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     marginBottom: 15,
//     overflow: 'hidden',
//   },

//   foodImage: {
//     width: '100%',
//     height: 180,
//   },

//   cardContent: {
//     padding: 15,
//   },

//   foodName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   foodPrice: {
//     color: '#FF6B35',
//     fontSize: 16,
//     marginVertical: 8,
//   },

//   buyButton: {
//     backgroundColor: '#FF6B35',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },

//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },

// });

// Yang dari sir

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

const foods = [
  {
    id: '1',
    name: 'Nasi Goreng',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
  },
  {
    id: '2',
    name: 'Burger',
    price: 'Rp 25.000',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
  },
  {
    id: '3',
    name: 'Pizza',
    price: 'Rp 35.000',
    image: 'https://images.unsplash.com/photo- pizza?w=400',
  },
  {
    id: '4',
    name: 'French Fries',
    price: 'Rp 12.000',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400',
  },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>  
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Food Catalog</Text>
        <Text style={styles.subtitle}>Temukan makanan favoritmu!</Text>
      </View>

      {/* Category */}
      <View style={styles.category}>
        <Text style={styles.sectionTitle}>Kategori Makanan</Text>

        <View style={styles.categoryList}>
          <Pressable style={styles.categoryItem}>
            <Text>All</Text>
          </Pressable>
          <Pressable style={styles.categoryItem}>
            <Text>Rice</Text>
          </Pressable>
          <Pressable style={styles.categoryItem}>
            <Text>Burger</Text>
          </Pressable>
          <Pressable style={styles.categoryItem}>
            <Text>Pizza</Text>
          </Pressable>
        </View>
      </View>

      {/* Food List */}
      <View style={styles.foodSection}>
        <Text style={styles.sectionTitle}>
          Daftar Makanan</Text>

        {foods.map((food) => (
          <View style={styles.card} key={food.id}>
            <Image source={{ uri: food.image }} style={styles.foodImage} />
            <View style={styles.cardContent}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodPrice}>{food.price}</Text>
              <Pressable style={styles.buyButton}>
                <Text style={styles.buttonText}>Beli Sekarang</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    padding: 20,
    backgroundColor: '#FF6B35',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },

  subtitle: {
    color: 'white',
    marginTop: 5,
  },

  category: {
    padding: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  categoryList: {
    flexDirection: 'row',
    gap: 10,
  },

  categoryItem: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  foodSection: {
    padding: 15,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
  },

  foodImage: {
    width: '100%',
    height: 180,
  },

  cardContent: {
    padding: 15,
  },

  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  foodPrice: {
    color: '#FF6B35',
    fontSize: 16,
    marginVertical: 8,
  },

  buyButton: {
    backgroundColor: '#FF6B35',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
