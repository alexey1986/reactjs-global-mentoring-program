import { APIUrl } from '@src/settings';

const fetchDataRequest = async (url, options, successCallback, errorCallback) => {
    try {
        let response = await fetch(url, { ...options });
        response = response.status === 204 ? response : await response.json();
        successCallback(response);
    } catch (e) {
        errorCallback(e);
    }
};

export const fetchMoviesListApi = async (options, successCallback, errorCallback) => {
    const queryStr = new URLSearchParams(options).toString();

    fetchDataRequest(`${APIUrl}/movies?${queryStr}`, {}, successCallback, errorCallback);
};

export const fetchMovieApi = async (id, successCallback, errorCallback) => {
    fetchDataRequest(`${APIUrl}/movies/${id}`, {}, successCallback, errorCallback);
};

export const deleteMovieApi = async (id, successCallback, errorCallback) => {
    fetchDataRequest(`${APIUrl}/movies/${id}`, { method: 'DELETE' }, successCallback, errorCallback);
};

export const createMovieApi = async (options, successCallback, errorCallback) => {
    fetchDataRequest(`${APIUrl}/movies`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(options)}, successCallback, errorCallback);
};

export const editMovieApi = async (options, successCallback, errorCallback) => {
    fetchDataRequest(`${APIUrl}/movies`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(options)}, successCallback, errorCallback);
};