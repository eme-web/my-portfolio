import resume from "../Assets/EmeUdobong-FS.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import SocialMediaIcons from "./small-components/SocialMediaIcons";
import LinkBtn from "./small-components/LinkBtn";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-t from-gray-600 via-gray-700 to-gray-800"
    >
      <div className="container mx-auto px-12 py-36">
        <div className="text-center lg:text-left flex flex-col lg:justify-center">
          <div className="flex flex-col gap-6 my-auto lg:pl-20">
            <div>
              <h4 className="lg:text-3xl mb-4">Hi, I am</h4>
              <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
                {" "}
                Eme Udobong
              </h1>
              <h2 className="lg:text-xl mt-4 text-slate-300">
                Software Engineer
              </h2>
            </div>
            <SocialMediaIcons />
            <LinkBtn
              link={resume}
              linkText="Download Resume"
              classes="mx-auto lg:mx-0 bg-slate-900 rounded shadow-xl px-8 py-4 w-52 hover:bg-sky-800 hover:scale-105 duration-200"
            />
          </div>
        </div>
        <a href="#skills">
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="bg-gray-800 rounded-full p-2 text-2xl lg:text-4xl animate-bounce hover:bg-sky-700 duration-200"
          />
        </a>
      </div>
    </section>
  );
};
