import { mockedApiCall } from '../../api/mockedApi';
import {
  ADD_CARD,
  DELETE_CARD,
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
} from './types';

export const updateState = (idx) => ({
  type: DELETE_CARD,
  payload: idx,
});

export const addCard = (card) => ({
  type: ADD_CARD,
  payload: card,
});

export const fetchCardsStart = () => ({
  type: FETCH_CARDS_START,
});

export const fetchCardsError = (error) => ({
  type: FETCH_CARDS_ERROR,
  payload: error,
});

export const fetchCardsSuccess = (cards) => ({
  type: FETCH_CARDS_SUCCESS,
  payload: cards,
});

export const fetchCards = () => { return (dispatch) => {
  dispatch(fetchCardsStart());
  mockedApiCall()
    .then((res) => dispatch(fetchCardsSuccess(res)))
    .catch((rej) => dispatch(fetchCardsError(rej)));
}};
