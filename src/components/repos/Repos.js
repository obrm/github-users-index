import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div className="card all-center">
      <h2>חמשת הריפוז הציבוריים האחרונים:</h2>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default Repos;
