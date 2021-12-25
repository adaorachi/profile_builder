import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { isCurrentUser } from '../query';
import Loader from '../shared/Loader';

export const UserIsAuthenticatedRoute = ({ children }) => {
  const auth = useLiveQuery(() => {
    return isCurrentUser();
  }, []);

  if (!auth) {
    return <Loader />;
  }

  return auth.length ? children : <Navigate to="/login" />;
};

export const UserIsNotAuthenticatedRoute = ({ children }) => {
  const auth = useLiveQuery(() => {
    return isCurrentUser();
  }, []);

  if (!auth) {
    return <Loader />;
  }

  return !auth.length ? children : <Navigate to="/" />;
};
