import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';
import { genresOptions, labels, text } from '../../data.js';
import { useDispatch } from 'react-redux';
import { editMovie as editRequest } from 'service/index.js';

const EditMovie = ({ data, handleClose }) => {
    const { editMovie, titleLabel, releaseDateLabel, selectDateLabel, movieUrlLabel, genreLabel, selectGenreLabel, overviewLabel, runtimeLabel, hereLabel } = labels;
    const { resetTxt, saveTxt } = text;
    const { id } = data;

    const [title, setTitle] = useState(data.title);
    const [release_date, setReleaseDate] = useState(data.release_date);
    const [poster_path, setMovieUrl] = useState(data.poster_path);
    const [genres, setGenre] = useState(data.genres);
    const [overview, setOverview] = useState(data.overview);
    const [runtime, setRuntime] = useState(data.runtime);

    const dispatch = useDispatch();

    const editMovieFunc = (params) => {
        editRequest(dispatch, params, () => {
            handleClose();
        })
    }

    return (
        <>
            <p>{`${editMovie} ${id}`}</p>
            <Form.Group controlId="movieTitle">
                <Form.Label>{titleLabel}</Form.Label>
                <Form.Control type="text" placeholder={titleLabel} defaultValue={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieReleaseDate">
                <Form.Label>{releaseDateLabel}</Form.Label>
                <Form.Control type="text" placeholder={selectDateLabel} defaultValue={release_date} onChange={e => setReleaseDate(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieUrl">
                <Form.Label>{movieUrlLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${movieUrlLabel} ${hereLabel}`} defaultValue={poster_path} onChange={e => setMovieUrl(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieGenre">
                <Form.Label>{genreLabel}</Form.Label>
                <Form.Control as="select" value={genres[0]} onChange={e => setGenre([e.target.value])}>
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
                <Form.Control type="text" placeholder={`${overviewLabel} ${hereLabel}`} defaultValue={overview} onChange={e => setOverview(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="movieRuntime">
                <Form.Label>{runtimeLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${runtimeLabel} ${hereLabel}`} defaultValue={runtime} onChange={e => setRuntime(Number(e.target.value))} />
            </Form.Group>

            <Button variant="secondary" type="reset">
                {resetTxt}
            </Button>
            <Button variant="primary" type="submit" onClick={() => editMovieFunc({ id, title, release_date, poster_path, overview, runtime, genres })}>
                {saveTxt}
            </Button>   
        </>
    )
}

EditMovie.propTypes = {
    data: PropTypes.object
};

export default EditMovie;
