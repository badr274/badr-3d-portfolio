import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModal from "@/src/components/RenderModal";
import AboutDetails from "@/src/components/about";
import HatModelWrapper from "@/src/components/models/wrappers/HatModelWrapper";

export const metadata = {
  title: "About Me | Badr Mohamed - Frontend Developer",
  description:
    "Learn more about Badr Mohamed, a passionate frontend developer skilled in React.js and Next.js, focused on building engaging and high-performance user interfaces.",
};

export default function About() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModal>
          <HatModelWrapper />
        </RenderModal>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            BadrMohamed
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
