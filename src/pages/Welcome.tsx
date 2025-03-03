function Welcome() {
  return (
    //full width with no padding
    <div className="container-fluid p-0">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="pictures/welcome-page-photo.jpg"
            alt="Dancing Couple"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <div className="text-center text-md-start">
            <h1 style={{ marginBottom: "30px" }}>
              Welcome to Dance Center SPIN
            </h1>
            <p style={{ marginTop: "50px" }}>
              Discover the joy of dancing at SPIN Dance Studio, where every step
              becomes an experience to remember.
            </p>
          </div>
          <div className="mt-4">
            <p>
              At Dance Center SPIN, we believe in the power of movement to
              inspire, transform, and create lasting connections. Whether you're
              taking your first step onto the dance floor or perfecting your
              technique, we’re here to support your journey. Our passionate
              instructors and vibrant community are dedicated to helping you
              express yourself, build confidence, and have fun along the way.
            </p>
            <h3>Join us as we dance, grow, and shine together!</h3>
          </div>
        </div>
      </div>
      {/* location details */}
      <div className="container mt-5">
        <h2>Location</h2>
        <div className="row">
          <div className="col-md-6">
            <p>
              Nestled in a tranquil spot surrounded by nature, Dance Center SPIN
              offers more than just dance—it’s an experience. The peaceful
              surroundings provide the perfect escape from the hustle and
              bustle, allowing you to focus on your passion in an environment
              that feels like royalty. Here, amidst the beauty of nature, every
              step you take on the dance floor is a step toward personal growth
              and artistic expression. Join us, and let the calm and beauty of
              our space inspire your dance journey!
            </p>
            <p>1704 Dance Street, Chicago, IL 62311</p>
          </div>

          <div className="col-md-6">
            {/* image of the dance studio, ballroom*/}
            <img
              src="pictures/ballroom.jpg"
              alt="Ballroom"
              className="img-fluid"
            />
          </div>
        </div>
        {/* working hours*/}
        <div style={{ marginTop: "3rem" }}>
          <h2>Working Hours</h2>
          <p>Monday to Friday: 10:00 AM - 8:00 PM</p>
          <p>Saturday: 10:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
