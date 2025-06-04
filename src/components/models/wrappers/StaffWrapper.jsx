"use client";
import dynamic from "next/dynamic";
const Staff = dynamic(() => import("../Staff"), {
  ssr: false,
});
const StaffWrapper = () => {
  return <Staff />;
};

export default StaffWrapper;
