import Image from "next/image";
import { IconBrandCSharp, IconBrandCpp } from "@tabler/icons-react";
import { HardwareIcon } from "../components/hardwareicons";
import { SoftwareIcons } from "../components/softwareicons";
import { SocialIcons } from "../components/socialicons";
import BlurFade from "../components/magicui/blurfade";
import LetterPullup from "../components/magicui/letterpullup";
export function Cover() {
  return (
    <section
      id="cover"
      className="relative justify-center items-center text-white bg-[#778899]"
    >
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:mx-[5vw] xl:mx-[10vw] lg:h-[85vh] py-10">
        <div className="text-center content-center text-2xl text-white lg:text-left xl:text-5xl">
          <BlurFade delay={0.25} inView>
            <p>Hey there, I&apos;m</p>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="text-5xl xl:text-7xl font-bold">RODRIGO</p>
            <p className="text-5xl xl:text-7xl font-bold">BARIEN III</p>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <p>I love building things.</p>
          </BlurFade>
        </div>
        <BlurFade delay={0.25} inView>
          <div className="flex justify-center items-center">
            <Image src={"portrait.png"} alt={""} width={600} height={600} />
          </div>
        </BlurFade>
      </div>
      <div className="flex lg:absolute flex-row lg:flex-col gap-2 right-8 bottom-[18vh] text-4xl justify-center mb-8">
        <SocialIcons />
      </div>
      <div className="bg-[#3F556F] lg:h-min-[15vh] px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:mx-[5vw] xl:mx-[10vw] gap-y-8 items-center py-6">
          <div className="flex font-bold text-6xl items-center">
            <LetterPullup words={"2"} delay={0.75} />
            <span className="font-normal text-base lg:w-28">
              Years of Experience
            </span>
          </div>
          <div className="flex font-bold text-6xl items-center ">
            <LetterPullup words={"16"} delay={0.75} />
            <span className="font-normal text-base max-w-48 content-center">
              Software/Hardware Projects Completed
            </span>
          </div>
          <div className="text-center">
            Hardware
            <BlurFade delay={0.25 * 2}>
              <div className="flex flex-row gap-x-4 items-center my-2 justify-center text-2xl">
                <HardwareIcon />
              </div>
            </BlurFade>
          </div>
          <div className="text-center">
            Software/Web
            <BlurFade delay={0.25 * 2}>
              <div className="flex flex-row gap-x-4 items-center my-2 justify-center text-2xl">
                <SoftwareIcons />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
