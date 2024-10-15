export default function Trainer() {
  return (
    <>
      <div className="purchase">
        {/* Purchase section start */}
        <div className="purchase-container">
          {/* Section heading for purchases */}
          <h2>PURCHASE FROM US</h2>
          {/* Decorative line under heading */}
          <div className="line" />
          {/* Description paragraph about purchasing */}
          <p>
            Lorem ipsum not simply random text. It has roots in a piece of
            classical at <br />
            Hampden-Sydney College.
          </p>
          {/* Container for displaying equipment cards */}
          <div className="equipment-container">
            {/* First equipment card */}
            <div className="equipment-card">
              <img src="img/purchase1.jpg" />
              {/* Equipment image */}
              <div className="card-layer">
                <h5>Kettlebell / 5kg</h5>
                {/* Equipment name */}
                <p>
                  <span>89,99$</span>/ 59,99$
                </p>
                {/* Price information */}
                <p>
                  <i className="fa-solid fa-cart-shopping" />
                  Add To Cart
                </p>
                {/* Add to cart button */}
              </div>
            </div>
            {/* Second equipment card */}
            <div className="equipment-card">
              <img src="img/purchase2.jpg" />
              {/* Equipment image */}
              <div className="card-layer">
                <h5>Treadmill</h5>
                {/* Equipment name */}
                <p>
                  <span>899,99$</span>/ 599,99$
                </p>
                {/* Price information */}
                <p>
                  <i className="fa-solid fa-cart-shopping" />
                  Add To Cart
                </p>
                {/* Add to cart button */}
              </div>
            </div>
            {/* Third equipment card */}
            <div className="equipment-card">
              <img src="img/purchase3.jpg" />
              {/* Equipment image */}
              <div className="card-layer">
                <h5>Adjustable Dumbbell</h5>
                {/* Equipment name */}
                <p>
                  <span>89,99$</span>/ 59,99$
                </p>
                {/* Price information */}
                <p>
                  <i className="fa-solid fa-cart-shopping" />
                  Add To Cart
                </p>
                {/* Add to cart button */}
              </div>
            </div>
            {/* Fourth equipment card */}
            <div className="equipment-card">
              <img src="img/purchase4.jpg" />
              {/* Equipment image */}
              <div className="card-layer">
                <h5>KettleBell / 3kg</h5>
                {/* Equipment name */}
                <p>
                  <span>899,99$</span>/ 59,99$
                </p>
                {/* Price information */}
                <p>
                  <i className="fa-solid fa-cart-shopping" />
                  Add To Cart
                </p>
                {/* Add to cart button */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Purchase section end */}
    </>
  );
}
