import { addDoc, collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { financesTypes } from "../types/financesTypes";

const collectionName = 'movimientos'

const saveMovement = (data) => {
    return {
        type: financesTypes.SAVE_MOVEMENT,
        payload: data
    }
}
const toggleLoading = ()=>{
    return{
        type: financesTypes.TOGGLE_LOADING
    }
}

export const saveMovementAsync = (movement) => {
    return async (dispatch) => {
        dispatch(toggleLoading())
        try {
            const movementsCollection = collection(dataBase, collectionName);
            const doc = await addDoc(movementsCollection, movement);
            dispatch(saveMovement({
                finance: { ...movement, id: doc.id },
                error: {
                    status: false,
                    message: ''
                }
            }));
            dispatch(toggleLoading())
        } catch (error) {
            dispatch(saveMovement({ 
                finance: {}, 
                error: { status: true, message: error.message } 
            }));
            dispatch(toggleLoading())
        }
    }
}

    const getDoc = (list) =>{
        return{
            type: financesTypes.GET_DOC,
            payload: list
        }
    }

export const getDocAsync = () =>{
    return async(dispatch) =>{
        try {
            const movementsCollection = collection(dataBase, collectionName);
            const docs = await getDocs(movementsCollection)
            const list = []
            docs.forEach((doc)=> {
                list.push({id: doc.id, ...doc.data()})
            })
            dispatch(getDoc(list))
        } catch (error) {
            dispatch(getDoc([]))
            console.log(error)
        }
    }
}
