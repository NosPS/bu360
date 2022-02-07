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
import { getErrorMessage } from '../utils/message';

export default function LoginPage() {
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
               router.push('/avatar')
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
                  marginTop: '50px',
                  paddingTop: '50px',
                  paddingBottom: '50px',
                  width: '40em',
                  textAlign: 'center',
                  borderRadius: '25px',
                  background: 'rgba(255,255,255,0.8)'
               }}>
                  
                  <div style={{ 
                        display: 'flex',
                        justifyContent: 'right',
                     }}>
                     <img src="/images/tab_welcome.png" height="50px" />
                  </div>

                  <div>
                     <img src="/images/person.png" width="150px" />
                  </div>

                  <div style={{ 
                        marginTop: '20px', 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        width: '100%',
                        padding: '0 30px'
                     }}>
                     
                     <div className={ styles.inputitem }>
                        <InputGroup className="mb-12">
                           <FormControl
                              ref={usernameRef}
                              placeholder="Email Address"
                              aria-label="Email Address"
                              aria-describedby="basic-addon1"
                           />
                        </InputGroup>
                     </div>

                     <div className={ styles.inputitem }>
                        <InputGroup className="mb-12">
                           <FormControl
                              ref={passwordRef}
                              type="password"
                              placeholder="password"
                              aria-label="password"
                              aria-describedby="basic-addon1"
                           />
                        </InputGroup>
                     </div>

                     <div className={ styles.inputitem } style={{ display: 'flex', flexDirection: 'row' }}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                           <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                     </div>

                     <div style={{ marginTop: "40px" }}>
                        <Button style={{ 
                           background: "url('/images/login_button.png') no-repeat top left",
                           backgroundSize: "100% 100%",
                           border: "none",
                           padding: "4px 8px",
                           width: "140px",
                           height: "40px"
                        }}
                           type="submit"
                        ></Button>
                     </div>

                     <div style={{ 
                           marginTop: "20px", 
                           display: "flex",
                           justifyContent: "center"
                        }}>
                        <div style={{ 
                           background: "url('/images/txtsignup.png') no-repeat top left",
                           backgroundSize: "100% 100%",
                           border: "none",
                           padding: "4px 8px",
                           width: "80px",
                           height: "27px",
                           cursor: "pointer"
                        }} onClick={ () => router.push('/type') }
                        ></div>
                     </div>
                     
                     <div style={{ 
                           marginTop: "80px", 
                           display: "flex",
                           justifyContent: "center"
                        }}>
                        <div style={{ 
                           background: "url('/images/txtforgot.png') no-repeat top left",
                           backgroundSize: "100% 100%",
                           border: "none",
                           padding: "4px 8px",
                           width: "150px",
                           height: "25px",
                           cursor: "pointer"
                        }} onClick={ () => router.push('/forgot') }
                        ></div>
                     </div>
                  </div>

               </div>
            </div>

         </form>
      </div>

      </>
   )
}