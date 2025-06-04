"use client";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("../HatModel"), {
  ssr: false,
});
const HatModelWrapper = () => {
  return <HatModel />;
};

export default HatModelWrapper;
