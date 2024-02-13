import {initializeApp} from 'firebase/app'
import 'firebase/auth'
import {apiKey} from './keys/keys'




const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.STORAGE_BUCKET,
  appId: process.env.APP_ID
};
const app = initializeApp(firebaseConfig)

export default app