/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Spinner, Repos, Badge } from '../components';

import { useGithubGlobalContext } from '../context/github/GithubContext';

const User = () => {
  const { getUser, user, loading, repos, getUserRepos } = useGithubGlobalContext();

  const { id } = useParams();

  useEffect(() => {
    getUser(id);
    getUserRepos(id);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable,
  } = user;

  const badges = [
    {
      type: 'dark',
      text: 'עוקבים',
      number: followers
    },
    {
      type: 'success',
      text: 'עוקב אחרי',
      number: following
    },
    {
      type: 'info',
      text: 'ריפוז ציבוריים',
      number: public_repos
    },
    {
      type: 'light',
      text: 'גיסטים ציבוריים',
      number: public_gists
    },
  ];

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-dark" style={{ marginRight: '2rem' }}>
        חזרה לחיפוש
      </Link>
      <div className="m-2">
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="avatar"
            />
            <h2>{name}</h2>
            <p>מיקום: {location}</p>
          </div>
          <div className="all-center">
            {bio && (
              <>
                <h3 className="text-center">אודות</h3>
                <p dir="ltr">{bio}</p>
              </>
            )}
            <ul>
              <li>
                {login && (
                  <>
                    <strong>שם משתמש:</strong> {login}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>חברה:</strong> {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>אתר: </strong>
                    <a dir="ltr" href={blog} target="_blank" rel="noreferrer">
                      {blog}
                    </a>
                  </>
                )}
              </li>
              <li>
                {hireable !== null && (
                  <>
                    <strong>פנוי להעסקה: </strong>
                    {hireable ? (
                      <i className="fas fa-check text-success" />
                    ) : (
                      <i className="fas fa-time-circle text-danger" />
                    )}
                  </>
                )}
              </li>
            </ul>
            <a
              href={html_url}
              className="btn btn-success my-1"
              target="_blank"
              rel="noreferrer"
            >
              מעבר לפרופיל בגיטהאב
            </a>
          </div>
        </div>
        <div className="card text-center">
          {badges.map((badge) => (
            <Badge key={badge.type} {...badge} />
          ))}
        </div>
        <Repos repos={repos} />
      </div>
    </>
  );
};

export default User;
