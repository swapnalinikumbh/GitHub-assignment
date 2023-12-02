import React from 'react';
import '../StyleComponent/RepoCard.css';
const RepoCard = ({ repo }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    return (
        <div>
            <img src={repo.owner.avatar_url} alt="Avatar" />
            <div>
                <h3>{capitalizeFirstLetter(repo.name)}</h3>
                <p>Stars: {repo.stargazers_count}</p>
                <p>Description: {repo.description}</p>
                <p>Language: {repo.language}</p>
            </div>
        </div>
    );
};

export default RepoCard;
