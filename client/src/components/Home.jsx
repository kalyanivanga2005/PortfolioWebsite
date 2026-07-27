import profile from "../assets/kalyani.jpg";
function Home() {
  return (
   
    <section id="home" className="hero">
       
       <img
  src={profile}
  alt="Kalyani"
  className="profile-image"
/>

      <h1>Hello, I'm Kalyani 👋</h1>

      <h3>Full Stack Developer Intern</h3>

      <p>
        Passionate Computer Science student with interests in Full Stack
        Development, Artificial Intelligence, and Machine Learning.
      </p>

      <a
  href="/Resume.pdf"
  download
  className="resume-btn"
>
  Download Resume
</a>
    </section>
  );
}

export default Home;