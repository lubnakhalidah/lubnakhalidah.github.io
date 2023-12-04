// import React from "react";
import React from "react";
import Navbar from "../../components/Navbars";
import faceImg from "./assets/lubna.png";
import Footer from "../../components/Footer";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

// const EducationTimelineItem = ({ year, degree, institution }) => (
//   <div className="mb-4">
//     <div className="flex items-center mb-2">
//       <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
//       <p className="text-lg font-bold">{year}</p>
//     </div>
//     <p className="text-xl font-bold mb-1">{degree}</p>
//     <p className="text-gray-600">{institution}</p>
//   </div>
// );

const About = () => {
  const educationData = [
    {
      institution: "Institut Teknologi Sepuluh Nopember",
      degree: "Sarjana Teknik Komputer",
      year: "2019 - 2023",
    },
    {
      institution: "SMAN 1 Bangkalan",
      degree: "MIPA",
      year: "2016 - 2019",
    },
  ];

  const experienceData = [
    {
      position: "Frontend Developer",
      company: "Company X",
      year: "2019 - Sekarang",
      responsibilities: [
        "Mengembangkan antarmuka pengguna responsif.",
        "Berpartisipasi dalam rapat tim untuk merencanakan dan mendiskusikan proyek.",
      ],
    },
    {
      position: "Internship - Software Engineer",
      company: "Company Y",
      year: "2018 - 2019",
      responsibilities: [
        "Mempelajari dan menerapkan praktik pengembangan perangkat lunak terbaik.",
        "Bekerja sama dengan tim untuk menyelesaikan proyek-proyek kecil.",
      ],
    },
  ];

  const skillsData = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

  return (
    <div className="bg-white">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="container p-8">
        <header className="text-center mb-4 mt-16">
          <h1 className="text-5xl font-bold">Lubna Khalidah</h1>
          <p className="text-xl">Frontend Developer</p>
        </header>
        <div className="min-h-screen flex flex-wrap items-start justify-center ">
          {/* Foto dan Informasi Pribadi */}
          <div className="flex flex-col my-8 items-center lg:mr-16">
            {/* Foto */}
            {/* <div>
              <h1 className="text-3xl font-bold mb-4 text-center">
                Lubna Khalidah
              </h1>
            </div> */}
            <div className="w-40">
              <img
                src={faceImg} // Ganti dengan URL gambar Anda atau placeholder
                alt="Profil"
                className="w-full h-full"
              />
            </div>

            {/* Informasi Pribadi */}
            <div className="text-start mt-4">
              <p className="text-lg">
                <span className="inline-flex items-center">
                  <FaEnvelope className="mr-2" />
                  khalidahlubna@gmail.com
                </span>
              </p>
              <p className="text-lg">
                <span className="inline-flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Bangkalan
                </span>
              </p>
            </div>

            <section className="mt-4">
              {/* <a href="">
              </a> */}
              <Link to="https://drive.google.com/file/d/11BX8387F5Mh5jnBQJGqolO4i33T2FbJw/view?usp=sharing">
                <button className="btn btn-neutral btn-block">Resume</button>
              </Link>
            </section>
          </div>

          {/* Kolom sebelah kanan */}
          <div className="flex flex-col mx-8">
            {/* Pendidikan */}
            <div className="my-8">
              <h2 className="text-3xl font-bold mb-4">Pendidikan</h2>
              <ul>
                {educationData.map((edu, index) => (
                  <li key={index} className="mb-2">
                    <p className="text-lg font-bold">{edu.degree}</p>
                    <p>{edu.institution}</p>
                    <p>{edu.year}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pengalaman Kerja */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Pengalaman Kerja</h2>
              {/* {experienceData.map((exp, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg font-bold">{exp.position}</p>
                  <p>{exp.company}</p>
                  <p>{exp.year}</p>
                  <ul className="list-disc list-inside">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))} */}
              <p>Coming Soon</p>
            </div>

            {/* Skill */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Skill</h2>
              <ul>
                {skillsData.map((skill, index) => (
                  <li key={index} className="mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
