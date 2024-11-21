import AnimatedDiv from "@/components/AnimatedDiv";
import { NavbarMenu } from "@/components/navbar/Navbar";
import { Meteors } from "@/components/ui/Meteors";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarMenu />
      <div className="w-full flex justify-center">
        <Meteors number={10} />
        <div className="md:mt-24 z-[999]">
          <AnimatedDiv
            className="flex justify-center"
            transition={{ duration: 1.2 }}
          >
            <h1 className="lg:text-7xl md:text-4xl font-semibold text-center text-black/70 pt-12 md:max-w-[780px]">
              Your Ideas. Our Platform. Real-Time Collaboration.
            </h1>
          </AnimatedDiv>
          <AnimatedDiv
            className="flex justify-center py-8 text-black/70"
            transition={{ duration: 1 }}
          >
            <p className="text-center max-w-[500px]">
              Unlock the power of seamless collaboration with Lotion. Create,
              edit, and share your documents with your team in real-time,
              wherever you are.
            </p>
          </AnimatedDiv>
          <AnimatedDiv
            className="flex justify-center"
            transition={{ duration: 1.5 }}
          >
            <Link href="/editor">
              <button className="bg-black text-white rounded-full px-8 py-2">
                Start Collaborating
              </button>
            </Link>
          </AnimatedDiv>
          <AnimatedDiv>
            <div className="flex justify-center py-12">
              <Image
                src={
                  "https://res.cloudinary.com/zapier-media/image/upload/f_auto/q_auto/v1707419888/Blog/what-is-notion/what-is-notion-image11_mxqioe.png?fm=avif"
                }
                width={0}
                height={0}
                unoptimized={true}
                className="h-auto w-[80%] border-[12px] rounded-lg"
                alt="image"
              ></Image>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  );
}
