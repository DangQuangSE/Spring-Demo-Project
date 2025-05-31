import React, { useState } from "react";

const categories = [
  { label: "Tư vấn giới tính", icon: "💬" },
  { label: "Sức khỏe sinh sản", icon: "🧬" },
  { label: "Phòng tránh thai", icon: "🩺" },
  { label: "Bệnh lây qua đường tình dục", icon: "🦠" },
  { label: "Tâm lý & tình cảm", icon: "💖" },
  { label: "Kiến thức tuổi dậy thì", icon: "🌱" },
  { label: "LGBTQ+", icon: "🏳️‍🌈" },
  { label: "Mang thai an toàn", icon: "🤰" },
  { label: "Chăm sóc trẻ vị thành niên", icon: "👦👧" },
];

export default function Categories() {
  const [search, setSearch] = useState("");
  const filtered = categories.filter(cat =>
    cat.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#2196f3] mb-6 text-center">Bạn đang tìm kiếm gì?</h1>
        <input
          type="text"
          placeholder="Tìm kiếm chuyên mục"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full mb-8 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2196f3] text-lg"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="text-base font-semibold text-gray-800 text-center">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 