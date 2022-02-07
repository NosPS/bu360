import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import Link from 'next/link';

import { db, app } from "../firebase/clientApp";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { useAppContext } from "../app/state"
import AlertMessage from '../components/alert';
import LinkMenu from '../components/linkmenu';

import dataAvatar from '../public/avatar.json';

export default function AvatarPage() {
   const router = useRouter()
   const context = useAppContext()

   const size = useWindowSize();

   const [isProcess, setIsProcess] = useState(false);
   const [selectedAvatar, setSelectedAvatar] = useState({});

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

   async function hasSelectedAvatar() {

      const auth = getAuth();
      if (!auth.currentUser) {
         return
      }

      const id = auth.currentUser.uid;
      console.log('id', id)

      const userRef = doc(db, "users", id);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
         const data = userSnap.data()
         if (data.avatar !== undefined && data.avatar !== '') {
            router.push('/main')
         }
      } 
   
   }

   function setAvatar(id) {
      const params = dataAvatar.find(s=>s.id == id)
      setSelectedAvatar(params)
   }

   const submitSelectedAvatar = async function(e) {
      e.preventDefault();
      console.log('submitSelectedAvatar')
      setIsProcess(true)

      const auth = getAuth();
      if (!auth.currentUser) {
         return
      }

      const id = auth.currentUser.uid;
      console.log('id', id)

      const userRef = doc(db, "users", id);
      const userSnap = await getDoc(userRef);
      let data = userSnap.data()
      data = {
         ...data,
         avatar: selectedAvatar.id
      }

      if (!userSnap.exists()) {
         await setDoc(doc(db, "users", id), data);
      }
      else {
         await updateDoc(userRef, data);
      }

      router.push('/main')
      setIsProcess(false)
   }

   useEffect(() => {
      hasSelectedAvatar()
      setAvatar(dataAvatar[0].id)
   }, [])

   return (
      <>
         <div style={{ height: size.height, width: '100%' }} className={ styles.background }>
            <LinkMenu />

            <form onSubmit={ submitSelectedAvatar }>

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
                     width: '80em',
                     textAlign: 'center',
                     borderRadius: '25px',
                     background: 'rgba(255,255,255,.8)'
                  }}>
                     
                     <div style={{ 
                           display: 'flex',
                           justifyContent: 'right',
                        }}>
                        <img src="/images/tab_welcome.png" height="50px" />
                     </div>

                     <br/>

                     <div className='row text-left'>
                        <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                           {
                              dataAvatar.map(element => <img key={element.id} src={element.imageUrl} height="150" style={{cursor: 'pointer'}} onClick={()=> setAvatar(element.id)} />)
                           }
                        </div>
                        <div className='col-md-6 col-sm-12 col-xs-12 text-center'>
                           <img src={selectedAvatar.imageUrl} width="400em" />
                        </div>
                        <div className='col-md-6 col-sm-12 col-xs-12 p-5' style={{ textAlign: 'left' }}>
                           <h4>{selectedAvatar.name}</h4>
                           <span>{selectedAvatar.description}</span>
                        </div>
                     </div>
                     

                     <div style={{ 
                           marginTop: '20px', 
                           display: 'flex', 
                           flexDirection: 'column',
                           justifyContent: 'center', 
                           width: '100%',
                           padding: '0 30px'
                        }}>

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

                     </div>
                  </div>
               </div>
            </form>
         </div>

      </>
   )
}