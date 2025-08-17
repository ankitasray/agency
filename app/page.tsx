"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import ServiceModal from "@/components/ServiceModal";
import { useState } from "react";


const services = [
  {
    icon: "/images/user-engagement.png",
    title: "AI Sales & Lead Generation Bots",
    slug: "ai-sales-lead-generation",
    subscriptionStartingFrom: "₹1499/month",
    description: [
      "Engages website/social media visitors instantly",
      "Qualifies leads and books meetings automatically",
      "Never miss a lead, even outside business hours",
    ],
  },
  {
    icon: "/images/help-desk.png",
    title: "Customer Support Agent (24/7)",
    slug: "customer-support-agent",
    subscriptionStartingFrom: "₹1999/month",
    description: [
      "Provides round-the-clock automated customer service",
      "Handles customer queries instantly without human intervention",
      "Reduces the need for full-time support staff",
    ],
  },
  {
    icon: "/images/iteration.png",
    title: "Internal Workflow Assistants",
    slug: "internal-workflow-assistants",
    subscriptionStartingFrom: "₹1299/month",
    description: [
      "Helps employees with onboarding, internal FAQs, and process guidance",
      "Streamlines internal communication and improves team productivity",
    ],
  },
  {
    icon: "/images/ai.png",
    title: "AI Knowledge Base Agents",
    slug: "ai-knowledge-base-agents",
    subscriptionStartingFrom: "₹1799/month",
    description: [
      "Trained on your company’s documents and policies",
      "Instantly answers customer and employee questions accurately",
      "Ideal for customer support, HR, and internal knowledge sharing",
    ],
  },
  {
    icon: "/images/healthcare.png",
    title: "Health Assistance & Product Recommendation",
    slug: "health-assistance-product-recommendation",
    subscriptionStartingFrom: "₹1599/month",
    description: [
      "Useful for wellness and healthcare brands",
      "Understands customer health-related queries",
      "Recommends the most suitable products or supplements based on needs",
    ],
  },
  {
    icon: "/images/bot.png",
    title: "Custom AI Agents",
    slug: "custom-ai-agents",
    subscriptionStartingFrom: "₹2499/month",
    description: [
      "We build AI agents tailored to your business needs",
      "Custom workflows, tone, and logic designed to match your brand",
      "Suitable for any industry or use case",
    ],
  },
  {
    icon: "/images/voice-assistant.png",
    title: "Voice Assistant Development",
    slug: "voice-assistant-development",
    subscriptionStartingFrom: "₹1899/month",
    description:
      "Create Alexa/Google voice apps to serve customers with hands-free, interactive experiences.",
  },
  {
    icon: "/images/schedule.png",
    title: "AI Appointment Scheduling Assistants",
    slug: "ai-appointment-scheduling-assistants",
    subscriptionStartingFrom: "₹1399/month",
    description: [
      "Books appointments and meetings intelligently",
      "Syncs with calendars to avoid double bookings",
      "Sends reminders and updates in real-time",
    ],
  },
  {
    icon: "/images/rating.png",
    title: "AI Feedback & Review Collection Bots",
    slug: "ai-feedback-review-collection-bots",
    subscriptionStartingFrom: "₹1199/month",
    description: [
      "Follows up with customers to gather feedback automatically",
      "Encourages satisfied customers to leave positive reviews",
      "Improves brand credibility and trust",
    ],
  },
];




export default function Home() {
 const [selectedService, setSelectedService] =useState<any>(null);

  const handleOpenModal = (service:any) => {
    console.log(service)
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };
  
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
                    src="/logo/softoralogo.png"
                    alt="Softoralogo"
                    width={150} // Adjusted width for better prominence
                    height={300} // Adjusted height to maintain proportions
                    className="w-28 md:w-36 lg:w-40 transition duration-300 ease-in-out transform hover:scale-105 
                      border-4 border-transparent 
                      hover:border-4 hover:border-solid hover:border-white"
                  />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          
          <Link
            href={"/meeting"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#abcbff]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={20} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={15} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="right"
                items={[
                  {
                    logo: "/logo/softoralogo.png",
                    name: "Logo",
                  },
                  {
                    logo: "/logo/softoralogo.png",
                    name: "Logo",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

     <Element name="services">
  <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
    <h1>
      <WordPullUpDemo />
    </h1>
    <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
      All of our services are designed to help your business stand out
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
      {services.map((service) => (
        <div
          key={service.title}
          onClick={() => handleOpenModal(service)} // 👈 Open modal
          className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
        >
          <Image
  src={service.icon}
  width={80}       // ✅ small fixed size
  height={80}
  className="object-contain mx-auto bg-gray-100 p-2 w-20 h-20 rounded-md"
  alt="image"
/>

          <h1 className="text-xl font-medium">{service.title}</h1>
          {/* <p className="text-gray-500">{service.description}</p> */}

          {service.subscriptionStartingFrom && (
            <p className="text-green-600 font-semibold">
              Subscription Starting from {service.subscriptionStartingFrom}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* 👇 Render Modal */}
   {selectedService && (
  <ServiceModal
    service={selectedService}
    onClose={() => setSelectedService(null)}
  />
)}
</Element>



      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
        <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedBeamMultipleOutputDemo />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo />
          </div>

          </div>

        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/softoralogo.png"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We&apos;ve been working with Softora for over few months and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Prajwal, Bangalore <br />
              CEO, MyMane
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        {/* <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">519-200-5000</p>
          <p className="text-left  text-xl  text-gray-500">
            admin@birdsoftware.ca
          </p>
        </div> */}

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Softora. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
