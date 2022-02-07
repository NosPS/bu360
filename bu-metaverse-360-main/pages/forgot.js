import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import Link from 'next/link';

import { db, app } from "../firebase/clientApp";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { useAppContext } from "../app/state"

import AlertMessage from '../components/alert';
import LinkMenu from '../components/linkmenu';

export default function ForgotPage() {
   const router = useRouter()
   const context = useAppContext()

   const size = useWindowSize();

   const usernameRef = useRef(null);

   const [ errorMessage, setErrorMessage ] = useState("")
   const [ infoMessage, setInfoMessage ] = useState("")
   const [ isProcess, setIsProcess ] = useState(false)

   const forgotPassword = async function (e) {
      e.preventDefault();
      setErrorMessage("");
      setIsProcess(true);

      if (usernameRef.current.value === "") {
         setErrorMessage("Error: please enter email")
         return;
      }

      const username = usernameRef.current.value;
      
      const auth = getAuth()
      sendPasswordResetEmail(auth, username).then(() => {
         setInfoMessage("email sent please check email")
      }).catch((error) => {
         setErrorMessage(getErrorMessage(error.code, error.message))
      })

      usernameRef.current.value = ""
      setIsProcess(false);
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

         { infoMessage !== '' ? 
            <AlertMessage key="info" variant="info" onclose={()=> setInfoMessage("")}>
               { infoMessage }
            </AlertMessage>
            : <></>
         }
     
      <div style={{ height: size.height, width: '100%' }} className={ styles.background }>
         <LinkMenu />

         <form onSubmit={ forgotPassword }>

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
                        <span style={{
                           fontSize: '1.2em',
                           color: 'rgb(71,74,167)',
                           cursor: 'pointer',
                        }} onClick={ ()=> router.push('/login')}
                        >Back</span>
                           
                        {/* <div style={{ 
                           background: "url('/images/txtsignup.png') no-repeat top left",
                           backgroundSize: "100% 100%",
                           border: "none",
                           padding: "4px 8px",
                           width: "80px",
                           height: "27px",
                           cursor: "pointer"
                        }} onClick={ () => router.push('/login') }
                        ></div> */}
                     </div>
                     
                     
                  </div>

               </div>
            </div>

         </form>
      </div>

      </>
   )
}