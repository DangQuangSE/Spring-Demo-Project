import React, { useState } from "react";
import { FaMapMarkerAlt, FaMicroscope, FaGlobe, FaBriefcase, FaGraduationCap, FaStar, FaUserMd } from "react-icons/fa";

const doctors = [
  {
    id: 1,
    name: "Cố vấn chuyên môn Phó Hoàng Dũng Mạnh",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
    title: "Cố vấn chuyên môn, Bác sĩ Y khoa, Giáo sư, Tiến sĩ",
    specialties: "Sản phụ khoa, Vô sinh, Sức khỏe tình dục, Tư vấn",
    workplace: "Vinmec Hạ Long",
    languages: ["Tiếng Việt", "English"],
  },
  {
    id: 2,
    name: "Bác sĩ Đỗ Tất Cường",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    title: "Giáo sư, Tiến sĩ, Bác sĩ Y khoa",
    specialties: "Tâm thần",
    workplace: "Vinmec Smart City",
    languages: ["Tiếng Việt"],
  },
  {
    id: 3,
    name: "Nguyễn Thanh Liêm",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    title: "Giáo sư, Tiến sĩ, Bác sĩ Y khoa",
    specialties: "Nhi khoa, Sức khỏe trẻ em",
    workplace: "Vinmec Times City",
    languages: ["English"],
  },
  {
    id: 4,
    name: "Trần Trung Dũng",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 4,
    title: "Tiến sĩ, Bác sĩ Y khoa",
    specialties: "Chấn thương chỉnh hình, Cơ xương khớp",
    workplace: "Vinmec Times City",
    languages: ["Tiếng Việt"],
  },
  {
    id: 5,
    name: "Philippe Macaire",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    rating: 5,
    title: "Giáo sư, Tiến sĩ, Bác sĩ Y khoa",
    specialties: "Gây mê hồi sức, Đào tạo y khoa",
    workplace: "Vinmec Times City",
    languages: ["English"],
  },
  {
    id: 6,
    name: "Phạm Nhật An",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    rating: 4,
    title: "Phó giáo sư, Tiến sĩ, Bác sĩ Y khoa",
    specialties: "Nhi khoa, Hô hấp",
    workplace: "Vinmec Times City",
    languages: ["Tiếng Việt"]
  },
  {
    id: 7,
    name: "Phan Quang Đoàn",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 4,
    title: "Bác sĩ chuyên khoa",
    specialties: "Nội tổng hợp, Nội tiết",
    workplace: "Vinmec Times City",
    languages: ["Tiếng Việt"]
  },
  {
    id: 8,
    name: "Timothy Craig",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 5,
    title: "Giáo sư, Tiến sĩ, Bác sĩ Y khoa",
    specialties: "Dị ứng, Miễn dịch, Hô hấp",
    workplace: "Vinmec Times City",
    languages: ["English"]
  },
];

const PAGE_SIZE = 6;

