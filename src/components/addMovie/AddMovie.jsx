import React from 'react';
import { PropTypes } from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { genresOptions, labels, text } from '../../data.js';
import { useDispatch } from 'react-redux';
import { createMovie } from '@service/index.js';
import { Formik } from "formik";
import * as yup from "yup";
import { FormTextField, FormSelectField } from "@components/form-field";

const AddMovie = ({ handleClose }) => {
    const { titleLabel, releaseDateLabel, selectDateLabel, movieUrlLabel, genreLabel, selectGenreLabel, overviewLabel, runtimeLabel, hereLabel } = labels;
    const { resetTxt, submitTxt } = text;
    
    const dispatch = useDispatch();

    const createMovieFunc = (params) => {
        createMovie(dispatch, params, () => {
            handleClose();
        })
    }

    const initialValues = {
        title: "",
        release_date: "",
        poster_path: "",
        genres: [],
        overview: "",
        runtime: ""
      }

    const movieDataSchema = yup.object({
        title: yup.string().required(),
        release_date: yup.date().required(),
        poster_path: yup.string().url().required(),
        genres: yup.array().nullable(),
        overview: yup.string().required(),
        runtime: yup.number().max(120).required()
    });

    return (
        <Formik
          validationSchema={movieDataSchema}
          onSubmit={createMovieFunc}
          initialValues={initialValues}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            isValid,
            isSubmitting,
            resetForm
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              
                <FormTextField
                    controlId="movieTitleId"
                    label={titleLabel}
                    type="text"
                    name="title"
                    placeholder={titleLabel}
                />
                 <FormTextField
                    controlId="movieReleaseDateId"
                    label={releaseDateLabel}
                    type="date"
                    name="release_date"
                    placeholder={selectDateLabel}
                />
                
                <FormTextField
                    controlId="movieUrlId"
                    label={movieUrlLabel}
                    type="text"
                    name="poster_path"
                    placeholder={movieUrlLabel}
                />

                <FormSelectField
                    controlId="movieGenreId"
                    label={genreLabel}
                    type="text"
                    name="genres"
                >
                    <option value=''>{selectGenreLabel}</option>
                    {genresOptions.map((item, index) => (
                        <option key={`genre-${index}`} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </FormSelectField>

                <FormTextField
                    controlId="movieOverviewId"
                    label={overviewLabel}
                    type="text"
                    name="overview"
                    placeholder={`${runtimeLabel} ${hereLabel}`}
                />

                <FormTextField
                    controlId="movieRuntimeId"
                    label={runtimeLabel}
                    type="number"
                    name="runtime"
                    placeholder={`${runtimeLabel} ${hereLabel}`}
                />
             
                <Button
                  variant="secondary"
                  as="input"
                  size="lg"
                  type="reset"
                  value={resetTxt}
                  onClick={resetForm}
                />
                <Button
                  disabled={!isValid || isSubmitting}
                  variant="primary"
                  as="input"
                  size="lg"
                  type="submit"
                  value={submitTxt}
                />
            </Form>
          )}
        </Formik>
    )
}

AddMovie.propTypes = {
    data: PropTypes.func
};

export default AddMovie;
