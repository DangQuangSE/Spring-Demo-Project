import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaCalendarAlt,
  FaUserMd,
  FaComments,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import CategoryBar from "../components/layout/CategoryBar";
import BlogSection from "../components/BlogSection";
import DoctorTeamSection from "../components/DoctorTeamSection";

const Home = () => {
  const banners = [
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Gender Healthcare Service",
      description:
        "Professional healthcare services for sexual and reproductive health. Get expert consultation, testing, and support in a confidential and comfortable environment.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Expert Medical Care",
      description:
        "Access to qualified healthcare professionals and comprehensive medical services for all your needs.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "24/7 Support",
      description:
        "Round-the-clock medical assistance and support whenever you need it.",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextBanner, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="relative w-full">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover transition-opacity duration-1000"
            src={banners[currentBanner].image}
            alt="Healthcare"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 mix-blend-multiply" />
        </div>
        <div className="relative w-full py-24 px-0 flex flex-col items-start justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl ml-8">
            {banners[currentBanner].title}
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl ml-8">
            {banners[currentBanner].description}
          </p>
          <div className="mt-10 ml-8">
            <Link
              to="/register"
              className="inline-block bg-gradient-primary hover:bg-gradient-primary-hover py-3 px-8 border border-transparent rounded-md text-base font-medium text-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10">
          <button
            onClick={prevBanner}
            className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Previous banner"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentBanner === index ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextBanner}
            className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Next banner"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="py-12 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center w-full">
            <h2 className="text-lg font-bold text-primary mb-8">
              DỊCH VỤ CỦA CHÚNG TÔI
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="bg-gradient-primary text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 w-full max-w-xs flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Tư vấn trực tuyến
              </h3>
              <p className="text-sm text-white text-center">
                Đặt lịch tư vấn trực tuyến với các chuyên gia về sức khỏe giới
                tính và sinh sản.
              </p>
            </div>
            <div className="bg-gradient-primary text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 w-full max-w-xs flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Xét nghiệm STIs
              </h3>
              <p className="text-sm text-white text-center">
                Dịch vụ xét nghiệm các bệnh lây truyền qua đường tình dục an
                toàn và bảo mật.
              </p>
            </div>
            <div className="bg-gradient-primary text-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 w-full max-w-xs flex flex-col items-center">
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Theo dõi chu kì
              </h3>
              <p className="text-sm text-white text-center">
                Công cụ theo dõi chu kì kinh nguyệt và dự đoán thời gian rụng
                trứng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
      <DoctorTeamSection />
    </div>
  );
};

export default Home;
