"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Horizontal = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาการแสดงผล (1 วินาที)
      once: true, // เล่นเอฟเฟกต์ครั้งเดียว
    });
  }, []);

  const videos = [
    { src: "/v1.mp4", header: "Confident Socializing", title: "I am not afraid of working in a team because it allows me to learn from many talented people in different ways." },
    { src: "/v2.mp4", header: "Problem Solving", title: "When problems come up, I don’t give up. Instead, I try to find a way to solve them and keep going." },
    { src: "/v3.mp4", header: "Comfort Zone", title: "I stepped out of my comfort zone to search for what I truly love and to challenge myself in new ways." },
    { src: "/v4.mp4", header: "Self Expression", title: "Now, I am brave enough to express myself, unlike before when I was too shy to talk to anyone." },
    { src: "/v5.mp4", header: "Opinion Sharing", title: "I am confident to express myself and share my opinions about the projects I am working on." },
  ];

  return (
    <main className="min-h-screen w-full mb-20 px-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
  {videos.map((video, index) => (
    <div
      key={index}
      className="w-full max-w-xs md:max-w-sm lg:max-w-md bg-gray-100 rounded-3xl"
      data-aos="fade-up" 
      data-aos-delay={index * 200} // 👈 หน่วงเวลาตาม index
    >
      <video
        src={video.src}
        className="w-full h-11/12 pb-4 object-cover mx-auto rounded-3xl"
        loop
        muted
        autoPlay
        playsInline
      />
      <div className="py-5 px-5 w-full text-md flex flex-col items-start">
        <h1 className="text-xl font-bold text-black">{video.header}</h1>
        <p className="text-black">{video.title}</p>
      </div>
    </div>
  ))}
</section>

    </main>
  );
};

export default Horizontal;
