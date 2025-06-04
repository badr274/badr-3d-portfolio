import {
  Github,
  Home,
  Linkedin,
  MessageCircleMore,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "whatsapp":
      return <MessageCircleMore className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion.create(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="custom-bg text-foreground rounded-full flex items-center justify-center "
              aria-label={label}
              name={label}
            >
              <span className="relative peer w-14 h-14 p-4 animate-spin-slow-reverse group-hover:[animation-play-state:paused] hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={`absolute hidden peer-hover:block px-2 mx-2 top-1/2 -translate-y-1/2
                  bg-background text-foreground text-sm left-full rounded-md shadow-lg whitespace-nowrap`}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className=" cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="custom-bg text-foreground rounded-full flex items-center justify-center "
              aria-label={label}
              name={label}
            >
              <span className="relative peer w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left"
                      ? "right-full left-auto mr-2"
                      : "left-full ml-2"
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
