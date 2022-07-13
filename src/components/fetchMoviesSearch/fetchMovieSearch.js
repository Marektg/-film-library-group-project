const API_KEY = '2f202abcab3fe0934220a17698275697';

export async function fetchMovieByQuery(searchQuery, page = 1) {

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`
    );
    if (searchQuery === '') {
      document.querySelector('.not-found').classList.remove('is-hidden');
   }
    const results = await response.json();

    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}
