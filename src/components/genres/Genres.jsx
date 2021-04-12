import React, { useCallback } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from 'service/index.js';
import { mainGenres as genres } from '../../data.js';
import { setParamsAction } from 'actions/actions';

const Genres = () => {
    const dispatch = useDispatch();
    const params = useSelector(state => state.fetchReducer.parameters);
    const filter = useSelector(state => state.fetchReducer.parameters.filter);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setParamsAction({filter: e.target.getAttribute("data-value")}));

        getMoviesList(dispatch, params);
    }

    return (
        <ul className={styles.genres}>
            {genres.map((item, index) => (
                <li key={`genre-${index}`} className={filter == item.value ? styles.active : ''}>
                    <a href="#" onClick={handleClick} data-value={item.value}>{item.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default Genres;