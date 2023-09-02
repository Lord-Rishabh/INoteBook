// import { useContext, useEffect } from 'react'
// import NoteContext from '../context/noteContent'
import '../index.css';
const About = () => {
//   const a = useContext(NoteContext);
//   useEffect(() => {
//     a.update()
// // eslint-disable-next-line
//   },[])

  return (
    <>
    <section class="about">
            <h2>Hello, I'm Rishabh Patel</h2>
            <p>Welcome to INoteBook, a platform for creating, updating, and deleting notes. I'm passionate about helping you organize your thoughts and tasks efficiently.</p>
            <p>About the developer : I'm a dedicated developer with a knack for building web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. I thrive on creating efficient and user-friendly software that solves real-world problems.

My journey in software development started with a curiosity for technology and a passion for coding. Over the years, I've honed my skills in web development, and I'm always excited to learn and explore new technologies.</p>
            <p>Connect with me on LinkedIn :&nbsp; 
            <a href="https://www.linkedin.com/in/rishabh-patel01/">Linkedin Profile</a></p>
        </section>
    </>
  )
}

export default About
