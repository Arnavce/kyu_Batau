import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/style.css';
import { FaFilm } from 'react-icons/fa'; // Movie icon

const Home = () => {
  const navigate = useNavigate();

  // Navigation functions
  const goToMovies = () => {
    navigate('/movies');
  };
  const goToSIGNUP = () => {
    navigate('/signup');
  };
  const goToSignin = () => {
    navigate('/login');
  };
  const goToUpcoming = () => {
    const upcomingSection = document.getElementById('upcoming');
    upcomingSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header */}
      <header className="header" data-header>
        <div className="container">
          <div className="overlay" data-overlay></div>
          <a href="./" className="logo">
            <img src="assets/images/Black & White Minimalist Business Logo.png" alt="kyu batau logo" />
          </a>
          <div className="header-actions">
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
            <button className="btn btn-primary" onClick={goToSIGNUP}>Sign up</button>
            <button className="btn btn-primary" onClick={goToSignin}>login</button>
          </div>
          <button className="menu-open-btn" data-menu-open-btn>
            <ion-icon name="reorder-two"></ion-icon>
          </button>
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="./index.html" className="logo">
                <img src="assets/images/Black & White Minimalist Business Logo.png" alt="kyu batau logo" />
              </a>
              <button className="menu-close-btn" data-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
            <ul className="navbar-list">
              <li>
                <a href="./index.html" className="navbar-link">Home</a>
              </li>
              <li>
                <a href="#upcoming" className="navbar-link">Movies</a>
              </li>
              <li>
                <a href="/bookings" className="navbar-link">My Bookings</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <article>
          {/* Hero Section */}
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Welcome To</p>
                <h1 className="h1 hero-title">
                  Kyu Batau <strong>Movie Ticket</strong> Booking Site
                </h1>
                <div className="meta-wrapper"></div>
              </div>
              <button className="btn btn-primary" onClick={goToUpcoming}>
                <ion-icon name="play"></ion-icon>
                <span>Book now Fast</span>
              </button>
            </div>
          </section>

          {/* Upcoming Movies Section */}
          <section className="upcoming" id="upcoming">
            <div className="container object-fill h-2/4 w-3/4">
              <div className="flex-wrapper">
                <div className="title-wrapper">
                  <h2 className="h2 section-title"><b>This week's BlockBuster</b></h2>
                </div>
                {/* <ul className="filter-list">
                  <li>
                    <button className="filter-btn">Movies</button>
                  </li>
                  <li>
                    <button className="filter-btn">TV Show</button>
                  </li>
                  <li>
                    <button className="filter-btn">Anime</button>
                  </li>
                </ul> */}
              </div>
              <ul className="movies-list has-scrollbar">
                <li>
                  <div className="movie-card ">
                    <a href="./movies">
                      <figure className="card-banner">
                        <img src="https://image.tmdb.org/t/p/original/2Oa2vNw7Ht5yXjIBHAzWNnkG6Y4.jpg"/>
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">iron-man collection</h3>
                      </a>
                      <time datetime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT127M"></time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="https://image.tmdb.org/t/p/original/qJawKUQcIBha507UahUlX0keOT7.jpg" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./">
                        <h3 className="card-title">Avengers Collection</h3>
                      </a>
                      <time datetime="2021">2021</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT131M"></time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Top Rated Movies Section */}
          <section className="top-rated">
            <div className="container">
              <h2 className="h2 section-title">Top Rated Movies</h2>
              <ul className="filter-list">
                <li>
                  <button className="filter-btn">Action</button>
                </li>
                <li>
                  <button className="filter-btn">Romance</button>
                </li>
                <li>
                  <button className="filter-btn">Documentary</button>
                </li>
                <li>
                  <button className="filter-btn">Thriller</button>
                </li>
              </ul>
              <ul className="movies-list">
                <li>
                  <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-1.png" alt="Sonic the Hedgehog 2 movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Sonic the Hedgehog 2</h3>
                      </a>
                      <time datetime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT122M">122 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>7.8</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./ ">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-2.png" alt="Morbius movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Morbius</h3>
                      </a>
                      <time datetime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT104M">104 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>5.9</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-3.png" alt="The Adam Project movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">The Adam Project</h3>
                      </a>
                      <time datetime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT106M">106 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-4.png" alt="Free Guy movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Free Guy</h3>
                      </a>
                      <time datetime="2021">2021</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT115M">115 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>7.7</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-5.png" alt="The Batman movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./">
                        <h3 className="card-title">The Batman</h3>
                      </a>
                      <time datetime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">4K</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT176M">176 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>7.9</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-6.png" alt="Uncharted movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./movie-details.html">
                        <h3 className="card-title">Uncharted</h3>
                      </a>
                      <time datetime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT116M">116 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-7.png" alt="Death on the Nile movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./">
                        <h3 className="card-title">Death on the Nile</h3>
                      </a>
                      <time datetime="2022">2022</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">2K</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT127M">127 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>6.5</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="movie-card">
                    <a href="./">
                      <figure className="card-banner">
                        <img src="./assets/images/movie-8.png" alt="The King's Man movie poster" />
                      </figure>
                    </a>
                    <div className="title-wrapper">
                      <a href="./">
                        <h3 className="card-title">The King's Man</h3>
                      </a>
                      <time datetime="2021">2021</time>
                    </div>
                    <div className="card-meta">
                      <div className="badge badge-outline">HD</div>
                      <div className="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT131M">131 min</time>
                      </div>
                      <div className="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>7.0</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="divider"></div>
            <div className="quicklink-wrapper">
              <ul className="quicklink-list">
                <li>
                  <a href="#" className="quicklink-link">Faq</a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">Help center</a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">Terms of use</a>
                </li>
                <li>
                  <a href="#" className="quicklink-link">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 <a href="#">CodeWithKyuBatau</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Go to Top Button */}
      <a href="#top" className="go-top" data-go-top>
        <ion-icon name="chevron-up"></ion-icon>
      </a>

      {/* Custom JS Link */}
      <script src="../assets/js/script.js"></script>
      {/* Ionicon Link */}
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default Home;
