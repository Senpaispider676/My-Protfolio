import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Developing Java plugins, Fabric mods, AI experiments, automation
              tools, and responsive web projects while continuing to improve
              software engineering skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Minecraft Server Developer</h4>
                <h5>Independent Work</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Built and configured more than 13 Minecraft server environments,
              managed plugins and ecosystems, and troubleshot compatibility,
              configuration, and deployment issues.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Developer</h4>
                <h5>Mother's Choice School</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Learning computer science through independent experimentation,
              practical projects, and real-world problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
