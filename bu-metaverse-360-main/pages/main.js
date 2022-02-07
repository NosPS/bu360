import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAppContext } from '../app/state'


export default function Home() {
  const router = useRouter()
  const context = useAppContext();
  const size = useWindowSize()

  

  const currentUser = context.state.userInformation;
  console.log('currentUser', currentUser)

  const logout = async (e) => {
    e.preventDefault();
    context.setUserInformation(null)
    currentUser = null;
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
    <div>

      <div style={{
        display: 'flex',
        justifyContent: 'right',
        margin: '0px 0',
        height: '100%',
      }}>
        {/* { currentUser === null ? 
          <>
            <Button href="/auth/register">Register</Button>&nbsp;
            <Button href="/auth/login">Login</Button>
          </>
          :
          <>
            <h3>Welcome back</h3>
            &nbsp;
            <Button onClick={ logout }>Logout</Button>
          </>
          
        } */}

        
      </div>
      
      <iframe id="iframe" src="/index.html" width="100%" height={ size.height }></iframe>
    </div>
  )
}
