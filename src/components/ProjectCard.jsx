/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  githubLink,
  liveLink,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="w-11 h-11 rounded-lg grid place-items-center bg-zinc-700 text-zinc-100 hover:bg-zinc-600 transition-colors"
              aria-label="View on GitHub"
              title="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.486 2 2 6.486 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.153-1.109-1.461-1.109-1.461-.907-.62.069-.607.069-.607 1.004.071 1.532 1.031 1.532 1.031.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.222-.253-4.556-1.111-4.556-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.937.359.309.678.919.678 1.852 0 1.337-.012 2.417-.012 2.744 0 .268.18.58.688.481C19.136 20.162 22 16.416 22 12 22 6.486 17.514 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 hover:bg-sky-300 transition-colors"
              aria-label="Open website"
              title="Live website"
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          ) : (
            <button
              type="button"
              className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400/40 text-zinc-500 cursor-not-allowed"
              aria-label="Live website coming soon"
              title="Live website coming soon"
              disabled
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                hourglass_bottom
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
