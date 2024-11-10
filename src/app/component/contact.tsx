import '@/app/style/contact.css'
const Contact = () => {
  return (
    <div id="Contact">
      <section className="section-c">
        <div className="main-div-c">
          <div className="google-div">
            <iframe
              width="100%"
              height="100%"
              className="google"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4228.266849250273!2d67.01643927537077!3d24.857416277931318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUxJzI2LjciTiA2N8KwMDEnMDguNSJF!5e1!3m2!1sen!2s!4v1723989186181!5m2!1sen!2s"
              style={{ filter: " contrast(1.2) opacity(0.5)" }}
            />
            <div className="text-c">
              <div className="address-div-c">
                <h2 >
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Shop No. 1 Opp Jama Masjid Ahl-E-Hadees near Ant-Corruption
                  office, court road, Karachi.
                </p>
              </div>
              <div className="email-div-c">
                <h2>
                  EMAIL
                </h2>
                <p >
                  asadhussainshad@gmail.com
                </p>
                <h2>
                  PHONE
                </h2>
                <p>+92-310-2939848</p>
              </div>
            </div>
          </div>
          <div className="left-div-c">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact
            </h2>
            <p >
              Feel free to contact
            </p>
            <form action="https://formspree.io/f/xyzgdylr" method="POST">
              <div className="form-c">
                <label
                  htmlFor="name"
                  className="label-c"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"

                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
        
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-c"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-gray-600"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  defaultValue={""}
                  required
                />
              </div>
              <button>
                Send Email
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
