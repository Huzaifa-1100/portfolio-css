import Image from "next/image";
import Link from "next/link";
import "@/app/style/hero.css";

const Hero = () => {
  return (
    <section id="Hero" className="hsection">
      <div className="hmain-div">
        <div className="hsb-div">
          <h1>
            I am, "Web Developer", "UI/UX Designer", "Graphics Designer",
            "Urdu/English Typist",
          </h1>
          <div className="htext-div"></div>
          <p>
            As a future CERTIFIED CLOUD APPLIED GENERATIVE AI ENGINEER, my
            portfolio website showcases my journey in cloud computing, AI
            development, and advanced web technologies like Next.js. Explore my
            projects, challenges, and the innovative work I'm passionate about
            as I continue to grow and refine my skills in this exciting field.
          </p>
          <div className="hbutton-div">
            <Link href={"#Contact"}>
              <button className="hbtn-cont">Contact</button>
            </Link>
          </div>
        </div>
        <div className="himage-div">
          <Image
            className="himage"
            alt="hero"
            width={500}
            height={500}
            src={require("../../../public/assets/picutres/lgo image.png")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
