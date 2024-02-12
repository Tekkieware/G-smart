import {initializeApp} from 'firebase/app'
import 'firebase/auth'
import { apiKey, appId, authDomain, messagingSenderId, projectId, storageBucket } from "./keys/keys";



const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};
const app = initializeApp(firebaseConfig)

export default app