import useSearch from './../../hooks/useSearch';

import { useGithubGlobalContext } from '../../context/github/GithubContext';

const Search = () => {
  const { users, clearUsers } = useGithubGlobalContext();

  const { text, onSubmit, onChange } = useSearch();

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="חיפוש משתמשים..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="חיפוש" className="btn-success btn-block" disabled={!text && 'disabled'} />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block btn-clear"          
          onClick={clearUsers}
        >
          ניקוי
        </button>
      )}
    </div>
  );
};

export default Search;
