import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { genresOptions, labels, text } from '../../data.js';
import { useDispatch } from 'react-redux';
import { editMovie as editRequest } from 'service/index.js';
import { useFormik } from 'formik';
import * as yup from "yup";
import { TextField, SelectField } from "components/form-field";

const EditMovie = ({ data, handleClose }) => {
    const { editMovie, titleLabel, releaseDateLabel, movieUrlLabel, selectDateLabel, genreLabel, overviewLabel, runtimeLabel, hereLabel } = labels;
    const { resetTxt, saveTxt } = text;
    const { id, title, release_date, poster_path, genres, overview, runtime } = data;

    const dispatch = useDispatch();

    const editMovieFunc = (params) => {
        editRequest(dispatch, params, () => {
            handleClose();
        })
    };

    const schema = yup.object({
        title: yup.string().required(),
        release_date: yup.date().required(),
        poster_path: yup.string().url().required(),
        genres: yup.array().nullable(),
        overview: yup.string().required(),
        runtime: yup.number().max(120).required()
    });

    const formik = useFormik({
        initialValues: {
            id,
            title,
            release_date,
            poster_path,
            genres,
            overview,
            runtime
        },
        validationSchema: schema,
        onSubmit: values => {
            editMovieFunc(values)
        }
    });

    return (
        <>
            <p>{`${editMovie} ${id}`}</p>

            <Form onSubmit={formik.handleSubmit}>

                <TextField
                    id="title"
                    label={titleLabel}
                    name="title"
                    type="text" 
                    handleChange={formik.handleChange}
                    value={formik.values.title}
                    error={Boolean(formik.errors.title)}
                    errorTxt={formik.touched.title && formik.errors.title}
                />
                
                <TextField
                    id="release_date"
                    label={releaseDateLabel}
                    name="release_date"
                    type="date" 
                    handleChange={formik.handleChange}
                    value={formik.values.release_date}
                    error={Boolean(formik.errors.release_date)}
                    errorTxt={formik.touched.release_date && formik.errors.release_date}
                    placeholder={selectDateLabel}
                />

                <TextField
                    id="poster_path"
                    label={movieUrlLabel}
                    name="poster_path"
                    type="text" 
                    handleChange={formik.handleChange}
                    value={formik.values.poster_path}
                    error={Boolean(formik.errors.poster_path)}
                    errorTxt={formik.touched.poster_path && formik.errors.poster_path}
                />

                <SelectField
                    id="genres"
                    label={genreLabel}
                    name="genres"
                    handleChange={formik.handleChange}
                    value={formik.values.genres}
                    options={genresOptions}
                    error={Boolean(formik.errors.genres)}
                    errorTxt={formik.touched.genres && formik.errors.genres}
                />

                <TextField
                    id="overview"
                    label={overviewLabel}
                    name="overview"
                    type="text" 
                    handleChange={formik.handleChange}
                    value={formik.values.overview}
                    error={Boolean(formik.errors.overview)}
                    errorTxt={formik.touched.overview && formik.errors.overview}
                    placeholder={`${overviewLabel} ${hereLabel}`}
                />

                <TextField
                    id="runtime"
                    label={runtimeLabel}
                    name="runtime"
                    type="number" 
                    handleChange={formik.handleChange}
                    value={formik.values.runtime}
                    error={Boolean(formik.errors.runtime)}
                    errorTxt={formik.touched.runtime && formik.errors.runtime}
                    placeholder={`${runtimeLabel} ${hereLabel}`}
                />

                <Button variant="secondary" type="reset">
                    {resetTxt}
                </Button>
                <Button variant="primary" type="submit">
                    {saveTxt}
                </Button>
            </Form>
        </>
    )
}

EditMovie.propTypes = {
    data: PropTypes.object,
    handleClose: PropTypes.func
};

export default EditMovie;
