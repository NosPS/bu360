import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import Link from 'next/link';

import { db, app } from "../firebase/clientApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { useAppContext } from "../app/state"
import AlertMessage from '../components/alert';

import { redirectToLink } from '../utils/helpers';
import LinkMenu from '../components/linkmenu';

export default function TypePage() {
   const router = useRouter()
   const context = useAppContext()

   const size = useWindowSize();

   const [ errorMessage, setErrorMessage ] = useState("")
   const [ isProcess, setIsProcess ] = useState(false)

   const usernameRef = useRef(null);
   const passwordRef = useRef(null);

   const loginWithEmailPassword = async function(e) {
      e.preventDefault();
      console.log('loginWithEmailPassword')
      setIsProcess(true);

      if (usernameRef.current.value === '' || passwordRef.current.value === '') {
         setErrorMessage("Please enter username or password")
         setIsProcess(false);
         return;
      }

      const params = {
         username: usernameRef.current.value,
         password: passwordRef.current.value 
      }

      const auth = getAuth();

      signInWithEmailAndPassword(auth, params.username, params.password)
         .then((userCredential) => {
            
            const user = userCredential.user;
            getUserProfile().then((data)=>{
               const userInfomation = {
                  uid: user.uid,
                  firstname: data.firstname,
                  lastname: data.lastname,
                  email: user.email,
                  accessToken: user.accessToken,
               }
               context.setUserInformation(userInfomation)
               console.log('user', user);
               router.push('/main')
            })
         })
         .catch((error) => {
            console.log('error', error.code, error.message)
            setErrorMessage(getErrorMessage(error.code, error.message));
            setIsProcess(false);
            return;
         });
         
   }

   const getUserProfile = async function () {
      const auth = getAuth();
      const uid = auth.currentUser.uid
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
   
      const userData = userSnap.data();
      console.log('userData', userData)
      return userData
   }

   function useWindowSize() {
      const [windowSize, setWindowSize] = useState({ width: null, height: null });
      
      useEffect(() => {
      if (typeof window !== 'undefined') {
         function handleResize() {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
         }
         window.addEventListener("resize", handleResize);
         handleResize();
         return () => window.removeEventListener("resize", handleResize);
      }
      }, []);
      return windowSize;
   }

   return (
      <>
         { errorMessage !== '' ? 
            <AlertMessage key="danger" variant="danger" onclose={()=> setErrorMessage("")}>
               {errorMessage}
            </AlertMessage>
            : <></>
         }
     
         <div style={{ height: size.height, width: '100%' }} className={ styles.background }>
            <LinkMenu />

            <form onSubmit={ loginWithEmailPassword }>

               <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 0,
                  margin: 0
               }}>
                  <div className={styles.loginbox} style={{
                     marginTop: '20em',
                     paddingTop: '50px',
                     paddingBottom: '50px',
                     width: '40em',
                     textAlign: 'center',
                     borderRadius: '25px',
                     background: 'rgba(255,255,255,0.8)'
                  }}>
                     
                     <div style={{ 
                           display: 'flex', 
                           flexDirection: 'column',
                           justifyContent: 'center', 
                           width: '100%',
                        }}>

                        <div>
                           <Button style={{ 
                              background: "url('/images/login_button.png') no-repeat top left",
                              backgroundSize: "100% 100%",
                              border: "none",
                              padding: "4px 8px",
                              width: "140px",
                              height: "40px"
                           }}
                              type="button"
                              onClick={ () => router.push('/registerstudent') }
                           ></Button>
                        </div>

                        <div style={{ marginTop: '2em' }}>
                           <Button style={{ 
                              background: "url('/images/login_button.png') no-repeat top left",
                              backgroundSize: "100% 100%",
                              border: "none",
                              padding: "4px 8px",
                              width: "140px",
                              height: "40px"
                           }}
                              type="button"
                              onClick={ () => router.push('/registerguest') }
                           ></Button>
                        </div>

                        
                        
                     </div>
                  </div>
               </div>
            </form>
         </div>

      </>
   )
}