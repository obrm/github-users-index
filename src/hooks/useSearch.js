import { useState } from 'react';
import { useGithubGlobalContext } from '../context/github/GithubContext';
import { useAlertGlobalContext } from '../context/alert/AlertContext';

const useSearch = () => {
  const [text, setText] = useState('');

  const { searchUsers } = useGithubGlobalContext();
  const { setAlert } = useAlertGlobalContext();

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

  return {
    text,
    onSubmit,
    onChange
  };
};

export default useSearch;