export default function DoctorsList() {
  // State cho filter
  const [selectedWorkplace, setSelectedWorkplace] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedAcademicRank, setSelectedAcademicRank] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  // Hàm lọc khi bấm Tìm kiếm
  const handleFilter = (e) => {
    e.preventDefault();
    let result = doctors.filter(doc => {
      if (selectedWorkplace && !doc.workplace.includes(selectedWorkplace)) return false;
      if (selectedSpecialty && !doc.specialties.includes(selectedSpecialty)) return false;
      if (selectedLanguage && !(doc.languages || []).includes(selectedLanguage)) return false;
      if (selectedJob && !doc.title.toLowerCase().includes(selectedJob.toLowerCase())) return false;
      if (selectedAcademicRank && !doc.title.toLowerCase().includes(selectedAcademicRank.toLowerCase())) return false;
      if (selectedDegree && !doc.title.toLowerCase().includes(selectedDegree.toLowerCase())) return false;
      if (selectedRating) {
        if (selectedRating === "5" && doc.rating !== 5) return false;
        if (selectedRating === "4" && doc.rating < 4) return false;
      }
      if (searchName && !doc.name.toLowerCase().includes(searchName.toLowerCase())) return false;
      return true;
    });
    setFilteredDoctors(result);
    setPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredDoctors.length / PAGE_SIZE);
  const doctorsToShow = filteredDoctors.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-8 px-2">
        <h1 className="text-xl md:text-2xl font-bold text-primary mb-6">Danh sách Bác sĩ – Chuyên gia</h1>
        {/* Filter Bar */}
        <form onSubmit={handleFilter} className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row md:items-center md:gap-4 gap-3 border-2 border-primary/60">
          <div className="flex flex-wrap gap-3 flex-1">
            {/* Cơ sở */}
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-primary text-lg" />
              <select value={selectedWorkplace} onChange={e => setSelectedWorkplace(e.target.value)} className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[120px] focus:outline-primary">
                <option value="">Lựa chọn cơ sở</option>
                <option value="Vinmec Times City">Vinmec Times City</option>
                <option value="Vinmec Hạ Long">Vinmec Hạ Long</option>
                <option value="Vinmec Smart City">Vinmec Smart City</option>
              </select>
            </div>
            {/* Chuyên môn */}
            <div className="flex items-center gap-1">
              <FaMicroscope className="text-primary text-lg" />
              <select value={selectedSpecialty} onChange={e => setSelectedSpecialty(e.target.value)} className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[120px] focus:outline-primary">
                <option value="">Yêu cầu chuyên môn</option>
                <option value="Sản phụ khoa">Sản phụ khoa</option>
                <option value="Nhi khoa">Nhi khoa</option>
                <option value="Tâm thần">Tâm thần</option>
                <option value="Chấn thương chỉnh hình">Chấn thương chỉnh hình</option>
                <option value="Gây mê hồi sức">Gây mê hồi sức</option>
                <option value="Nội tổng hợp">Nội tổng hợp</option>
                <option value="Dị ứng">Dị ứng</option>
              </select>
            </div>
            {/* Ngôn ngữ */}
            <div className="flex items-center gap-1">
              <FaGlobe className="text-primary text-lg" />
              <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[100px] focus:outline-primary">
                <option value="">Ngôn ngữ</option>
                <option value="Tiếng Việt">Tiếng Việt</option>
                <option value="English">English</option>
              </select>
            </div>
            {/* Nghề nghiệp */}
            <div className="flex items-center gap-1">
              <FaBriefcase className="text-primary text-lg" />
              <select value={selectedJob} onChange={e => setSelectedJob(e.target.value)} className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[100px] focus:outline-primary">
                <option value="">Nghề nghiệp</option>
                <option value="Bác sĩ">Bác sĩ</option>
                <option value="Chuyên gia">Chuyên gia</option>
                <option value="Giáo sư">Giáo sư</option>
              </select>
            </div>
            {/* Học hàm */}
            <div className="flex items-center gap-1">
              <FaGraduationCap className="text-primary text-lg" />
              <select value={selectedAcademicRank} onChange={e => setSelectedAcademicRank(e.target.value)} className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[90px] focus:outline-primary">
                <option value="">Học hàm</option>
                <option value="Giáo sư">Giáo sư</option>
                <option value="Phó giáo sư">Phó giáo sư</option>
              </select>
            </div>
            {/* Học vị */}
            <div className="flex items-center gap-1">
              <FaGraduationCap className="text-primary text-lg" />
              <select value={selectedDegree} onChange={e => setSelectedDegree(e.target.value)} className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[90px] focus:outline-primary">
                <option value="">Học vị</option>
                <option value="Tiến sĩ">Tiến sĩ</option>
                <option value="Bác sĩ">Bác sĩ</option>
              </select>
            </div>
            {/* Số điểm đánh giá */}
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500 text-lg" />
              <select value={selectedRating} onChange={e => setSelectedRating(e.target.value)} className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[90px] focus:outline-primary">
                <option value="">Số điểm đánh giá</option>
                <option value="5">5 sao</option>
                <option value="4">4 sao trở lên</option>
              </select>
            </div>
            {/* Tên bác sĩ/chuyên gia */}
            <div className="flex items-center gap-1">
              <FaUserMd className="text-primary text-lg" />
              <input
                type="text"
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
                placeholder="Nhập tên bác sĩ/chuyên gia..."
                className="border-2 border-primary/60 rounded px-2 py-1 text-sm min-w-[180px] focus:outline-primary"
              />
            </div>
          </div>
          <button type="submit" className="mt-3 md:mt-0 px-10 py-3 bg-gradient-primary hover:bg-gradient-primary-hover text-white rounded-lg text-base font-semibold shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap">
            Tìm kiếm
          </button>
        </form>
        <div className="bg-gray-50 rounded-xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {doctorsToShow.length === 0 ? (
              <div className="col-span-3 text-center text-gray-500 py-8">Không tìm thấy bác sĩ phù hợp.</div>
            ) : (
              doctorsToShow.map((doc) => (
                <div key={doc.id} className="bg-white rounded-lg border p-4 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded object-cover border-2 border-primary/10" />
                    <div>
                      <div className="font-semibold text-primary text-base leading-tight mb-0.5">{doc.name}</div>
                      <div className="text-xs text-gray-500 leading-tight">{doc.title}</div>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: doc.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 mb-1"><span className="font-medium">Chuyên môn:</span> {doc.specialties}</div>
                  <div className="text-xs text-gray-500 mb-3"><span className="font-medium">Nơi làm việc:</span> {doc.workplace}</div>
                  <button className="mt-auto px-4 py-2 bg-gradient-primary hover:bg-gradient-primary-hover text-white rounded font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200">Đăng ký khám</button>
                </div>
              ))
            )}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx + 1)}
                className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                  page === idx + 1
                    ? "bg-gradient-primary text-white border-transparent shadow-sm"
                    : "bg-white text-primary border-primary hover:bg-primary/5"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 