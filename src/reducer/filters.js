import { CHANGE_DATE_RANGE, CHANGE_SELECTION, DELETE_ARTICLE } from '../constants';

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_DATE_RANGE:
            return {...filters, dateRange: payload.data}

        case CHANGE_SELECTION:
            return {...filters, selected: payload.data}

        case DELETE_ARTICLE:
            return {...filters, selected: filters.selected.filter(id => id !== payload.id)}
    }
    return filters;
}