import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { useAppContext } from '../app/state';
import {redirectToLink} from '../utils/helpers'
import LinkMenu from '../components/linkmenu';

export default function Home() {
  const context = useAppContext()
  const router = useRouter()
  const size = useWindowSize();

  function directLogin() {
    const userInfomation = {
      uid: '1',
      displayname: 'test name',
      username: 'mockup',
      email: 'test@test.com',
      accessToken: '',
    }
    context.setUserInformation(userInfomation)
    console.log('user', userInfomation);
    router.push('/main')
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
    <div style={{ height: size.height }} className={ styles.background }>
      <LinkMenu></LinkMenu>

      <div className={ styles.buttonlist }>
        <input type="button" className={ styles.btngetstart } value="Get Started" onClick={ () => router.push('/login') }></input>
      </div>

    </div>
  )
}
