import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import ContactForm from "@/src/components/contact/ContactForm";

export const metadata = {
  title: "Contact Me | Badr Mohamed - Frontend Developer",
  description:
    "Get in touch with Badr Mohamed for job opportunities, collaborations, or freelance work in React and Next.js web development.",
};

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article
        className="relative w-full flex flex-col items-center justify-center py-8 smpy0
       space-y-8"
      >
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Step inot the circle of echantment an weave your words into the
            fabric of the cosmos. Wheter you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            treasured scrolls within this realm. Use the form below to send your
            missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>
        <ContactForm />
      </article>
    </>
  );
}
