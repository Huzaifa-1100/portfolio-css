import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "@/app/style/footer.css";

const Footer = () => {
  return (
    <footer className="footer-f">
      <div className="main-div-f">
        <h2>
          <Image
            className="image-f"
            src={require("../../../public/assets/picutres/lgo image.png")}
            alt="Image Logo"
            width={50}
            height={50}
          />
          <span className="img-span-f">Huzaifa Ayub</span>
        </h2>
      
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link target="_blank" href={"https://www.facebook.com/H.Z.Shooter"}>
            <FaFacebook />
          </Link>
          <Link target="_blank" href={"https://www.youtube.com/@huboftech944"}>
            <FaYoutube />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/huzaifa-ayub-b29132288/"}
          >
            <FaLinkedin />
          </Link>
          <Link target="_blank" href={"https://github.com/Huzaifa-1100"}>
            <FaGithub />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
