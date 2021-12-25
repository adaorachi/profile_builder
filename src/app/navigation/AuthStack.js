import { Route } from 'react-router-dom';
import { Login, Register } from '../pages';
import { UserIsNotAuthenticatedRoute } from './AuthenticateRoute';

const AuthStack = (
  <>
    {[
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ].map((r, ind) => (
      <Route
        key={ind}
        exact
        path={r.path}
        element={
          <UserIsNotAuthenticatedRoute>{r.element}</UserIsNotAuthenticatedRoute>
        }
      />
    ))}
  </>
);

export default AuthStack;
