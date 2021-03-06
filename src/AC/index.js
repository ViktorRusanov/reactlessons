import { INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION } from '../constants';

export function increment() {
    return{
        type: INCREMENT
    };
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    };
}

export function changeDateRange(data) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { data }
    }
}

export function changeSelection(data) {
    return {
        type: CHANGE_SELECTION,
        payload: { data }
    }
}