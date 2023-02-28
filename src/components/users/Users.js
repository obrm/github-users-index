import { useGithubGlobalContext } from '../../context/github/GithubState';

import { Spinner, UserItem } from '../';

const Users = () => {
  const { loading, users } = useGithubGlobalContext();

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
