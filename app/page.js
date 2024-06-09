import React from "react";
import Link from "next/link";
import Tech from "@/components/Tech";
import Repositories from "@/components/Repositories";
import Educations from "@/components/Educations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="full-container flex">
        <div className="space-y-4 mt-10">
          <h1 className="text-4xl font-semibold text-white">
            <Link href="/">Hi, I am Tarik Ahmed</Link>
          </h1>
          <p className="mt-5 font-normal leading-relaxed">
            I work as a front-end developer. I have been using JavaScript for
            approximately two years. My main go-to technologies are React,Next
            JS, Nuxt JS, and Node JS.
            <p>
              <Link href="/about" className="text-pink-600">
                [Would you like to learn more about me]
              </Link>
            </p>
          </p>
        </div>
      </div>

      <div className="full-container mt-20">
        <Tech />
      </div>

      <div className="full-container mt-20">
        <Repositories />
      </div>

      <div className="full-container mt-20">
        <Educations />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
