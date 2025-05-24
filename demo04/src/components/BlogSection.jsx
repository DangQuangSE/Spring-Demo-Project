import React, { useState } from "react";
import { FaFire, FaBookOpen, FaClock } from "react-icons/fa";

const tabs = [
  { label: "Bài viết nổi bật", icon: <FaFire className="inline mr-1" /> },
  { label: "Đọc nhiều nhất", icon: <FaBookOpen className="inline mr-1" /> },
  { label: "Bài viết mới nhất", icon: <FaClock className="inline mr-1" /> },
];

const blogs = [
  {
    title: "[Hình ảnh] Các tư thế quan hệ tình dục an toàn và thăng hoa cho cặp đôi",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    author: "Bác sĩ Lê Thị Mỹ Duyên",
    authorAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "Khám phá các tư thế giúp tăng cảm xúc, an toàn và gắn kết tình cảm cho các cặp đôi.",
    category: "Bí quyết quan hệ",
    categoryColor: "#e57373",
  },
  {
    title: "Dấu hiệu nhận biết bệnh lây truyền qua đường tình dục (STIs)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    author: "Bác sĩ Nguyễn Thắng",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Những triệu chứng thường gặp và cách phòng tránh các bệnh STIs.",
    category: "Sức khỏe tình dục",
    categoryColor: "#64b5f6",
  },
  {
    title: "Hướng dẫn sử dụng bao cao su đúng cách cho nam và nữ",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    author: "Bác sĩ Trần Minh Hạnh",
    authorAvatar: "https://randomuser.me/api/portraits/women/47.jpg",
    description: "Bao cao su giúp phòng tránh thai và bệnh lây truyền. Cách sử dụng đúng để đạt hiệu quả tối đa.",
    category: "Tư vấn an toàn",
    categoryColor: "#81c784",
  },
  {
    title: "Tư vấn tâm lý về giới tính và tình dục cho thanh thiếu niên",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    author: "Bác sĩ Lê Văn Phúc",
    authorAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
    description: "Giải đáp thắc mắc về giới tính, định hướng phát triển lành mạnh cho tuổi mới lớn.",
    category: "Tư vấn giới tính",
    categoryColor: "#ba68c8",
  },
  {
    title: "Phòng tránh mang thai ngoài ý muốn: Những điều cần biết",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    author: "Bác sĩ Nguyễn Thị Hồng",
    authorAvatar: "https://randomuser.me/api/portraits/women/50.jpg",
    description: "Các biện pháp tránh thai an toàn, hiệu quả và phù hợp với từng đối tượng.",
    category: "Kiến thức sức khỏe",
    categoryColor: "#ffd54f",
  },
];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="max-w-6xl mx-auto py-8 px-1 md:px-0">
      {/* Tabs */}
      <div className="flex gap-1 mb-3">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center px-3 py-1.5 rounded border text-xs font-medium transition-all mr-1 ${
              activeTab === idx
                ? "bg-gradient-primary text-white border-transparent shadow-sm"
                : "bg-white text-primary border-primary hover:bg-primary/5"
            }`}
            style={{ minWidth: 0 }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
        {/* Main blog (left, spans 7/12) */}
        <div className="md:col-span-7 bg-white rounded-lg border p-0 flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200">
          <div className="relative w-full h-48 md:h-64">
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full h-full object-cover"
            />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-semibold"
              style={{ background: blogs[0].categoryColor, color: '#fff' }}
            >
              {blogs[0].category}
            </span>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-primary cursor-pointer leading-tight transition-colors duration-200">
              {blogs[0].title}
            </h3>
            <p className="text-gray-700 text-sm mb-2 line-clamp-3 leading-snug">{blogs[0].description}</p>
            <div className="flex items-center mt-auto">
              <img src={blogs[0].authorAvatar} alt={blogs[0].author} className="w-7 h-7 rounded-full mr-2" />
              <span className="text-xs text-gray-600">{blogs[0].author}</span>
            </div>
          </div>
        </div>
        {/* 4 small blogs (right, spans 5/12) */}
        <div className="md:col-span-5 flex flex-col gap-2">
          {blogs.slice(1).map((blog, idx) => (
            <div key={idx} className="flex items-center bg-white rounded-lg border overflow-hidden hover:shadow-md transition-all duration-200 p-2">
              <div className="flex-1 flex flex-col justify-between pr-2">
                <span
                  className="px-2 py-0.5 rounded text-xs font-semibold mb-0.5 self-start"
                  style={{ background: blog.categoryColor, color: '#fff' }}
                >
                  {blog.category}
                </span>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5 hover:text-primary cursor-pointer line-clamp-2 leading-tight transition-colors duration-200">
                  {blog.title}
                </h4>
                <p className="text-gray-600 text-xs mb-1 line-clamp-2 leading-snug">{blog.description}</p>
                <div className="flex items-center mt-auto">
                  <img src={blog.authorAvatar} alt={blog.author} className="w-5 h-5 rounded-full mr-1" />
                  <span className="text-xs text-gray-500">{blog.author}</span>
                </div>
              </div>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-16 object-cover rounded ml-2 flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
