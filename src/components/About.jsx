const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch] leading-relaxed">
            Welcome! I&apos;m Abeih Hamani, a Computer Science student at the
            City College of New York, expected to graduate in Spring 2028. I
            taught myself everything I know about web development — from HTML,
            CSS, and JavaScript to React, Node.js, and MongoDB — with the
            exception of C++, which I studied in CSC-103.
          </p>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch] leading-relaxed">
            I&apos;m passionate about applying what I learn to create useful,
            well-designed projects. From FinancePal to CareerLink and
            ResumeBuilder, I&apos;ve explored how to combine functionality with
            clean design, and I&apos;m always looking for the next challenge to
            push my skills further.
          </p>

          <div className="flex justify-end">
            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
