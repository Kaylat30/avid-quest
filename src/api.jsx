import { database} from  './db'
import {getAuth , signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {collection,doc,getDocs,getDoc,} from "firebase/firestore/lite"

// creating user
export async function registerUserWithEmailAndPassword(email, password) {
    const auth = getAuth();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account has been successfully created');
      } catch (error) {
        alert(error.message);
      }
}

// creating user
export async function loginUserWithEmailAndPassword(email, password) {
    const auth = getAuth();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User has been successfully logged in');
      } catch (error) {
        alert(error.message);
      }
}
    
// fetchindg discovery blogs/nature
const discoverCollectionRef = collection(database, "discover")

export async function getDiscovers() {
    const querySnapshot = await getDocs(discoverCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(), 
        id: doc.id
    }))
    return dataArr
}

export async function getDiscover(id) {
    const docRef = doc(database, "discover", id)
    const discoverSnapshot = await getDoc(docRef)
    return {
        ...discoverSnapshot.data(),
        id: discoverSnapshot.id
    }
}

// fetching the team
const teamCollectionRef = collection(database, "team")

export async function getTeam()
{
    const querySnapshot =await getDocs(teamCollectionRef)
    const dataArr = querySnapshot.docs.map(doc =>({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

// fetchindg safaris
const safarisCollectionRef = collection(database, "safari")

export async function getSafaris() {
    const querySnapshot = await getDocs(safarisCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(), 
        id: doc.id,
        date: doc.data().date.toDate()
    }))
    return dataArr
}

export async function getSafari(id) {
    const docRef = doc(database, "safari", id)
    const safariSnapshot = await getDoc(docRef)
    return {
        ...safariSnapshot.data(),
        id: safariSnapshot.id
    }
}

