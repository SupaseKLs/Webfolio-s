import React from "react";
import Timeline from "@/components/ui/timeline";  // Corrected import

export default function TimelineDemo() {
  const data = [
    {
      title: "January 2025 - April 2025",
      content: (
        <div>
          <h2 className="text-5xl font-semibold text-white">Web Developer</h2>
          <p className="mt-2 mb-4 text-xs md:text-xl font-semibold text-gray-500">
            At Bachelor of Science (Applied Computer Science-Multimedia)
          </p>
          <p className="mb-8 font-normal text-xs md:text-xl text-white">
            Developed a main website with Nextjs Typescript
            Framer-motion Cloudflare and Google sheets.
          </p>
          <img
            src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/571431430_1271993438064521_2568043058392640990_n.jpg?stp=cp6_dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=T1NThF8zDp0Q7kNvwF2kzDc&_nc_oc=Adlp4WVjPXDkN9HKJ23T3GOhdiA63vpEGivEvsb8ef2jO-7irxRF4XaizOgv-jKp-oUTQM16lR5oiVoki-yaEGXK&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=f2qePt4BshPTtASxnjJSJQ&oh=00_AfjjIFBnS83dapAhCXZgWLdebWbX90AiSumC4bim236s-Q&oe=6928F29B"
            alt="startup template"
            width="100%"
            height="auto"
            className="w-full h-auto rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-96"
          />
        </div>
      ),
    },
    {
      title: "June 2025 - September 2025",
      content: (
        <div>
          <h2 className="text-5xl font-semibold text-white">Front-End Developer</h2>
          <p className="mt-2 mb-4 text-xs md:text-xl font-semibold text-gray-500">
            At 1DD Hub Co.,Ltd
          </p>
          <p className="mb-8 text-xs md:text-xl font-normal text-neutral-200">
            Developed Interactive website with HTML CSS JS Wordpress
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gfNQoMKIBt__C58bQEGcKWuXrtkjpVY1-975N2dCblNugGfz14GJ66CuyCJiYCj_ayg&usqp=CAU"
              alt="hero template"
              width="100%"
              height={500}
              className="w-full h-20 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 2025 - Current",
      content: (
        <div>
          <h2 className="text-5xl font-semibold text-white">Academic Team Member</h2>
          <p className="mt-2 mb-4 text-xs md:text-xl font-semibold text-gray-500">
            At Google Developer Group on Campus KMUTT Core Team
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/gdsc-social-share.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
