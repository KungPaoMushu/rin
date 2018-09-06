//db.js

import * as firebase from 'firebase'; 


import ApiKeys from './constants/ApiKeys';


let app = firebase.initializeApp(ApiKeys.FirebaseConfig);
export const db = app.database(); 



