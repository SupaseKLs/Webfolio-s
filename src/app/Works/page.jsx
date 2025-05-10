import Link from "next/link";
import Image from "next/image";
import Portfolio_aye from "@/assets/img/Aye.png";
import MuchMedia from "@/assets/img/MuchMedia.png";
import Multicamp from "@/assets/img/Multicamp.png";
import Furniture from "@/assets/img/Synliving.png";
import Wise from "@/assets/img/p1.jpg";
import Scg from "@/assets/img/p2.jpg";
import Chula from "@/assets/img/p3.jpg";
import WaynsGo from "@/assets/img/WaynsGo.jpg";
import DreamPocket from "@/assets/img/DreamPocket.jpg";

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
      "Designed an application that help solve fraud problems corruption through online financial transactions.",
    image: Wise,
    link: "https://www.behance.net/gallery/214398637/Wise-",
  },
  {
    title: "ArmFlag",
    role: "• UI DESIGN",
    description:
      "I developed ArmFlag, a smart armband for health tracking with gamification, gaining business experience.",
    image: Scg,
    link: "https://www.behance.net/gallery/214398897/AlmFlag-EcoCare",
  },
  {
      title: "Dream Pocket",
      role: "• UX/UI Design",
      description:
      "Dream Pocket helps you plan and save for your dream home.Input your income, expenses, and preferences to find the perfect location and project.",
      image: DreamPocket,
      link: "#",
    },
    {
        title: "WaynGo",
        role: "• UX/UI Design",
        description:
        "WaynGo helps your plan your trip based on your budget. It shows you how to get around, what transport to take, the distance, and how long it will take.",
        image: WaynsGo,
        link: "https://www.linkedin.com/posts/supasek-laobutsa-83a969318_wayngo-helps-your-plan-your-trip-based-on-activity-7321001009479143424-kj3Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCWk24BK5PloDAGVTwq1S8CONz3iSV55ig",
    },
    {
      title: "PayGuard",
      role: "• UX/UI Design",
      description:
        "The competition is about creating legal innovations. I designed an application that solves fraud problems in online finance.",
      image: Chula,
      link: "https://www.behance.net/gallery/208395975/PayGuard-help-to-fraud-through-money-transfer",
    },
];

export default function WorksSection() {
  return (
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
    </section>
  );
}
