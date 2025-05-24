import React from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Nguyễn Thị Hà",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    title: "Bác sĩ chuyên khoa",
    description: "Chuyên gia tư vấn sức khỏe giới tính, tận tâm với khách hàng.",
  },
  {
    id: 2,
    name: "Nguyễn Thị Hà",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    title: "Bác sĩ chuyên khoa",
    description: "Chuyên gia tư vấn sức khỏe giới tính, tận tâm với khách hàng.",
  },
  {
    id: 3,
    name: "Nguyễn Thị Hà",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 5,
    title: "Bác sĩ chuyên khoa",
    description: "Chuyên gia tư vấn sức khỏe giới tính, tận tâm với khách hàng.",
  },
];

export default function DoctorTeamSection() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-primary mb-8 text-center">Đội ngũ bác sĩ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <div key={doc.id} className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
            <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary/10" />
            <div className="flex mb-2">
              {Array.from({ length: doc.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <div className="font-bold text-gray-800">{doc.name}</div>
            <div className="text-sm text-gray-500 mb-2">{doc.title}</div>
            <div className="text-gray-600 text-center text-sm mb-4">{doc.description}</div>         
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/doctors"
          className="px-8 py-3 bg-gradient-primary hover:bg-gradient-primary-hover text-white rounded-lg text-base font-semibold shadow-sm hover:shadow-md transition-all duration-200"
        >
          Xem tất cả
        </Link>
      </div>
    </div>
  );
} 