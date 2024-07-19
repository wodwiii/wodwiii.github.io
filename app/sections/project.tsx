import { BentoGridDemo } from "../components/bentogrid";

export function Projects() {
  return (
    <section
      id="project"
      className="relative justify-center items-center text-white bg-[#778899] pt-12"
    >
      <div className="">
        <div className="text-center font-bold text-4xl xl:text-6xl lg:mx-[5vw] xl:mx-[10vw]">
          Featured Projects
        </div>
        <div>
          <div className="mt-4 pb-12">
            <BentoGridDemo/>
          </div>
        </div>
      </div>
    </section>
  );
}
