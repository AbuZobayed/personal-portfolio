const Progres = () => {
  return (
    <div>
        <h1 className="text-center font-bold text-5xl uppercase m-10">Technologies</h1>
        <div className="flex flex-col-reverse justify-center items-center gap-4">
      <div>
        <h1>HTML</h1>
        <progress
        className="progress progress-info w-96"
        value={76}
        max="100"
      ></progress>
      </div>
      <div>
        <h1>CSS</h1>
        <progress
        className="progress progress-info w-96"
        value={50}
        max="100"
      ></progress>
      </div>
      <div>
        <h1>Tailwind CSS</h1>
        <progress
        className="progress progress-info w-96"
        value={70}
        max="100"
      ></progress>
      </div>
      <div>
        <h1>JavaScript</h1>
        <progress
        className="progress progress-info w-96"
        value={40}
        max="100"
      ></progress>
      </div>
      <div>
        <h1>ReactJS</h1>
        <progress
        className="progress progress-info w-96"
        value={80}
        max="100"
      ></progress>
      </div>
      
    </div>
    </div>
  );
};

export default Progres;
