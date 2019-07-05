import express from "express";
import {
  home,
  getMovieCreate,
  postMovieCreate,
  movieDetail,
  getMovieEdit,
  postMovieEdit,
  movieDelete,
  movieSearch
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/create", getMovieCreate);
movieRouter.post("/create", postMovieCreate);
movieRouter.get("/search", movieSearch);
movieRouter.get("/:id", movieDetail);
movieRouter.get("/:id/edit", getMovieEdit);
movieRouter.post("/:id/edit", postMovieEdit);
movieRouter.get("/:id/delete", movieDelete);

export default movieRouter;
