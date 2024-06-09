const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="/public/admin-pic.png" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold text-cyan-500">Hello, I am Zobayed</h1>
        <h2 className="text-5xl font-bold">Frontend developer</h2>
        <p className="py-6">To make a career in the field of web developer I will use my knowledge related to the web
        developing which will supportive to me in my work</p>
        <a href="/public/Zobayed.pdf" target="_blank">
        <button className="btn bg-cyan-500 text-white">download</button>
        </a>
       
      </div>
    </div>
  </div>
  );
};

export default Banner;
