"use client";
import Image from "next/image";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base text-nowrap">
              years of experience
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=badr274&theme=transparent&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false&hide_border=true&"
            alt="badrmohame github"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=badr274&theme=transparent&title_color=fefe5b&text_color=ffffff&icon_color=fefe5b&text_bold=false&hide_border=true&"
            alt="badrmohame github"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=htmx,html,css,sass,js,ts,bootstrap,tailwind,materialui,threejs,react,redux,next,vue,
            vuetify,vercel,vite,vscode,firebase,git,github,netlify"
            alt="badrmohame github"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
