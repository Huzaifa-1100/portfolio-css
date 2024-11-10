import Image from "next/image";
import Link from "next/link";
import '@/app/style/about.css'
const About = () => {
  return (
    <div id="about">
      <section className="a-main-section">
        <div className="a-main-div">
          <div className="image-div-a">
            <Image
              className="image-a"
              alt="about me"
              src={require("../../../public/assets/picutres/about section.jpg")}
              width={350}
              height={350}
            />
          </div>
          <div className="text-div-a">
            <h1>
            "About Me.
            </h1>
            <p >
              Welcome to my portfolio! I am Huzaifa Ayub, a passionate web
              developer and aspiring CERTIFIED CLOUD APPLIED GENERATIVE AI
              ENGINEER. My portfolio showcases a range of projects built using
              cutting-edge technologies like Next.js. Through continuous
              learning and hands-on experience, I am committed to enhancing user
              experiences and solving real-world problems with innovative web
              solutions.
            </p>
            <div className="btn-div-a">
              <Link target="_blank" href={"/assets/cv/Resume-CV.pdf"}>
                <button className="btn">
                  Veiw CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
