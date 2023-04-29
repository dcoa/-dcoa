
import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "./firebase";

export const getGeneralData = async () => {
    const candidatesCol = collection(FirebaseDB, 'general')
    const candidatesSnapshot = await getDocs(candidatesCol)
    const candidatesList = candidatesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return candidatesList
}