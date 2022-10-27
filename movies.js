const url = 'https://api.themoviedb.org/3/search/movie?api_key=4949ee96f27e2a19002b00e8392db093&language=en-US' 
const filtered = document.getElementById('filtered');
const cardList = filtered.querySelector('.all-cards');

export function renderMovieList(movieList) {
    let movieForEncode = movieList.join(',');
    let encodedStr = encodeURIComponent(movieForEncode)
    console.log(movieList);
    console.log(movieForEncode);
    console.log(encodedStr);
    // return
    fetch(url + `&query=${encodedStr}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(movies => {
          console.log(Object.values(movies));
          console.log(movies.results);
          renderMovies(movies.results);

        });
}

function renderMovies(movies) {
    const fragment = document.createDocumentFragment();
    console.log(movies);
    movies.forEach(m => {
        fragment.appendChild(renderMovie(m))
    });

    cardList.innerHTML = '';
    cardList.appendChild(fragment);
}

function renderMovie(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('card');

    movieElement.innerHTML = `
        <input type="checkbox" name="${movie.original_title}" id="${movie.id}">
        <div><img src="" alt="">Poster</div>
        <div>
          <p>${movie.original_title}</p>
        </div>
        <div>
          <ul>
            <li>Language:${movie.original_language}</li>
            <li>Popularity:${movie.popularity}</li>
            <li>Release date:${movie.release_date}</li>
          </ul>
        </div>
    `;

    return movieElement;
}