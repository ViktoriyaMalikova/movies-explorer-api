const router = require('express').Router();
const { addMovieValidation, deleteMovieValidation } = require('../utils/validator');
const { getMovies, addMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', addMovieValidation, addMovie);

router.delete('/:movieId', deleteMovieValidation, deleteMovie);

module.exports = router;
