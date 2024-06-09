const Project = () => {
  return (
    <div className="flex justify-center mb-14 gap-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/public/apple.png" alt="Wedding" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Apple</h2>
          <p>
          An intuitive solution to a common problem that we all face wrapped up in a single app
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"><a href="https://cosmic-fox-06ede6.netlify.app/#banner" target="_blank" >Live</a></div>
            <div className="badge badge-outline">
              <a href="https://github.com/AbuZobayed/apple/tree/main" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/public/Wedding.png" alt="Wedding" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Wedding Flowers</h2>
          <p>
            Award Winning Wedding Photographers with Superior Customer Service
            and Stunning Imagery.
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"><a href="https://assginment-ten.web.app/" target="_blank" >Live</a></div>
            <div className="badge badge-outline">
              <a href="https://github.com/AbuZobayed/independent-service-provider?tab=readme-ov-file" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/public/panda.png" alt="Wedding" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Panda</h2>
          <p>
          An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online.
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"><a href="https://abuzobayed.github.io/panda-commerce-bootstrap/" target="_blank" >Live</a></div>
            <div className="badge badge-outline">
              <a href="https://github.com/AbuZobayed/panda-commerce-bootstrap" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div> */}
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
