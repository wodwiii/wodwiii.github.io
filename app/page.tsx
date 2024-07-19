import { FloatingNav } from "./components/ui/floating-navbar";
import { Cover } from "./sections/cover";
import { IconHome, IconMessage, IconUser, IconAppsFilled, IconInfoCircleFilled, IconPaperclip } from "@tabler/icons-react";
import { Projects } from "./sections/project";
import { About } from "./sections/about";
import { CV } from "./sections/cv";
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
      icon: (
        <IconInfoCircleFilled className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Resume",
      link: "/#resume",
      icon: (
        <IconPaperclip className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-white" />
      ),
    },
  ]
  
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Cover/>
      <Projects/>
      <About/>
      <CV/>
    </main>
  );
}
