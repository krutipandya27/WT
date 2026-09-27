import React, { useEffect, useState } from "react";

function Movieslider() {
  const [data, setData] = useState({ results: [] });

  const apiUrl = "https://api.themoviedb.org/3/movie/now_playing";

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("Movie List:", data);

  return (
    <div>
      <div className="slider movie-items">
        <div className="container">
          <div className="row">
            <div className="social-link">
              <p>Follow us:</p>

              <a href="#">
                <i className="ion-social-facebook"></i>
              </a>

              <a href="#">
                <i className="ion-social-twitter"></i>
              </a>

              <a href="#">
                <i className="ion-social-googleplus"></i>
              </a>

              <a href="#">
                <i className="ion-social-youtube"></i>
              </a>
            </div>

            <div className="slick-multiItemSlider">
              {data.results.map((movie) => (
                <div className="movie-item" key={movie.id}>
                  <div className="mv-img">
                    <a href="#">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w154" +
                          movie.poster_path
                        }
                        alt={movie.title}
                      />
                    </a>
                  </div>

                  <div className="title-in">
                    <div className="cate">
                      <span className="blue">
                        <a href="#">Movie</a>
                      </span>
                    </div>

                    <h6>
                      <a href="#">{movie.title}</a>
                    </h6>

                    <p>
                      <i className="ion-android-star"></i>
                      <span>{movie.vote_average}</span> /10
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movieslider;