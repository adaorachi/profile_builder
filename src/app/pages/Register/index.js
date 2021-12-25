import { Link } from 'react-router-dom';
import { addUser } from '../../query';
import AppForm from '../../components/Form';
import { RegisterSchema } from '../../utils/FormSchema';
import { RegisterValues } from '../../utils/FormValues';
import AuthContainer from '../../shared/AuthContainer';

export default function Index() {
  return (
    <AuthContainer
      Title={() => <>Register to get started</>}
      Footer={() => (
        <>
          Already have an account? <Link to="/login">Login</Link>
        </>
      )}
    >
      <AppForm
        inputList={['firstName', 'lastName', 'email', 'password']}
        userDetails={RegisterValues}
        detailSchema={RegisterSchema}
        handleSubmit={(values, resetForm) => addUser(values, resetForm)}
        submitBtnLabel={'Register'}
        icons
      />
    </AuthContainer>
  );
}
