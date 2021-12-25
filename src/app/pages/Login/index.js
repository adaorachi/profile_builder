import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppForm from '../../components/Form';
import { LoginSchema } from '../../utils/FormSchema';
import { RegisterValues } from '../../utils/FormValues';
import AuthContainer from '../../shared/AuthContainer';
import { handleLogIn } from '../../query';

export default function Index() {
  const [message, setMessage] = useState(null);

  return (
    <AuthContainer
      Title={() => <>Login to continue</>}
      Footer={() => (
        <>
          Don't have an account? <Link to="/register">Register now</Link>
        </>
      )}
      message={message}
    >
      <AppForm
        inputList={['email', 'password']}
        userDetails={RegisterValues}
        detailSchema={LoginSchema}
        handleSubmit={(values, resetForm) =>
          handleLogIn(values, setMessage, resetForm)
        }
        submitBtnLabel={'Login'}
        icons
      />
    </AuthContainer>
  );
}
