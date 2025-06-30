import React from 'react';
import GitHubButton from 'react-github-btn'

const GitHubStarButton = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <GitHubButton 
                href="https://github.com/trufnetwork/kwil-db" 
                data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;" 
                data-icon="octicon-star" 
                data-size="large" 
                aria-label="Star trufnetwork/kwil-db on GitHub"
            >
                Star kwil-db
            </GitHubButton>
            <div 
                style={{
                    width: 5,
                }}
            />
            <GitHubButton 
                href="https://github.com/trufnetwork" 
                data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;" 
                data-size="large" 
                aria-label="Follow @trufnetwork on GitHub"
            >
                Follow @trufnetwork
            </GitHubButton>
        </div>
    );
  };
  
  export default GitHubStarButton;
  