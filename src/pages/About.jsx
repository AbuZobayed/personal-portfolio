const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/public/admin-pic.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            As-salamu alaykum My name is Md. Abu Zobayed.i am a frontend
            developer, I work with React js, Javascript. Let me toke my on a
            journey through my world of frond-end development. As a current BSc
            in CSE student, I have been honing my skills in both Information and
            technology, laying a strong fundation for my journey into the tech
            industry. My skill set included many frond-end technology, including
            HTML,CSS,JavaScript,Tailwincss,Bootstrap,and React Feel free to
            contact me via email at zobayed.ict05@gmail.com or connect with me
            via phone at +8801518314971 (Whatsapp)
          </p>
          <a href="/public/Zobayed.pdf" target="_blank">
        <button className="btn bg-cyan-500 text-white">More details</button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default About;
