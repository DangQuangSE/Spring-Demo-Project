import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Tất cả danh mục", icon: "🔲" },
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

export default function CategoryBar() {
  const mainCategories = categories.slice(0, 5);
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-30 overflow-x-auto">
      <div className="flex gap-2 px-4 py-2 min-w-max justify-center items-center">
        {mainCategories.map((cat, idx) =>
          cat.label === "Tất cả danh mục" ? (
            <Link
              to="/categories"
              key={idx}
              className="flex items-center gap-2 bg-gradient-primary text-white px-3 py-1 rounded-full font-medium whitespace-nowrap transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gradient-primary-hover"
            >
              <span>{cat.icon}</span>
              {cat.label}
            </Link>
          ) : (
            <button
              key={idx}
              className="flex items-center gap-2 bg-gradient-primary text-white px-3 py-1 rounded-full font-medium whitespace-nowrap transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gradient-primary-hover"
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          )
        )}
      </div>
    </div>
  );
}
