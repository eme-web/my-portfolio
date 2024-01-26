import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-12 py-40 gap-10">
        <div className="flex flex-col gap-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold lg:text-5xl">Contact Me</h2>
          <p className="text-slate-300">
            Get in touch{" "}
            <span className="bg-cyan-900 px-1 py-1">
              udobongeme4@gmail.com
            </span>{" "}
            or simply press the button below.
          </p>
          <div>
            <a 
             href="mailto:udobongeme4@gmail.com"
             className="bg-gray-200 text-black font-bold px-10 py-4 rounded hover:bg-cyan-800 hover:text-white duration-200"
             >Contact me!</a>
          </div>
        </div>
        <div className="text-right">
         <a href="#home" className="shadow-xl">
          <FontAwesomeIcon
            icon={faAngleDoubleUp} 
            className="animate-bounce text-2xl lg:text-4xl bg-gray-900 rounded-full p-2 hover:bg-sky-700 duration-200"
          />
          </a> 
        </div>
      </div>
    </section>
  );
}
