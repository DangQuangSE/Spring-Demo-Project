import React from "react";
import { Link } from "react-router-dom";

export default function TopNoticeBar() {
  return (
    <div className="w-full bg-gradient-primary text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
      Hỏi bác sĩ trực tuyến
      <span role="img" aria-label="point right">👉</span>
      <Link to="/tu-van-truc-tuyen" className="underline font-semibold hover:text-white/80">tại đây</Link>
      <span role="img" aria-label="point left">👈</span>
    </div>
  );
} 