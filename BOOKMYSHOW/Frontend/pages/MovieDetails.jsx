import React, { useEffect, useState } from 'react';
import './assets/css/style.css'; // Importing CSS from assets
import './assets/js/script.js'; // Importing JS from assets

function MovieDetails() {
    const [movie, setMovie] = useState(null);

    // Fetch movie details from backend
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch('/api/movies/1'); // Adjust the API endpoint as needed
            const data = await response.json();
            setMovie(data);
        };

        fetchMovieDetails();
    }, []);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <header className="header" data-header>
                <div className="container">
                    <div className="overlay" data-overlay></div>
                    <a href="./index.html" className="logo">
                        <img src="assets/images/Black & White Minimalist Business Logo.png" alt="Filmlane logo" />
                    </a>
                    <div className="header-actions">
                        <button className="search-btn">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <button className="menu-open-btn" data-menu-open-btn>
                        <ion-icon name="reorder-two"></ion-icon>
                    </button>
                    <nav className="navbar" data-navbar></nav>
                </div>
            </header>

            <main>
                <article>
                    <section className="movie-detail">
                        <div className="container">
                            <figure className="movie-detail-banner">
                                <img src={movie.posterUrl} alt={`${movie.title} movie poster`} />
                                <button className="play-btn">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </button>
                            </figure>
                            <div className="movie-detail-content">
                                <p className="detail-subtitle">Book Now</p>
                                <h1 className="h1 detail-title">
                                    {movie.title} <strong>{movie.year}</strong>
                                </h1>
                                <div className="meta-wrapper">
                                    <div className="badge-wrapper">
                                        <div className="badge badge-fill">{movie.rating}</div>
                                        <div className="badge badge-outline">HD</div>
                                    </div>
                                    <div className="ganre-wrapper">
                                        {movie.genres.map((genre, index) => (
                                            <a key={index} href="#">{genre}</a>
                                        ))}
                                    </div>
                                    <div className="date-time">
                                        <div>
                                            <ion-icon name="calendar-outline"></ion-icon>
                                            <time datetime={movie.releaseDate}>{movie.releaseDate}</time>
                                        </div>
                                        <div>
                                            <ion-icon name="time-outline"></ion-icon>
                                            <time datetime={movie.duration}>{movie.duration}</time>
                                        </div>
                                    </div>
                                </div>
                                <p className="storyline">{movie.storyline}</p>
                                <div className="details-actions">
                                    <button className="btn btn-primary">
                                        <ion-icon name="play"></ion-icon>
                                        <span>Book Ticket</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="tv-series">
                        <div className="container">
                            <p className="section-subtitle">watch</p>
                            <h2 className="h2 section-title">World Best movies</h2>
                            <ul className="movies-list">
                                {/* Example movie cards, replace with dynamic data as needed */}
                                {movie.relatedMovies.map((relatedMovie, index) => (
                                    <li key={index}>
                                        <div className="movie-card">
                                            <a href="./movie-details.html">
                                                <figure className="card-banner">
                                                    <img src={relatedMovie.posterUrl} alt={`${relatedMovie.title} movie poster`} />
                                                </figure>
                                            </a>
                                            <div className="title-wrapper">
                                                <a href="./movie-details.html">
                                                    <h3 className="card-title">{relatedMovie.title}</h3>
                                                </a>
                                                <time datetime={relatedMovie.releaseDate}>{relatedMovie.releaseDate}</time>
                                            </div>
                                            <div className="card-meta">
                                                <div className="badge badge-outline">2K</div>
                                                <div className="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
                                                    <time datetime={relatedMovie.duration}>{relatedMovie.duration}</time>
                                                </div>
                                                <div className="rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <data>{relatedMovie.rating}</data>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </article>
            </main>

            <footer className="footer">
                <div className="quicklink-wrapper">
                    <ul className="quicklink-list">
                        <li><a href="#" className="quicklink-link">Faq</a></li>
                        <li><a href="#" className="quicklink-link">Help center</a></li>
                        <li><a href="#" className="quicklink-link">Terms of use</a></li>
                        <li><a href="#" className="quicklink-link">Privacy</a></li>
                    </ul>
                    <ul className="social-list">
                        <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="#" className="social-link"><ion-icon name="logo-pinterest"></ion-icon></a></li>
                        <li><a href="#" className="social-link"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            &copy; 2024 <a href="#">CodeWithKyuBatau</a>. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>

            <a href="#top" className="go-top" data-go-top>
                <ion-icon name="chevron-up"></ion-icon>
            </a>
        </div>
    );
}

export default MovieDetails;