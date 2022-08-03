//! this is a helper file that will contain a bunch of functions that doesn't match an individual component but will be re used through out the project
import axios from 'axios';
export const boardDefault = [["","","","",""],
                             ["","","","",""],
                             ["","","","",""],
                             ["","","","",""],
                             ["","","","",""],
                             ["","","","",""]]
//! word X attempt

export const genWord = async ()=>{
    try {
        const res = await axios.get('/getWord');
        return res.data.word
    } catch (err) {
        
    }

}