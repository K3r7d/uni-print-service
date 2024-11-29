import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
};

export default UserPage;