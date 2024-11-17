import { FloatingNav } from "./components/ui/floating-navbar";
import { Cover } from "./sections/cover";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconAppsFilled,
  IconInfoCircleFilled,
  IconPaperclip,
} from "@tabler/icons-react";
import { Projects } from "./sections/project";
import { About } from "./sections/about";
import { CV } from "./sections/cv";
import Contact from "./sections/contact";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/#",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Projects",
      link: "/#project",
      icon: <IconAppsFilled className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconInfoCircleFilled className="h-4 w-4 text-white" />,
    },
    {
      name: "Resume",
      link: "/#cv",
      icon: <IconPaperclip className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <>
      <main>
        <FloatingNav navItems={navItems} />
        <Cover />
        <Projects />
        <About />
        <CV />
        <Contact />
      </main>
      <footer className="bg-[#3F556F]">
        <div className="py-8 text-center text-white">
          <a href="#">
          <div className="flex flex-row underline justify-center items-center gap-x-1">
            <img src="/logo.png" className="object-fit h-8 w-8"></img>
            <div>wodwiii/&gt;</div>
          </div>
          </a>

          <span className="text-sm ">
            © 2024{" "}
            <a href="https://wodwiii.github.io" className="hover:underline">
              wodwiii
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
