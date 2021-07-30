import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjUserId() {
      const response = await getUserObjUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjUserId();
    }
  }, [user]);
  return { user: activeUser };
}
