import { useRouter } from 'next/router'
import { useAppContext } from '../app/state'
import styles from '../styles/Home.module.css'
import { redirectToLink } from '../utils/helpers'

export default function LinkMenu() {
   const router = useRouter()
   const context = useAppContext()

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


   return (
      <div className={ styles.socialbar }>
        <span className={ styles.socialbtn } onClick={ () => redirectToLink('ig') }>
          <img src="/images/icon_ig.png" width="45" alt="instgram"/>
        </span>
        <span className={ styles.socialbtn } onClick={ () => redirectToLink('fb') }>
          <img src="/images/icon_fb.png" width="45" alt="facebook"/>
        </span>
        <span className={ styles.socialbtn } onClick={ () => redirectToLink('tw') }>
          <img src="/images/icon_tw.png" width="45" alt="twitter"/>
        </span>
        <span className={ styles.socialbtn } onClick={ () => directLogin() }>
          <img src="/images/controls/hall.png" width="45" alt="Diamond"/>
        </span>
      </div>
   )
}