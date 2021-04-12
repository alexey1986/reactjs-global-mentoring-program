import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { genresOptions, labels, text } from '../../data.js';
import { useDispatch } from 'react-redux';
import { createMovie } from 'service/index.js';

const AddMovie = ({ handleClose }) => {
    const { titleLabel, releaseDateLabel, selectDateLabel, movieUrlLabel, genreLabel, selectGenreLabel, overviewLabel, runtimeLabel, hereLabel } = labels;
    const { resetTxt, submitTxt } = text;
    
    const [title, setTitle] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [poster_path, setMovieUrl] = useState("");
    const [genres, setGenre] = useState([]);
    const [overview, setOverview] = useState("");
    const [runtime, setRuntime] = useState(0);

    const dispatch = useDispatch();

    const createMovieFunc = (params) => {
        createMovie(dispatch, params, () => {
            handleClose()
        })
    }

    return (
        <>
            <Form.Group controlId="movieTitle">
                <Form.Label>{titleLabel}</Form.Label>
                <Form.Control type="text" placeholder={titleLabel} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieReleaseDate">
                <Form.Label>{releaseDateLabel}</Form.Label>
                <Form.Control type="text" placeholder={selectDateLabel} onChange={e => setReleaseDate(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieUrl">
                <Form.Label>{movieUrlLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${movieUrlLabel} ${hereLabel}`} onChange={e => setMovieUrl(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieGenre">
                <Form.Label>{genreLabel}</Form.Label>
                <Form.Control as="select" onChange={e => setGenre([e.target.value])}>
                    <option>{selectGenreLabel}</option>
                    {genresOptions.map((item, index) => (
                        <option key={`genre-${index}`} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="movieOverview">
                <Form.Label>{overviewLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${overviewLabel} ${hereLabel}`} onChange={e => setOverview(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieRuntime">
                <Form.Label>{runtimeLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${runtimeLabel} ${hereLabel}`} onChange={e => setRuntime(Number(e.target.value))} />
            </Form.Group>

            <Button variant="secondary" type="reset">
                {resetTxt}
            </Button>
            <Button variant="primary" type="submit" onClick={() => createMovieFunc({title, release_date, poster_path, overview, runtime, genres})}>
                {submitTxt}
            </Button>    
        </>
    )
}

export default AddMovie;
