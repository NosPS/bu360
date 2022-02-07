
import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from './localstorage'

const AppContext = createContext();

const defaultUserInformation = {
   uid: null,
   firstname: null,
   lastname: null,
   school: null,
   district: null,
   contact: null,
   faculty: null,
   email: null,
   accessToken: null,
   avatar: null
}


export function AppWrapper({ children }) {

   const [userInformation, setUserInformation] = useLocalStorage('userInformation')

   useEffect(() => {
      localStorage.setItem("userInformation", JSON.stringify(userInformation));
   }, [userInformation]);

   return (
      <AppContext.Provider value={{
         state: {
            userInformation: userInformation,
         },
         setUserInformation: setUserInformation,
       }}>
         {children}
      </AppContext.Provider>
   );
}
 
export function useAppContext() {
   return useContext(AppContext);
}