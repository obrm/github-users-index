import { createContext, useContext, useReducer } from 'react';

import githubReducer from './githubReducer';

import { GITHUB_ACTIONS } from '../actions';

import { usersApi, reposApi } from '../../api/api';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: GITHUB_ACTIONS.SET_LOADING });

  const searchUsers = async text => {
    setLoading();

    const res = await usersApi.get(`/search/users?q=${text}`);

    dispatch({
      type: GITHUB_ACTIONS.SEARCH_USERS,
      payload: res.data.items,
    });

    return res.data.items;
  };

  const getUser = async login => {
    setLoading();

    const res = await usersApi.get(`/users/${login}`);

    dispatch({
      type: GITHUB_ACTIONS.GET_USER,
      payload: res.data,
    });
  };

  const getUserRepos = async login => {
    setLoading();

    const res = await reposApi.get(`/users/${login}/repos`);

    dispatch({
      type: GITHUB_ACTIONS.GET_REPOS,
      payload: res.data,
    });
  };

  const clearUsers = () => dispatch({ type: GITHUB_ACTIONS.CLEAR_USERS });


  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );

};

export const useGithubGlobalContext = () => {
  return useContext(GithubContext);
};

export { GithubProvider };