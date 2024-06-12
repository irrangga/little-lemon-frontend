import AboutImage from "./AboutImage"
import AboutDescription from "./AboutDescription"

const About = () => {
  return (
    <div className="HomeAboutBox">
      <div className="HomeAboutBackground">
        <article className="HomeAbout">
          <AboutDescription />
          <AboutImage />
        </article>
      </div>
    </div>
  )
}

export default About