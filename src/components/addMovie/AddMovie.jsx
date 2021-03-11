import React from 'react';
import Form from 'react-bootstrap/Form';
import { genres, labels } from '../../data.js';

const AddMovie = () => {
    const { titleLabel, releaseDateLabel, selectDateLabel, movieUrlLabel, genreLabel, selectGenreLabel, overviewLabel, runtimeLabel, hereLabel } = labels;
    
    return (
        <>
            <Form.Group controlId="movieTitle">
                <Form.Label>{titleLabel}</Form.Label>
                <Form.Control type="text" placeholder={titleLabel} />
            </Form.Group>
            <Form.Group controlId="movieReleaseDate">
                <Form.Label>{releaseDateLabel}</Form.Label>
                <Form.Control type="text" placeholder={selectDateLabel} />
            </Form.Group>
            <Form.Group controlId="movieUrl">
                <Form.Label>{movieUrlLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${movieUrlLabel} ${hereLabel}`} />
            </Form.Group>
            <Form.Group controlId="movieGenre">
                <Form.Label>{genreLabel}</Form.Label>
                <Form.Control as="select">
                    <option>{selectGenreLabel}</option>
                    {genres.map((item, index) => (
                        <option key={`genre-${index}`}>
                            {item}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="movieOverview">
                <Form.Label>{overviewLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${overviewLabel} ${hereLabel}`} />
            </Form.Group>
            <Form.Group controlId="movieRuntime">
                <Form.Label>{runtimeLabel}</Form.Label>
                <Form.Control type="text" placeholder={`${runtimeLabel} ${hereLabel}`} />
            </Form.Group>
        </>
    )
}

export default AddMovie;
