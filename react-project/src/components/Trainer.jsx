export default function Trainer() {
  return (
    <>
      <section className="trainer" id="trainer">
        {/* Trainer section start */}
        <div className="trainer-container">
          {/* Section heading for best trainers */}
          <h2>OUR BEST TRAINERS</h2>
          {/* Decorative line under heading */}
          <div className="line" />
          {/* Description paragraph about trainers */}
          <p>
            Lorem ipsum is not simply random text. It has roots in a piece of
            classical at <br />
            Hampden-Sydney College.
          </p>
          {/* Container for displaying trainer profiles */}
          <div className="trainers-container">
            {/* First trainer profile */}
            <div className="trainer-portfolio">
              <div className="outer-frame">
                <div className="side left"></div>
                <div className="side right"></div>
              </div>
              <img src="img/trainer1.jpg" alt="Trainer 1" />
              <div className="trainer-layer">
                <h4>Olivia Johnson</h4>
                <p>Pilates Trainer</p>
              </div>
            </div>
            {/* Second trainer profile */}
            <div className="trainer-portfolio">
              <div className="outer-frame">
                <div className="side left"></div>
                <div className="side right"></div>
              </div>
              <img src="img/trainer2.jpg" alt="Trainer 2" />
              <div className="trainer-layer">
                <h4>Johnny Bravo</h4>
                <p>Personal Trainer</p>
              </div>
            </div>
            {/* Third trainer profile */}
            <div className="trainer-portfolio">
              <div className="outer-frame">
                <div className="side left"></div>
                <div className="side right"></div>
              </div>
              <img src="img/trainer3.jpg" alt="Trainer 3" />
              <div className="trainer-layer">
                <h4>Jane Doe</h4>
                <p>Cardio Trainer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trainer section end */}
    </>
  );
}
