import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModal from "../components/RenderModal";
import Navigation from "../components/navigation";
import WizardWrapper from "../components/models/wrappers/WizardWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModal>
          <WizardWrapper />
        </RenderModal>
      </div>
    </main>
  );
}
