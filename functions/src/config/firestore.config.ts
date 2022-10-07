import * as admin from 'firebase-admin';
import { myCensorshipList } from '../utils/helpers';

var serviceAccount = require("C:/Users/amastilovic/Desktop/NOTES/week5/day3 - Serverless/firebase-serverless-ts/functions/src/config/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const dbSeeder: any[] = [];

myCensorshipList.forEach(obj => {
  dbSeeder.push(admin.firestore().collection('censored').doc('mydoc').set(obj));
})

Promise.all(dbSeeder);

export { db };
