// API URL for movie details
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const imagepath = 'https://image.tmdb.org/t/p/w300';
const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';



getMovies(API_URL);

async function getMovies(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Error fetching movie data');
    }
    const data = await res.json();
    showMovies(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function showMovies(movies) {
  if (!movies || !movies.results || movies.results.length === 0) {
    console.log('No movies found');
    return;
  }

  const main = document.getElementById('main');
  main.innerHTML = '';

  movies.results.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
        <img src="${imagepath + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getRatingClass(vote_average)}">${vote_average}</span> 
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      
    `;

    main.appendChild(movieEl);
  });
}

const getRatingClass = (voteAverage) => {
  if (voteAverage >= 8) {
    return 'green';
  } else if (voteAverage >= 6) {
    return 'orange';
  } else if (voteAverage >= 4) {
    return 'yellow';
  } else {
    return 'red';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const search = document.getElementById('srch');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
      getMovies(searchURL + searchTerm);
      search.value = '';
    } else {
      window.location.reload()
      // getMovies(API_URL);
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Place your JavaScript code here
  // API URL, functions, event listeners, etc.
});