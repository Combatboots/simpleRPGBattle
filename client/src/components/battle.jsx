import { useEffect, useState } from "react"
import { BattleService } from "../services/battleServices"
import {  useNavigate, useParams } from "react-router-dom"
import Knight from "../images/PNG/Knight/Idle/idle1.png"
import Mage from "../images/PNG/Mage/Idle/idle1.png"
import Rogue from "../images/PNG/Rogue/Idle/idle1.png"
import Boss from "../images/Featured_Executioner.png"
import { Link } from 'react-router-dom'

export const Battle = () => {

    const [char, setChar] = useState({})
    const {id} = useParams()
    const playerMaxHp = 100
    const maxBossHp = 200
    const [playerHp, setPlayerHp] = useState(playerMaxHp)
    const playerBar = (playerHp/playerMaxHp) * 100
    const [bossHp, setBossHp] = useState(maxBossHp)
    const bossBar = (bossHp/maxBossHp) * 100
    const navigate = useNavigate()
    const [count, setCount] = useState(0)

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

    const endGame = () => {
        if(playerHp == 0){
            navigate(`/RPGBattle/gameOver`)
        } else if(bossHp == 0){
            navigate(`/RPGBattle/youWin`)
        }
    }

    const normalizeHp = () => {
        if(playerHp > 100){
            setPlayerHp(100)
        }
    }


    return (
    <>
        <div>
            <button style={{width: "7vw", height: "3vw"}}> <Link to = {`/RPGBattle/menu`} style={{color: "white", textShadow: "2px 2px 4px black"}}>Menu</Link></button>
            <h1 style={{color: "white", marginLeft: "40%", textShadow: "2px 2px 4px black", fontSize: "3vw"}}>Simple RPG Battle</h1>
            <div className="mx-auto d-flex justify-space-around justify-content-center">
                <div style={{marginRight: "40%"}}>
                    <h3 style={{color: "white", textShadow: "2px 2px 4px black"}}>{char.name}</h3>
                    <div className="health-bar">
                        <div className="bar" style={{ width: `${playerBar}%` }}></div>
                        <div className="hit" style={{ width: `${0}%` }}></div>
                        <div>
                            {playerHp} / {playerMaxHp}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{color: "white", textShadow: "2px 2px 4px black"}}>Big Bad Boss Guy</h3>
                    <div className="health-bar">
                        <div className="bar" style={{ width: `${bossBar}%` }}></div>
                        <div className="hit" style={{ width: `${0}%` }}></div>
                        <div>
                            {bossHp} / {maxBossHp}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto d-flex justify-space-around justify-content-center">
                {/* <img src={Mage} alt="Knight" style={{height: "20vw", marginTop: "15vw"}} className="mx-auto"/> */}
                {char.warrior == true ? <img src={Knight} alt="Warrior" style={{height: "20vw", marginTop: "15vw"}}/> : ""}
                {char.mage == true ? <img src={Mage} alt="Mage" style={{height: "20vw", marginTop: "15vw"}}/> : ""}
                {char.rogue == true ? <img src={Rogue} alt="Rogue" style={{height: "20vw", marginTop: "15vw"}}/> : "" }
                <img src={Boss} alt="Boss" style={{height: "40vw"}}/>
            </div>
            <div className="d-flex justify-space-between justify-content-center">
                <div>
                    <button 
                    className="damage random"
                    style={{width: "10vw", height: "3vw", textShadow: "2px 2px 4px black", marginLeft: "2vw", maringRight: "5vw"}}
                    onClick={() => {
                        let damage = Math.floor(Math.random(1-2) * playerMaxHp);
                        setBossHp(Math.max(0, bossHp - damage))
                        let hit = Math.floor(Math.random(10-15) * 60);
                        setPlayerHp(Math.max(0, playerHp - hit))
                        normalizeHp()
                        setCount(count + 1)
                        endGame()
                    }}
                    >Attack</button>
                    
                </div>
                <div>
                    <button 
                    disabled={count < 2}
                    style={{width: "10vw", height: "3vw", textShadow: "2px 2px 4px black"}}
                    onClick={() => {
                        setCount(0)
                        let damage = Math.floor(Math.random(9-10) * playerMaxHp*2);
                        setBossHp(Math.max(0, bossHp - damage))
                        let hit = Math.floor(Math.random(10-15) * 60);
                        setPlayerHp(Math.max(0, playerHp - hit))
                        normalizeHp()
                        endGame()
                    }}
                    >Special</button>
                </div>
                <div>
                    <button 
                    style={{width: "10vw", height: "3vw", textShadow: "2px 2px 4px black"}}
                    onClick={() => {
                        let heal = Math.floor(Math.random(25-50) * playerMaxHp);
                        let hit = Math.floor(Math.random(10-15) * 75);
                        setPlayerHp(Math.max(0, (playerHp +heal) - hit))
                        normalizeHp()
                        endGame()
                    }}
                    >Heal</button>
                </div>
            </div>

        </div>
    </>
    )
}