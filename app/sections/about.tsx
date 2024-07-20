import BlurFade from "../components/magicui/blurfade";
import Image from "next/image";
export function About() {
  return (
    <section
      id="about"
      className="relative justify-center items-center text-white bg-[#3F556F] py-12"
    >
      <div className="text-center font-bold text-4xl xl:text-6xl lg:mx-[5vw] xl:mx-[10vw]">
        About Me
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-center lg:mx-[5vw] px-6 lg:px-24">
        <BlurFade delay={0.25} inView>
          <div className="justify-center items-center">
            <Image src={"/logo.png"} alt={""} width={300} height={300} />
          </div>
        </BlurFade>
        <div className="text-xl text-center text-white lg:text-justify xl:text-2xl lg:max-w-[45vw]">
          <BlurFade delay={0.25} inView>
            <p>
              Hi I&apos;m{" "}
              <span className="font-bold">Rodrigo G. Barien III </span>
            </p>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="">
              I&apos;m an electronics engineer with a strong background in
              embedded systems, machine learning and AI, and software
              development. My passion for technology drives me to continually
              innovate and stay at the forefront of industry advancements.
            </p>
          </BlurFade>
        </div>
      </div>
      <div className="text-center font-bold text-2xl my-6">
        My Education & Experience
      </div>
      <div className="flex flex-col justify-center lg:flex-row items-center gap-4 mt-6">
        <div className="bg-[#778899] w-[320px] lg:w-[400px] h-[300px] rounded-3xl">
          <div className="flex flex-row text-2xl items-center mt-4 justify-center font-bold">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="white"
                  d="M219.3.5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128S96 230.7 96 160v-57.1l-48-9.6v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3S52.8 256 48 256H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64c0-11.4 8.1-21.3 19.3-23.5zM111.9 327.7c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5c65 20.9 112 81.7 112 153.6c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6"
                />
              </svg>
            </div>
            Education
          </div>
          <hr className="h-px my-2 bg-white border-0"></hr>
          <div className="px-4 py-4 ">
            <div className="flex flex-row text-xl items-center justify-between">
              University of Saint Louis
              <div className="bg-[#3F556F] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                2024
              </div>
            </div>
            <div className="text-sm font-normal">
              BS Electronics Engineering
            </div>
          </div>
          <div className="px-4 py-4 ">
            <div className="flex flex-row text-xl items-center justify-between">
              Saint Paul University Philippines
              <div className="bg-[#3F556F] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                2020
              </div>
            </div>
            <div className="text-sm font-normal">
              Secondary Education (STEM)
            </div>
          </div>
        </div>
        <div className="bg-[#778899] w-[320px] lg:w-[400px] h-[300px] rounded-3xl ">
          <div className="flex flex-row text-2xl items-center mt-4 justify-center font-bold">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="white"
                  d="M336 288H176v-32H16v196a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V256H336Zm160-164a12 12 0 0 0-12-12H384V56a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v100h480Zm-152-12H168V88h176Z"
                />
              </svg>
            </div>
            Work Experience
          </div>
          <hr className="h-px my-2 bg-white border-0"></hr>
          <div className="px-4 py-3 ">
            <div className="flex flex-row text-xl items-center justify-between">
              Upwork
              <div className="bg-[#3F556F] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                Present
              </div>
            </div>
            <div className="text-sm font-normal">
              Freelance Developer
            </div>
          </div>
          <div className="px-4 py-3 ">
            <div className="flex flex-row text-xl items-center justify-between">
              Globe Telecom Inc.
              <div className="bg-[#3F556F] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                2023
              </div>
            </div>
            <div className="text-sm font-normal">
              Emerging Technologies Intern
            </div>
          </div>
          <div className="px-4 py-3 ">
            <div className="flex flex-row text-xl items-center justify-between">
              IECEP Cagayan Valley ESC
              <div className="bg-[#3F556F] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                2024
              </div>
            </div>
            <div className="text-sm font-normal">
              Organizational President
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
