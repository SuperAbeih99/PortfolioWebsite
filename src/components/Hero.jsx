/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h2 className="headline-1 max-w-[28ch] mx-auto lg:mx-0 mb-6 lg:mb-8">
            CS Student | Building Modern Web Apps
            <br />
            <span className="text-2xl lg:text-3xl font-normal text-zinc-300 mt-2 block">
              City College of New York
            </span>
            <span className="text-xl lg:text-2xl font-medium text-sky-400 mt-1 block">
              Expected Graduation: Spring 2028
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 lg:mb-0">
            <ButtonPrimary
              label="Download Resume"
              icon="download"
              href="/Resume.pdf"
              target="_blank"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[520px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden shadow-2xl shadow-sky-400/20">
            <img
              src="/images/profilePic.png"
              width={656}
              height={800}
              alt="Abeih Hamani"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
