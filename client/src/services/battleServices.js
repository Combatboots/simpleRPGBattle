import axios from "axios"

const http = axios.create({
    "baseURL": "http://localhost:8004/api/RPGBattle"
})

export const BattleService = {

    "getAllChars": async () => {
        // eslint-disable-next-line no-useless-catch
        try{
            const res = await http.get(`/`)
            return res.data
        } catch(err) {throw err}
    },

    "getOneChar": async (_id) => {
        // eslint-disable-next-line no-useless-catch
        try{
            const res = await http.get(`/${_id}`)
            return res.data
        } catch(err) {throw err}
    },

    "createChar": async (charData) => {
        // eslint-disable-next-line no-useless-catch
        try{
            const res = await http.post(`/create`, charData)
            return res.data
        } catch(err) {throw err}
    },

    "updateChar": async (_id, charData) => {
        // eslint-disable-next-line no-useless-catch
        try{
            const res = await http.patch(`/${_id}/edit`, charData)
            return res.data
        } catch(err) {throw err}
    },
    
    "deleteChar": async (_id) => {
        // eslint-disable-next-line no-useless-catch
        try{
            const res = await http.delete(`/${_id}`)
            return res.data
        } catch(err) {throw err}
    }
}