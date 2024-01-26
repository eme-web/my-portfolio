import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from "./small-components/SocialMediaIcons";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900">
        <div className="container mx-auto px-12 py-20 text-center flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0">
                <p>Built by Eme Udobong © {year}</p>
                <SocialMediaIcons />
            </div>
            <hr className="opacity-30" />
            <p className="text-sm text-gray-300">
              Made with{" "}
              <a href="https://react.org">
                <FontAwesomeIcon icon={faReact} /> (react)
              </a>
            </p>      
        </div>
    </footer>
  );
}
