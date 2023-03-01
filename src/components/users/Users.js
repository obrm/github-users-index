import { useGithubGlobalContext } from '../../context/github/GithubContext';

import { Spinner, UserItem } from '..';

const Users = () => {
  const { loading, users } = useGithubGlobalContext();

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-3'>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
