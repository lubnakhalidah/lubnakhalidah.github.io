import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/Navbars";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import React from "react";

// function App() {
//   return (
//     <div className="App font-sans">
//       <header className="bg-gray-800 text-white text-center py-4">
//         <h1 className="text-3xl font-bold">Portofolio Saya</h1>
//       </header>

//       <section className="py-8">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <PortfolioItem
//               title="Project 1"
//               description="Deskripsi singkat tentang proyek ini. Anda dapat menambahkan informasi lebih lanjut di sini."
//               image="https://placekitten.com/800/400"
//             />
//             <PortfolioItem
//               title="Project 2"
//               description="Deskripsi singkat tentang proyek ini. Anda dapat menambahkan informasi lebih lanjut di sini."
//               image="https://placekitten.com/800/401"
//             />
//             {/* Tambahkan item portofolio lainnya sesuai kebutuhan */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const PortfolioItem = ({ title, description, image }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md">
//     <img
//       className="w-full h-48 object-cover mb-4 rounded"
//       src={image}
//       alt={title}
//     />
//     <h2 className="text-xl font-semibold">{title}</h2>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// export default App;
