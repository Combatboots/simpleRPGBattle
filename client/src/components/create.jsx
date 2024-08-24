import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BattleService } from "../services/battleServices"
import { Link } from 'react-router-dom'
import Knight from "../images/PNG/Knight/Idle/idle1.png"
import Mage from "../images/PNG/Mage/Idle/idle1.png"
import Rogue from "../images/PNG/Rogue/Idle/idle1.png"


export const CreateChar = ()=> {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        "charData": {
            "name": "",
            "class": "",
        },
        "errors": {}
    })

    const handleCharInput = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setFormData((prevCharData)=> ({...prevCharData, "charData": { ...prevCharData.charData, [name]: value}}))
    }

    const handleCharSubmit = (e) => {
        e.preventDefault()
        BattleService.createChar(formData.charData)
        .then (() => {
            setFormData({
                "charData": {
                    "name": "",
                    "warrior": false,
                    "mage": false,
                    "rogue": false,
                },
                "errors": {}
            }),
            navigate(`/RPGBattle`)
        })
        .catch((err) => {setFormData((prevFormData) => ({...prevFormData, "errors": err.response.data.errors}))})
    }

    return (
        <form onSubmit={(e) => handleCharSubmit(e)} 
            style={{ 
                textAlign: "center", 
                width: "75%",
                marginLeft: '15%',}}>
            <div className="d-flex justify-content-between">
                <h2 style={{color: "white", textShadow: "2px 2px 4px black", fontSize: "3vw"}}>Create Character </h2>
                <button style={{width: "10vw", height: "3vw", textShadow: "2px 2px 4px black"}} >
                    <Link to = {`/RPGBattle`} style={{color: "white"}}> Home </Link>
                </button>
            </div>
            <div className="d-flex justify-space-around justify-content-center">
                <div className="d-flex justify-space-around justify-content-center">
                    <div style={{marginRight: 30}}>
                        <div className="mb-3" style={{marginTop: 30}}>
                            <label className="form-label" style={{color: "white", textShadow: "2px 2px 4px black", fontSize: "3vw"}}>
                                Name: 
                                {formData.errors.name && <p className= "error" style={{color: "red"}}> {formData.errors.name.message }</p>} 
                                <input
                                    type="text" 
                                    className="form-control" 
                                    name="name" 
                                    id="name"
                                    value={formData.charData.name} 
                                    onChange={(e) => handleCharInput(e)}
                                />
                            </label>
                        </div>
                        <div className="mb-3">
                        <label className="" style={{color: "white", textShadow: "2px 2px 4px black", fontSize: "3vw"}}>
                                Class: 
                                <div>
                                    <input
                                        type="checkbox" 
                                        className="" 
                                        name="warrior" 
                                        id="warrior"
                                        value={!formData.charData.warrior} 
                                        onChange={(e) => handleCharInput(e)}
                                    />
                                    <img src={Knight} alt="Knight" style={{height: "20vw"}}/>
                                    <input
                                        type="checkbox" 
                                        className="" 
                                        name="mage" 
                                        id="mage"
                                        value={!formData.charData.mage} 
                                        onChange={(e) => handleCharInput(e)}
                                    />
                                    <img src={Mage} alt="Mage" style={{height: "20vw"}} />
                                    <input
                                        type="checkbox" 
                                        className="" 
                                        name="rogue" 
                                        id="rogue"
                                        value={!formData.charData.rogue} 
                                        onChange={(e) => handleCharInput(e)}
                                    />
                                    <img src={Rogue} alt="Rogue" style={{height: "20vw"}}/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            
            <button
                type="submit" 
                style={{width: "10vw", height: "4vw", textShadow: "2px 2px 4px black", fontSize: "2vw"}}
                >
                    Create
            </button>
        </form>
    )
}