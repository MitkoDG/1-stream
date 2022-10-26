const url = 'https://api.themoviedb.org/3/search/movie?api_key=4949ee96f27e2a19002b00e8392db093&language=en-US' 
const filtered = document.getElementById('#filtered');
// const cardList = filtered.querySelector('.card');

export function renderMovieList(movieList) {
    let movieForEncode = movieList.join(',');
    let encodedStr = encodeURIComponent(movieForEncode)
    console.log(movieList);
    console.log(encodedStr);
    return
    fetch(url + `&query=${encodedStr}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(movies => {
            renderMovies(Object.values(movies));
            filtered.style.display = 'block';
        });
}

function renderMovies(movies) {
    const fragment = document.createDocumentFragment();

    movies.forEach(x => {
        fragment.appendChild(renderMovie(x))
    });

    cardList.innerHTML = '';
    cardList.appendChild(fragment);
}

function renderMovie(movie) {
    const movieElement = document.createElement('article');
    movieElement.classList.add('preview');

    movieElement.innerHTML = `
      <div class="card">
        <input type="checkbox" name="${title}" id="${title}">
        <div><img src="" alt="">Poster</div>
        <div>
          <p>${title}</p>
        </div>
        <div>
          <ul>
            <li>Genres</li>
            <li>Release</li>
            <li>Rating</li>
            <li>Duration</li>
          </ul>
        </div>
      </div>
    `;

    return movieElement;
}