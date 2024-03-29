import mongoose from "mongoose";

/*
PLEASE ADD YOUR USERNAME IN THIS LINE.
ALL THE MODELS YOU WILL CREATE WILL HAVE YOUR USERNAME APPENDED TO THEM
SO YOU CAN SEARCH / ADD / EDIT / DELETE YOUR DOCUMENTS ONLY.
PLEASE FOLLOW THIS STEP
WE NEED TO SHARE THE SAME DB SO NICO CAN CHECK OUT EVERYBODYS PROJECT.
*/
const YOUR_USERNAME = "ayn";

const MovieSchema = mongoose.Schema({
  // HERE YOU HAVE TO CREATE AND COMPLETE THE MOVIE SCHEMA
  title: {
    type: String,
    minlength: 3,
    required: "Title is required"
  },
  synopsis: {
    type: String,
    required: "Synopsis is required"
  },
  genres: {
    type: Array,
    required: "Genres is required"
  },
  year: {
    type: Number,
    required: "Year is required"
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: "rating is required"
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
    required: "UploadedAt is required"
  }
});

if (YOUR_USERNAME === null || typeof YOUR_USERNAME !== "string") {
  /*
  PLEASE ADD YOUR USERNAME ON THE LINE 10
  THIS LINE WILL REMIND YOU IF YOU HAVEN'T ADDED IT
  PLEASE DONT REMOVE THIS LINE
  */
  throw Error(
    "❌  Please add your username in the line 10 of models/Movie.js  ❌"
  );
}

if (YOUR_USERNAME.includes("@")) {
  throw Error("❌  Please remove the @ from your username  ❌");
}

const model = mongoose.model(`Movie_${YOUR_USERNAME}`, MovieSchema);

export default model;
