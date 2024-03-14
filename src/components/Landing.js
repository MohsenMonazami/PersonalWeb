import "../styles/Landing.css";
import MohsenMonazami from "../images/MohsenMonazami.png";

const Landing = () => {
  return (
    <div className="row  m-0">
      <div id="svg" className="row p-0 m-0 vh-100">
        <div className="col-lg-6 m-0 p-0">
          <div className="row">
            <div className="col-lg-12 p-10">
              <div className="container mt-10 text-start">
                <h1 className="big_title">Hi</h1> <br />
                <h2 className="medium-title">i am</h2>
                <h1 className="big_title ms-4 personal_pic">Mohsen Monazami</h1>
                <p className="paragraph mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="row mt-5 job-title">
                  <p className="little-title front-title">
                    Front-end Developer
                  </p>
                  <p className="little-title ui-title">UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 m-0 p-0">
          <img src={MohsenMonazami} className="personal_pic" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
