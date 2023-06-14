import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/codepic1.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#39FF14]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            tempora, dolorum quas harum obcaecati alias ut! Esse odio beatae
            ipsam voluptates voluptatum deserunt voluptatibus aliquid
            perferendis porro ipsa totam, voluptas sint cumque nemo? Commodi
            possimus quaerat accusantium id error a aspernatur vero tempore
            nulla, fugit rerum enim modi, quia iste!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            asperiores, molestias repudiandae deleniti quibusdam obcaecati,
            soluta, officiis necessitatibus porro veniam atque aliquid aperiam
            rerum perspiciatis? Ipsa, quis error quas magnam repellat veritatis
            laboriosam molestias animi fugit voluptates!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
