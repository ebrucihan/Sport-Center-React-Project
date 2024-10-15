export default function Trainer() {
  return (
    <>
      <section className="review" id="review">
        {/* Review section start */}
        <div className="review-container">
          {/* Section heading for client reviews */}
          <h2>REVIEW CLIENT</h2>
          {/* Decorative line under heading */}
          <div className="line" />
          {/* Description paragraph about the reviews */}
          <p>
            Lorem ipsum is not simply random text. It has roots in a piece of
            classical at <br />
            Hampden-Sydney College.
          </p>
          {/* Container for displaying client reviews */}
          <div className="client-container">
            {/* First client review */}
            <div className="review">
              <div className="client">
                <img src="img/client1.jpg" />
                {/* Client image */}
                <p>
                  <span>Diet Expert</span>
                  <br />
                  CFO
                </p>
                {/* Client title and position */}
              </div>
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit libero necessitatibus deleniti. Iusto provident
                  eveniet quas, in officia facere! Vitae quam possimus
                  perspiciatis minima ullam magnam nostrum fugiat. Unde,
                  laboriosam?
                </p>
              </div>
            </div>
            {/* Second client review */}
            <div className="review">
              <div className="client">
                <img src="img/client2.jpg" />
                {/* Client image */}
                <p>
                  <span>Cardio Trainer</span>
                  <br />
                  CEO
                </p>
                {/* Client title and position */}
              </div>
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit libero necessitatibus deleniti. Iusto provident
                  eveniet quas, in officia facere! Vitae quam possimus
                  perspiciatis minima ullam magnam nostrum fugiat. Unde,
                  laboriosam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Review section end */}
    </>
  );
}
