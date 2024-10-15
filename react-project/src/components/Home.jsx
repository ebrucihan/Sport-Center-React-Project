export default function Home() {
  return (
    <>
      <section id="home" className="home">
        {/* Home section start */}
        <div className="home-container">
          {/* Hero image displayed in the background */}
          <img
            src="img/heroman.jpg"
            alt="Hero Image"
            className="background-image"
          />
          {/* Main content container for text and headings */}
          <div className="container">
            <h6 className="power">
              <p>POWERFULL</p>
            </h6>
            {/* Subtitle with "POWERFULL" text */}
            {/* Main heading with line breaks for formatting */}
            <h1>
              Group <br />
              Practice <br />
              With Trainer
            </h1>
            {/* Description paragraph with placeholder text */}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus odit aut iste. Velit porro rerum, unde modi ipsam
              exercitationem laudantium illum. Id, laborum? Totam, dicta nisi.
              Voluptates, vero id. Perferendis.
            </p>
          </div>
          {/* Buttons for signing up and viewing details */}
          <div className="home-buttons">
            <button className="sign">Sign Up</button>
            <button className="details">Details</button>
          </div>
        </div>
      </section>
      {/* Home section end */}
      {/* Statistics section start with flexbox layout */}
      <div className="flex-container">
        {/* Displaying number of courses */}
        <div>
          <p>
            325
            <br />
            <span>Course</span>
          </p>
        </div>
        {/* Displaying number of workouts */}
        <div>
          <p>
            405
            <br />
            <span>Work Out</span>
          </p>
        </div>
        {/* Displaying number of working hours */}
        <div>
          <p>
            305 <br />
            <span>Working Hour</span>
          </p>
        </div>
        {/* Displaying number of happy clients */}
        <div>
          <p>
            705
            <br />
            <span>Happy Client</span>
          </p>
        </div>
      </div>
      {/* Statistics section end */}
    </>
  );
}
