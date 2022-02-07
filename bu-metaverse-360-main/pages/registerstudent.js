import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

import { db, app } from "../firebase/clientApp";
import { getAuth, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { useAppContext } from "../app/state"

import AlertMessage from '../components/alert';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import LinkMenu from '../components/linkmenu';

export default function RegisterStudentPage() {
   const router = useRouter()
   const context = useAppContext()

   const size = useWindowSize();

   const firstnameRef = useRef(null);
   const lastnameRef = useRef(null);
   const emailRef = useRef(null);
   const passwordRef = useRef(null);
   const confirmPasswordRef = useRef(null);

   const schoolRef = useRef(null);
   const districtRef = useRef(null);
   const contactRef = useRef(null);
   const facultyRef = useRef(null);

   const [ errorMessage, setErrorMessage ] = useState("")
   const [ infoMessage, setInfoMessage ] = useState("")
   const [ isProcess, setIsProcess ] = useState(false)
   const [ isNextTab, setIsNextTab ] = useState(false)

   const registerWithEmailPassword = async function (e) {
      
      console.log('registerWithEmailPassword');
      e.preventDefault();
      setErrorMessage("");
      setIsProcess(true);

      if (emailRef.current.value === '') {
         setErrorMessage("Error: Please enter email")
         setIsProcess(false);
         return;
      }
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
         setErrorMessage("Error: Password and ConfirmPassword Missmatch")
         setIsProcess(false);
         return;
      }

      const params = {
         firstname: firstnameRef.current.value,
         lastname: lastnameRef.current.value,
         email: emailRef.current.value,
         password: passwordRef.current.value,
         scholl: schoolRef.current.value,
         district: districtRef.current.value,
         contact: contactRef.current.value,
         faculty: facultyRef.current.value,
         type: 'Student',
         avatar: null,
      }
      console.log('params', params);

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, params.email, params.password)
         .then((userCredential) => {

            const user = userCredential.user;
            updateUserProfile(
               params.email, 
               params.firstname, 
               params.lastname,
               params.scholl,
               params.district,
               params.contact,
               params.faculty,
               params.type,
               params.avatar)

            const userInfomation = {
               uid: user.uid,
               firstname: params.firstname,
               lastname: params.lastname,
               email: user.email,
               school: null,
               district: null,
               contact: null,
               faculty: null,
               type: params.type,
               accessToken: user.accessToken,
               avatar: null,
            }
            context.setUserInformation(userInfomation)

            setIsProcess(false);
            router.push('/main')
            return;
         })
         .catch((error) => {
            console.log('error', error.code, error.message)
            setErrorMessage(getErrorMessage(error.code, error.message))
            setIsProcess(false);
            return;
         });

   }

   

   const updateUserProfile = async function (email, firstname, lastname, school, district, contact, faculty, type, avatar) {
      const auth = getAuth();
      if (!auth.currentUser) {
         return
      }

      const id = auth.currentUser.uid;
      console.log('id', id)

      const data = {
         email: email,
         firstname: firstname,
         lastname: lastname,
         school: school,
         district: district,
         contact: contact,
         faculty: faculty,
         type: type,
         avatar: avatar
      }

      const userRef = doc(db, "users", id);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
         await setDoc(doc(db, "users", id), data);
      }
      else {
         await updateDoc(userRef, data);
      }
      
   }

   function nextPage() {
      console.log('next')
      setIsNextTab(true)
   }

   function prevPage() {
      console.log('prev')
      setIsNextTab(false)
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
            <AlertMessage key="danger" variant="danger" onclose={ () => setErrorMessage("")}>
               {errorMessage}
            </AlertMessage>
            : <></>
         }

         { infoMessage !== '' ? 
            <AlertMessage key="info" variant="info" onclose={ () => setInfoMessage("")}>
               { infoMessage }
            </AlertMessage>
            : <></>
         }
     
         <div style={{ height: size.height, width: '100%' }} className={ styles.background }>
            <LinkMenu />

            <form onSubmit={ registerWithEmailPassword }>

               <div style={{
                  display: 'flex',
                  justifyContent: 'right',
                  padding: 0,
                  margin: 0
               }}>
                  <div>
                     <img src="/images/overlay-left.png"/>
                  </div>
                  <div style={{
                     paddingTop: '50px',
                     paddingBottom: '50px',
                     width: '55em',
                     height: size.height,
                     textAlign: 'center',
                     background: 'rgba(255,255,255,1)'
                  }}>
                     
                     <div style={{ 
                           display: 'flex',
                           justifyContent: 'right',
                        }}>
                        <img src="/images/tab_signup.png" height="50px" />
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
                        

                        <div style={{ display: !isNextTab ? "block": "none" }}>
                        
                           <div className={ styles.inputitem }>
                              <InputGroup className="mb-12">
                                 <FormControl
                                    ref={firstnameRef}
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                 />
                              </InputGroup>
                           </div>

                           <div className={ styles.inputitem }>
                              <InputGroup className="mb-12">
                                 <FormControl
                                    ref={lastnameRef}
                                    placeholder="Lastname"
                                    aria-label="Lastname"
                                    aria-describedby="basic-addon1"
                                 />
                              </InputGroup>
                           </div>

                           <div className={ styles.inputitem }>
                              <InputGroup className="mb-12">
                                 <FormControl
                                    ref={schoolRef}
                                    placeholder="School"
                                    aria-label="School"
                                    aria-describedby="basic-addon1"
                                 />
                              </InputGroup>
                           </div>

                           <div className={ styles.inputitem }>
                              <InputGroup className="mb-12">
                                 <FormControl
                                    ref={districtRef}
                                    placeholder="District"
                                    aria-label="District"
                                    aria-describedby="basic-addon1"
                                 />
                              </InputGroup>
                           </div>

                           <div className={ styles.inputitem }>
                              <InputGroup className="mb-12">
                                 <FormControl
                                    ref={contactRef}
                                    placeholder="Contact"
                                    aria-label="Contact"
                                    aria-describedby="basic-addon1"
                                 />
                              </InputGroup>
                           </div>

                           <div className={ styles.inputitem }>
                              <InputGroup className="mb-12">
                                 <FormControl
                                    ref={facultyRef}
                                    placeholder="Faculty"
                                    aria-label="Faculty"
                                    aria-describedby="basic-addon1"
                                 />
                              </InputGroup>
                           </div>

                           <div style={{ marginTop: "40px" }}>
                              <Button style={{ 
                                 background: "url('/images/signup_button.png') no-repeat top left",
                                 backgroundSize: "100% 100%",
                                 border: "none",
                                 padding: "4px 8px",
                                 width: "140px",
                                 height: "40px"
                              }}
                                 onClick={ () => nextPage() }
                                 type="button"
                              ></Button>
                           </div>

                           </div>
                        
                           <div style={{ display: !isNextTab ? "none": "block" }}>
                              <div className={ styles.inputitem }>
                                 <InputGroup className="mb-12">
                                    <FormControl
                                       ref={emailRef}
                                       placeholder="Email Address"
                                       aria-label="Email Address"
                                       aria-describedby="basic-addon1"
                                       autoComplete='off'
                                    />
                                 </InputGroup>
                              </div>
                              <div className={ styles.inputitem }>
                                 <InputGroup className="mb-12">
                                    <FormControl
                                       ref={passwordRef}
                                       type="password"
                                       placeholder="Password"
                                       aria-label="Password"
                                       aria-describedby="basic-addon1"
                                       autoComplete='off'
                                    />
                                 </InputGroup>
                              </div>

                              <div className={ styles.inputitem }>
                                 <InputGroup className="mb-12">
                                    <FormControl
                                       ref={confirmPasswordRef}
                                       type="password"
                                       placeholder="Confirm Password"
                                       aria-label="Confirm Password"
                                       aria-describedby="basic-addon1"
                                    />
                                 </InputGroup>
                              </div>


                              <div style={{ marginTop: "40px" }}>
                                 <Button style={{ 
                                    background: "url('/images/signup_button.png') no-repeat top left",
                                    backgroundSize: "100% 100%",
                                    border: "none",
                                    padding: "4px 8px",
                                    width: "140px",
                                    height: "40px"
                                 }}
                                    type="submit"
                                    disabled={isProcess}
                                 ></Button>
                              </div>

                              <div style={{ marginTop: "40px" }}>
                                 <Button style={{ 
                                    background: "url('/images/signup_button.png') no-repeat top left",
                                    backgroundSize: "100% 100%",
                                    border: "none",
                                    padding: "4px 8px",
                                    width: "140px",
                                    height: "40px"
                                 }}
                                    onClick={ () => prevPage() }
                                    type="button"
                                 ></Button>
                              </div>

                           </div>
                        
                     </div>

                  </div>
               </div>

            </form>
         </div>

      </>
   )
}