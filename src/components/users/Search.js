import { useState } from 'react';

import { useGithubGlobalContext } from './../../context/github/GithubState';
import { useAlertGlobalContext } from './../../context/alert/AlertState';

const Search = () => {
  const { users, searchUsers, clearUsers } = useGithubGlobalContext();
  const { setAlert } = useAlertGlobalContext();

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = async e => {
    e.preventDefault();
    if (text === '') {
      setAlert('נא למלא את שדה החיפוש', 'warning');
    } else {
      const res = await searchUsers(text);
      setText('');

      if (res.length === 0) {
        setAlert('לא נמצאו תוצאות לחיפוש! יש לנסות שוב.', 'danger', 2.5);
      }
    }
  };

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
        <input type="submit" value="חיפוש" className="btn-success btn-block" />
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
