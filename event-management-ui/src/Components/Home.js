import React from 'react';
import './Home.css';

const Home = () => {
  return (
      <div>
      {/* Carousel Container */}
      <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://media.istockphoto.com/id/1385168396/photo/people-registering-for-the-conference-event.jpg?b=1&s=170667a&w=0&k=20&c=8S-zLbWMUve-kMGkFQaqkelP7sdyETjMw4x8JADBgrA=" className="d-block w-100" alt="first slide" />
            </div>
            <div className="carousel-item">
              <img src="https://i.pinimg.com/originals/d0/56/04/d056040a086d5332f3567343b45dd14d.jpg" className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src="https://www.jetsupholidays.com/wp-content/uploads/2019/12/Corporate-Events-scaled.jpg" className="d-block w-100" alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="events-title">
        <h2>Events in Your Location</h2>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://www.northeasternchronicle.in/wp-content/uploads/2023/03/355F0A9A-E240-4080-8AB3-1F05E4C982A5.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Assam book fair</h5>
                <p className="card-text">"Dive into a world of stories and imagination at the Assam Book Fair—where every page turns into an adventure!"</p>
                <button className="btn btn-primary">Book Tickets</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://cdn0.weddingwire.in/articles/images/1/3/2/4/img_64231/diwali-party-anirban-das-sky-light.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Diwali Celebration at Vivanta</h5>
                <p className="card-text">"Illuminate your Diwali with splendor and joy at Vivanta—where every moment sparkles with festive magic!"</p>
                <button className="btn btn-primary">Book Tickets</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.UvoiCTdw5DwpNiQ8gtKDyQHaEK&pid=Api&P=0&h=180" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Arijit Singh Concert</h5>
                <p className="card-text">"Experience the soulful melodies of Arijit Singh live—let his voice take you on an unforgettable musical journey!"</p>
                <button className="btn btn-primary">Book Tickets</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://wp-media-partyslate.imgix.net/2022/08/inspire-holiday-party_1723393-scaled.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Christmas Celebration</h5>
                <p className="card-text">"Join us for a joyous Christmas celebration filled with laughter, love, and festive cheer—let’s make merry together!"</p>
                <button className="btn btn-primary">Book Tickets</button>
              </div>
            </div>
          </div>

          <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first">What is our Event Management system?</label>
            <div className="content">
              <p>Our Event Management system allows users to easily manage events, register, and purchase tickets seamlessly.</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second">How do I register for events?</label>
            <div className="content">
              <p>Go to the Register tab, fill in the required details, and submit your registration for a quick confirmation.</p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label htmlFor="third">Can I view my registered events?</label>
            <div className="content">
              <p>Yes, you can check your registration status and ticket details anytime from your account dashboard.</p>
            </div>
          </li>
          {/* Add more FAQs as needed */}
        </ul>
      </div>

       
       
       
        </div>
      </div>
    </div>
  

  
  );
};

export default Home;
