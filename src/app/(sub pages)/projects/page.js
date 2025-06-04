import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/src/components/projects";
import { projectsData } from "@/src/data";
import RenderModal from "@/src/components/RenderModal";
import StaffWrapper from "@/src/components/models/wrappers/StaffWrapper";

export const metadata = {
  title: "My Projects | Badr Mohamed - Frontend Developer Portfolio",
  description:
    "Explore a selection of web projects developed by Badr Mohamed, showcasing skills in React, Next.js, modern UI/UX, and responsive design.",
};

export default function Projects() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-1/6 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-24 -z-10 h-screen">
        <RenderModal>
          <StaffWrapper />
        </RenderModal>
      </div>
    </>
  );
}
