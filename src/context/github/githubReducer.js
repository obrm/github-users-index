/* eslint-disable import/no-anonymous-default-export */
import { GITHUB_ACTIONS } from '../actions';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GITHUB_ACTIONS.SEARCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case GITHUB_ACTIONS.GET_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case GITHUB_ACTIONS.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GITHUB_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GITHUB_ACTIONS.CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};