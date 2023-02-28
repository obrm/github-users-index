import React from 'react';

const RepoItem = ({ repo }) => {
  const updateDate = new Date(repo.updated_at).toLocaleDateString();
  console.log(repo);
  return (
    <div className="card all-center">
      <h3>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h3>
      {repo.description && <h4> {repo.description}</h4>}
      <h6> עודכן בתאריך {updateDate}</h6>
    </div>
  );
};

export default RepoItem;
