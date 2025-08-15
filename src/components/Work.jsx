/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/ResumeBuilder.jpg",
    title: "ResumeBuilder",
    tags: ["MERN", "Full Stack"],
    projectLink: "https://github.com/SuperAbeih99/ResumeBuilder",
    liveLink: "https://resumebuilder-frontend-brown.vercel.app/",
  },
  {
    imgSrc: "/images/FinancePal.jpg",
    title: "FinancePal",
    tags: ["MERN", "Full Stack"],
    projectLink: "https://github.com/SuperAbeih99/FinancePal",
    liveLink: "https://financepalfrontend-mu.vercel.app/",
  },
  {
    imgSrc: "/images/CareerLink.jpg",
    title: "CareerLink",
    tags: ["MERN", "Full Stack"],
    projectLink: "https://github.com/SuperAbeih99/CareerLink",
    liveLink: "https://career-link-frontend-five.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, liveLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              githubLink={projectLink}
              liveLink={liveLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
