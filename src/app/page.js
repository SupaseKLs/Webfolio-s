import Navbar from "@/components/Navbar/page";
import Image from "next/image";
import Wise from "@/assets/img/p1.jpg";
import Scg from "@/assets/img/p2.jpg";
import Chula from "@/assets/img/p3.jpg";
import Portfolio_aye from "@/assets/img/Aye.png";
import Furniture from "@/assets/img/Synliving.png";
import MuchMedia from "@/assets/img/MuchMedia.png";
import Multicamp from "@/assets/img/Multicamp.png";
import Link from "next/link";
import Horizontal from "@/components/Horizontal/page";
import Text_opacity from "../components/text-gradient-opacity/page";
import Text_Parallax from "../components/text-parallax/page";
import Zoom_Parallax from "../components/ZoomParallax/page";
import Sticky_Footer from "../components/Sticky-Footer/page";
import CircleText from "../components/CircleText/page";
import { NumberTicker } from "../components/NumberTicker/page";
import ReadmoreWorks from "@/components/ReadmoreWork/page";
export default function Home() {
  const projects = [
    {
      title: "MuchMedia",
      role: "• FRONT-END DEV",
      description:
        "Created the MuchMedia website, a multimedia platform, as a second-year team project focused on user interaction.",
      image: MuchMedia,
      link: "https://much-media.vercel.app/",
    },
    {
      title: "Webfolio - Aye",
      role: "• FRONT-END DEV",
      description:
        "Created Webfolio, a responsive, user-friendly platform for showcasing work on mobile and desktop.",
      image: Portfolio_aye,
      link: "https://webfolio-aye.vercel.app/",
    },
    {
      title: "Multicamp",
      role: "• FRONT-END DEV",
      description:
        "Presented and taught basic web application development, creating all content as a web application.",
      image: Multicamp,
      link: "https://multicamp-workshop.vercel.app/",
    },
    {
      title: "SYNLIVING",
      role: "• COMING SOON",
      description:
        "Created an e-commerce furniture website with categorization, cart, authentication, and new arrivals.",
      image: Furniture,
      link: "https://www.figma.com/design/U5hTokbZyiswLkAitfKKUU/Furniture?node-id=0-1&t=IdOFGuk4UuNf1NRF-1/",
    },
    {
      title: "Wise +",
      role: "• UX/UI DESIGN",
      description:
        "Designed an application that helps solve fraud problems through online financial transactions.",
      image: Wise,
      link: "https://www.behance.net/gallery/214398637/Wise-",
    },
    {
      title: "ArmFlag",
      role: "• UI DESIGN",
      description:
        "Developed ArmFlag, a smart armband for health tracking with gamification, gaining business experience.",
      image: Scg,
      link: "https://www.behance.net/gallery/214398897/AlmFlag-EcoCare",
    },
    {
      title: "PayGuard",
      role: "• UX/UI Design",
      description:
        "Created an application to solve online finance fraud problems for a legal innovation competition.",
      image: Chula,
      link: "https://www.behance.net/gallery/208395975/PayGuard-help-to-fraud-through-money-transfer",
    },
  ];

  return (
    <>
      <div
        className="relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://cliply.co/wp-content/uploads/2021/07/402107790_STATIC_NOISE_400.gif')]"
      >
        <div className="fixed bottom-0 z-50 right-0">
          <CircleText />
        </div>

        <div className="bg-s">
          <Navbar />
        </div>

        <Text_opacity className="text-white uppercase" />

        <section className="h-full" id="about">
          <div className="my-20 flex justify-center">
            <video
              src="./supasek1.mp4"
              playsInline
              loading="lazy"
              autoPlay
              loop
              muted
              className="w-11/12 rounded-xl h-[400px] md:h-[700px] object-cover"
            />
          </div>
        </section>

        <section className="h-full">
          <div className="flex flex-col justify-center items-center mt-20 text-white">
            <h1 className="text-2xl md:text-5xl">Transformations Along</h1>
            <h1 className="text-4xl md:text-7xl">My Path to Growth</h1>
          </div>
          <div className="w-11/12 mx-auto">
            <div className="mt-20">
              <Horizontal />
            </div>
          </div>
        </section>

        <section className="px-6 py-10 bg-gradient-to-t from-[#104893] to-[#0E0F11] h-full md:h-96 flex-row md:flex justify-around items-center">
          <div className="text-5xl text-white font-semibold w-11/12 md:w-6/12">
            <h1 className="uppercase">
              Explore my creative projects and get inspired! Here
            </h1>
          </div>
          <div>
            <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
              <NumberTicker value={7} />
              <span>+</span>
            </p>
          </div>
        </section>

        <Zoom_Parallax />
        <section id="Projects" className="w-11/12 mx-auto">
          <div className="h-96 flex items-center text-white">
            <div className="pl-6 uppercase">
              <h1 className="text-3xl">• Our Work</h1>
              <h1 className="text-6xl pt-2 md:text-8xl">
                Explore see <br />
                the project
              </h1>
            </div>
          </div>

          <div className="card grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="pl-6 card-child my-10 w-10/12 flex flex-col items-center"
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                    priority
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="pt-6 text-white text-left">
                  <p className="text-xl md:text-2xl text-gray-500 font-bold py-2">
                    {project.role}
                  </p>
                  <h1 className="text-xl md:text-2xl">
                    <span className="text-4xl md:text-5xl font-bold">
                      {project.title}
                    </span>{" "}
                    {project.description}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <ReadmoreWorks />
          </div>
        </section>

        <Text_Parallax />
      </div>
      <footer id="Contact">
        <Sticky_Footer />
      </footer>
    </>
  );
}
