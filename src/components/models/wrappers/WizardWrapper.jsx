"use client";
import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("../Wizard"), {
  ssr: false,
});
const WizardWrapper = () => {
  return <Wizard />;
};

export default WizardWrapper;
