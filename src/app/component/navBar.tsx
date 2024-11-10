import '@/app//style/navBar.css'
import Image from "next/image";
import Link from "next/link";


const NavBar = () => {
  return (

    <header className="header">
      <div className="main-div">
        <div className="image-div">
          <Image
            className="image "
            src={require("../../../public/assets/picutres/lgo image.png")}
            alt="Image Logo"
            width={50}
            height={50}
          />
          <span className="image-span">HUZAIFA AYUB</span>
        </div>
        <nav className="nav">

          <div className="nav-div">
            <Link href={"#Hero"} className="home">
              HOME
            </Link>

            <Link href={"#about"} className="about">
              ABOUT
            </Link>

            <Link
              href={"#Contact"}
              className="contact"
            >
              CONTACTS
            </Link>
            <Link target="_blank" href="/assets/cv/Resume-CV.pdf">
              <button className="cv-button">
                Download CV
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
