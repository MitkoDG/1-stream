const url = 'https://api.themoviedb.org/3/search/movie?api_key=4949ee96f27e2a19002b00e8392db093&language=en-US'

const filtered = document.getElementById('filtered');
const cardList = filtered.querySelector('.all-cards');

export function renderMovieList(movieList) {
  cardList.innerHTML = '';
  let movieForEncode = movieList.join(',');
  let encodedStr = encodeURIComponent(movieForEncode)
  movieList.forEach(m => {
    fetch(url + `&query=${m}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(movies => {
        renderMovies(movies.results);
      });
  });
}

function renderMovies(movies) {
  const fragment = document.createDocumentFragment();
  movies.forEach(m => {
    fragment.appendChild(renderMovie(m))
  });
  cardList.appendChild(fragment);
}

function renderMovie(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('card');
  const noImage = '../images/image_not_available.png'
  movieElement.innerHTML = `
      <div>
        <div class="header-card">
          <input type="checkbox" name="${movie.original_title}" id="${movie.id}">
          <h2>${movie.original_title}</h2>
        </div>
        <div class="content-card">
          ${movie.backdrop_path ? `<div class="card-image"><img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="Movie Image"></div>`
        : `<div class="card-image"><img src="${noImage}" alt="Movie Image"></div>`
          }
          <ul class="movie-details">
            <li><b>Language:</b>${movie.original_language}</li>
            <li><b>Popularity:</b>${movie.popularity}</li>
            <li><b>Release date:</b>${movie.release_date}</li>
            <li><b>Overview:</b>${movie.overview}</li>
          </ul>
        </div>
      </div>
    `;

  return movieElement;
}