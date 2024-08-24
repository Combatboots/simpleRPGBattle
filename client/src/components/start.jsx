import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { BattleService } from '../services/battleServices.js'

export const Start = () => {

    const [charList, setCharList] = useState([])

    useEffect( () => {
        BattleService.getAllChars()
            .then( res => setCharList(res))
    }, [])

    return (
        <>
            <h1 style={{color: "white", marginLeft: "40%", textShadow: "2px 2px 4px black", fontSize: "3vw"}}>Simple RPG Battle</h1>
            <table style={{marginLeft: "20%", width: "60%",}}>
                <thead style={{color: 'white', textShadow: "2px 2px 4px black", background: 'darkgrey', fontSize: "2vw"}}>
                    <tr>
                        <th>Character</th>
                        <th>Start Battle</th>
                        <th>Edit Character</th>
                    </tr>
                </thead>
                <tbody style={{color: "white", textShadow: "2px 2px 4px black", fontSize: "2vw"}}>
                    {
                        charList.map((char, index) => (
                            <tr key = {index}>
                                <td> <Link to = {`/RPGBattle/${char._id}`} style={{color: "white", textShadow: "2px 2px 4px black"}} > {char.name} </Link> </td>
                                <td> <Link to = {`/RPGBattle/${char._id}/battle`} style={{color: "white", textShadow: "2px 2px 4px black"}} > Start </Link></td>
                                <td><Link to = {`/RPGBattle/${char._id}/edit`} style={{color: "white", textShadow: "2px 2px 4px black"}} > Update </Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                <button className='d-flex justify-content-center align-content-center mx-auto'><Link to = {`/RPGBattle/create`} style={{color: "white", textShadow: "2px 2px 4px black", width: "8vw", height: "4vw", fontSize: "2vw"}} > Create</Link></button>
        </>
    )
}