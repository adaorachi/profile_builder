import Dexie from 'dexie';

const db = new Dexie('ProfileBuilder');
db.version(1).stores({
  users: '++id,email,password,isLoggedIn',
  userDetails:
    '++id, firstName, lastName, email, phoneNumber, tagline, work_experience, skills, userId',
});

export const addUser = async (details, resetForm) => {
  const { email, password } = details;
  try {
    const user = await db.users.add(
      {
        email,
        password,
        isLoggedIn: true,
      },
      email
    );
    const userId = user;
    addUserDetails(details, userId, resetForm);
  } catch (error) {
    console.log('An error occured', error);
  }
};

export const addUserDetails = async (details, userId, resetForm) => {
  const { firstName, lastName, email } = details;
  try {
    const userDetails = await db.userDetails.add(
      {
        firstName,
        lastName,
        email,
        userId,
      },
      userId
    );
    resetForm();
  } catch (error) {
    console.log('An error occured', error);
  }
};

export const isCurrentUser = async () => {
  const currentUser = await db.users
    .filter((user) => user.isLoggedIn)
    .limit(1)
    .toArray();
  return currentUser;
};

export const getCurrentUserDetail = async () => {
  try {
    const userId = await isCurrentUser();
    const { id } = userId?.[0];
    return await db.userDetails.get({ userId: id });
  } catch (error) {
    console.log(error);
  }
};

export const editUserDetails = async (details) => {
  try {
    const userId = await isCurrentUser();
    const { id } = userId?.[0];
    return await db.userDetails.update(id, details);
  } catch (error) {
    console.log(error);
  }
};

export const handleLogIn = async (details, setMessage, resetForm) => {
  try {
    const { email, password } = details;
    const getUser = await db.users
      .where({ email, password })
      .limit(1)
      .toArray();
    if (getUser.length) {
      const { id } = getUser[0];
      resetForm();
      return await db.users.update(id, { isLoggedIn: true });
    } else {
      setMessage('Wrong email/password');
    }
  } catch (error) {
    setMessage('An error occured');
  }
};

export const handleLogOut = async (e) => {
  e.preventDefault();
  return await db.users.update(1, { isLoggedIn: false });
};
