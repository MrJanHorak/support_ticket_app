// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// export const useAuthStatus = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [checkingStatus, setCheckingStatus] = useState(true);

//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (user) {
//       setLoggedIn(true);
//     } else {
//       setLoggedIn(false);
//     }
//     setCheckingStatus(false);
//   }, [user]);
//   return { loggedIn, checkingStatus };
// };

import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  const loggedIn = Boolean(user);
  // Optional: check if Redux is still loading auth data, otherwise status check is complete
  const checkingStatus = isLoading ?? false;

  return { loggedIn, checkingStatus };
};
