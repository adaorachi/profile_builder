import { Route } from 'react-router-dom';
import { EditProfile, ViewProfile, Home } from '../pages';
import { UserIsAuthenticatedRoute } from './AuthenticateRoute';

const GenStack = (
  <Route>
    {[
      { path: '/edit-profile', element: <EditProfile /> },
      { path: '/view-profile', element: <ViewProfile /> },
      { path: '/', element: <Home /> },
    ].map((r, ind) => (
      <Route
        key={ind}
        exact
        path={r.path}
        element={
          <UserIsAuthenticatedRoute>{r.element}</UserIsAuthenticatedRoute>
        }
      />
    ))}
  </Route>
);

export default GenStack;
