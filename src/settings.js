export const APIUrl = 'http://localhost:4000';

export const DEFAULT_PARAMS = {
    filter: null,
    limit: 6,
    sortOrder: 'desc',
    sortBy: 'release_date'
}

export const FETCH_REDUCER_STATE = {
    movies: [],
    selectedMovie: null,
    isLoading: false,
    limit: null,
    offset: null,
    totalAmount: null,
    error: null,
    parameters: DEFAULT_PARAMS
};

export const MODAL_REDUCER_STATE = {
    creationFormModal: false,
    editFormModal: false,
    deleteFormModal: false
}
