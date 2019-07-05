/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("movies", { pageTitle: "Movies!", movies });
  } catch (error) {
    console.log(error);
    res.render("movies", { pageTitle: "Movies!", movies: [] });
  }
};

export const getMovieCreate = (req, res) => {
  res.render("create", { pageTitle: "Create Movie" });
};

export const postMovieCreate = async (req, res) => {
  const {
    body: { title, synopsis, genre, year, rating }
  } = req;
  let genres = genre.split(",");
  const newMovie = await Movie.create({
    title,
    synopsis,
    genres,
    year,
    rating
  });
  console.log(newMovie);
  res.redirect(`/${newMovie.id}`);
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.redirect("404");
  }
};

export const getMovieEdit = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("edit", { pageTitle: `Edit ${movie.title}`, movie });
  } catch (error) {
    res.redirect("/");
  }
};

export const postMovieEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, synopsis, genres, year, rating }
  } = req;
  try {
    await Movie.findOneAndUpdate(
      { _id: id },
      { title, synopsis, genres, year, rating }
    );
    const movie = await Movie.findById(id);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.redirect("/");
  }
};

export const movieDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
  } catch (error) {}
  res.redirect("/");
};

export const movieSearch = async (req, res) => {
  const {
    query: { year: searchYear, rating: searchRating }
  } = req;

  let movies = [];
  try {
    if (searchYear) {
      movies = await Movie.find({ year: { $gte: searchYear } });
    }
    if (searchRating) {
      movies = await Movie.find({ rating: { $gte: searchRating } });
    }
  } catch (error) {
    console.log(error);
  }
  res.render("search", {
    pageTitle: "Search",
    searchYear,
    searchRating,
    movies
  });
};
