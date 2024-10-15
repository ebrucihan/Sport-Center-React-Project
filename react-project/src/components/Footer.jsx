export default function Home() {
  return (
    <footer>
      {/* Footer section start */}
      <div className="footer">
        {/* Logo section */}
        <div className="logo">
          <img src="img/logo.png" alt="band" />
          {/* Logo image */}
        </div>
        {/* Description paragraph about the brand */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit totam ipsum quo numquam minima hic at, itaque ad. Nam
          dicta deleniti, nemo tenetur cum eius beatae ea eos iusto est minima
          dignissimos, mollitia iure similique! Lorem ipsum dolor sit amet
          consectetur adipisicing.
        </p>
        {/* Container for footer links */}
        <div className="footer-container">
          {/* Information links section */}
          <div className="info">
            <h3>Information</h3>
            <a href="#">About Us</a>
            {/* Link to About Us page */}
            <a href="#">Classes</a>
            {/* Link to Classes page */}
            <a href="#">Blog</a>
            {/* Link to Blog page */}
            <a href="#">Contact</a>
            {/* Link to Contact page */}
          </div>
          {/* Helpful links section */}
          <div className="links">
            <h3>Helpful Links</h3>
            <a href="#">Services</a>
            {/* Link to Services page */}
            <a href="#">Supports</a>
            {/* Link to Supports page */}
            <a href="#">Terms &amp; Condition</a>
            {/* Link to Terms & Condition page */}
            <a href="#">Privacy Policy</a>
            {/* Link to Privacy Policy page */}
          </div>
        </div>
      </div>
      {/* Footer section end */}
    </footer>
  );
}
