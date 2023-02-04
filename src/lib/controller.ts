import { addDoc, collection, deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";
import { AddHotelType } from "../types/hotel";
import { app } from "./firebase"

export const firestore = getFirestore(app);

export const hotelsCollection = collection(firestore, "hotels");

//Add new hotel
export const addHotel = async (hotelData: AddHotelType) =>{
    const newHotel = await addDoc(hotelsCollection, {...hotelData})
}

//Delete hotel
export const deleteHotel = async(id: string | undefined, navigate: NavigateFunction) =>{
    const document = doc(firestore, `hotels/${id}`);
    await deleteDoc(document);
    navigate("/");
}


//Edit hotel description
export const updateHotel = async(id: string | undefined, docData: any) => {
    const getHotel = doc(firestore, `hotels/${id}`);
    await setDoc(getHotel, docData, {merge: true});
}