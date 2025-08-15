/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const [activeSection, setActiveSection] = useState("home");
  const activeBoxRef = useRef(null);
  const navRef = useRef(null);

  const handleNavClick = (event, section, link) => {
    setActiveSection(section);

    // Ensure footer is visible when clicking Contact
    if (section === "contact") {
      event.preventDefault();
      // Update URL hash so it becomes http://localhost:5173/#contact
      if (window.location.hash !== "#contact") {
        window.location.hash = "#contact";
      }
      const contactEl = document.getElementById("contact");
      const footerEl = document.querySelector("footer");
      if (contactEl && footerEl) {
        const footerHeight = footerEl.getBoundingClientRect().height;
        const contactTop = contactEl.offsetTop;
        const contactHeight = contactEl.offsetHeight;
        const scrollTarget =
          contactTop + contactHeight - window.innerHeight + footerHeight + 8;
        window.scrollTo({ top: Math.max(scrollTarget, 0), behavior: "smooth" });
        return;
      }
    }

    // Default behavior for other sections
    if (link) return; // let anchor handle it
  };

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(".nav-link.active");
    const activeBox = activeBoxRef.current;

    if (activeLink && activeBox) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      activeBox.style.width = `${linkRect.width}px`;
      activeBox.style.height = `${linkRect.height}px`;
      activeBox.style.left = `${linkRect.left - navRect.left}px`;
      activeBox.style.top = `${linkRect.top - navRect.top}px`;
    }
  }, [activeSection, navOpen]);

  // Observe sections to update active nav item while scrolling
  useEffect(() => {
    const sectionIds = ["home", "about", "work", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    let ticking = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (ticking) return;
        ticking = true;

        // Pick the entry with the highest visibility
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, curr) =>
            prev.intersectionRatio > curr.intersectionRatio ? prev : curr
          );
          const currentId = mostVisible.target.id;
          if (currentId && currentId !== activeSection) {
            setActiveSection(currentId);
          }
        }

        requestAnimationFrame(() => {
          ticking = false;
        });
      },
      { threshold: [0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [activeSection]);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      section: "home",
      className: "nav-link",
    },
    {
      label: "About",
      link: "#about",
      section: "about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      section: "work",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      section: "contact",
      className: "nav-link",
    },
  ];

  return (
    <nav ref={navRef} className={"navbar " + (navOpen ? "active" : "")}>
      <div ref={activeBoxRef} className="active-box"></div>
      {navItems.map(({ label, link, section, className }, key) => (
        <a
          href={link}
          key={key}
          className={`${className} ${
            activeSection === section ? "active" : ""
          }`}
          onClick={(e) => handleNavClick(e, section, link)}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
