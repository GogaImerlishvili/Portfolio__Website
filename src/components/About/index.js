import AnimatedLetters from '../AnimatedLetters'
import Sidebar from '../Sidebar'
import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      {<Sidebar />}
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            🔷 I'm looking for a job as a junior front-end developer, I started
            by learning IT basics, then web developers, and now I have solid
            programming knowledge, I'm also experienced in problem-solving
            methods and know computer languages ​​like CSS, XML, HTML, HTML5,
            SQL, JavaScript, React. js, Redux, React-router, REST API, Redux,
            Tailwindcss, Bootstrap, Git, Github... and multimedia publishing
            tools like Figma and Photoshop.
          </p>
          <p>
            🔷I've taken Udemy courses on front-end development, and I'm also
            practicing with other platforms and trying to improve every day. I
            did several dozen projects that helped me gain practice.
          </p>
          <p>
            🔷I think we are working with an interesting team, I will grow
            professionally quickly and will benefit the company.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
