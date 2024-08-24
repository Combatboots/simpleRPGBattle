/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BattleService } from "../services/battleServices"
import { Link } from 'react-router-dom'
import Knight from "../images/PNG/Knight/Idle/idle1.png"
import Mage from "../images/PNG/Mage/Idle/idle1.png"
import Rogue from "../images/PNG/Rogue/Idle/idle1.png"

export const View = () => {

    const [char, setChar] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        BattleService.getOneChar(id)
            .then((res) => {
                console.log(res);
                setChar(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const removeChar =(id) => {
        BattleService.deleteChar(id)
            .then((res) => {
                let removed = char.filter((char, index) => {
                    char._id !== removed
                })
                setChar(removed)
            })
            navigate(`/RPGBattle`)
    }

    return (
    <>
        <div style={{ 
                textAlign: "center", 
                width: "75%",
                marginLeft: '15%',}}>
            <div className="d-flex justify-content-between">
                    <h2 style={{color: "white", textShadow: "2px 2px 4px black", fontSize: "3vw"}}> {char.name} </h2>
                    <button style={{width: "10vw", height: "3vw", textShadow: "2px 2px 4px black"}} >
                        <Link to = {`/RPGBattle`} style={{color: "white"}}> Home </Link>
                    </button>
            </div>
            <div className="d-flex justify-content-center">
                {char.warrior == true ? <img src={Knight} alt="Warrior" style={{height: "20vw"}}/> : ""}
                {char.mage == true ? <img src={Mage} alt="Mage" style={{height: "20vw"}}/> : ""}
                {char.rogue == true ? <img src={Rogue} alt="Rogue" style={{height: "20vw"}}/> : "" }
            </div>
            <div className="d-flex justify-content-center flex-column w-25 mx-auto p-3">
                <button 
                    className='m-5'
                    onClick={() => removeChar(char._id)} 
                    style={{ width: "10vw", height: "3vw", textShadow: "2px 2px 4px black"}}
                    >
                        Remove
                </button>
                <button style={{width: "10vw", height: "3vw", textShadow: "2px 2px 4px black"}} className='m-5'>
                    <Link to = {`/RPGBattle/${char._id}/edit`} style={{color: "white"}} > Edit </Link>
                </button>
            </div>
        </div>
    </>
    )
}