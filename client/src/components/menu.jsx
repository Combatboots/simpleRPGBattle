/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BattleService } from "../services/battleServices"

export const Menu = () => {

    const [char, setChar] = useState({})
    const {id} = useParams()

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


    return (
        <>
            <div className="d-flex justify-content-center flex-column w-25 mx-auto p-5">
                <button className='m-5'><Link to = {`/RPGBattle`} style={{color: "white", textShadow: "2px 2px 4px black"}}> Quit </Link> </button>
            </div>
        </>
    )
}