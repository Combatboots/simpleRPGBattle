import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BattleService } from "../services/battleServices"
import { Link } from 'react-router-dom'
import Knight from "../images/PNG/Knight/Idle/idle1.png"
import Mage from "../images/PNG/Mage/Idle/idle1.png"
import Rogue from "../images/PNG/Rogue/Idle/idle1.png"

export const Edit = () => {

    const {id} = useParams()
    const [editData, setEditData] =useState({
        "charData": {
            "name": "",
            "warrior": false,
            "mage": false,
            "rogue": false,
        },
        "errors": {}
    })
    const navigate = useNavigate()

    useEffect(() => {
        BattleService.getOneChar(id)
        .then((res) => ({...res, "charData": { ...res.charData, charData: res}}))
        
    }, [id])

    const handleCharUpdate = (e) => {
        const {name, value} = e.target
        setEditData((prevCharData)=> ({...prevCharData, "charData": { ...prevCharData.charData, [name]: value}}))
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()

        BattleService.updateChar(id, editData.charData)

        .then (() => {
            setEditData({
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
        .catch((err) => {setEditData((prevFormData) => ({...prevFormData, "errors": err.response.data.errors}))})
    }

    return (
        <form onSubmit={(e) => handleEditSubmit(e)} 
            style={{ 
                textAlign: "center", 
                width: "75%",
                marginLeft: '15%',}}>
            <div className="d-flex justify-content-between">
                <h2 style={{color: "white", textShadow: "2px 2px 4px black", fontSize: "3vw"}}>Edit Character </h2>
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
                                {editData.errors.name && <p className= "error" style={{color: "red"}}> {editData.errors.name.message }</p>} 
                                <input
                                    type="text" 
                                    className="form-control" 
                                    name="name" 
                                    id="name"
                                    value={editData.charData.name} 
                                    onChange={(e) => handleCharUpdate(e)}
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
                                        value={!editData.charData.warrior} 
                                        onChange={(e) => handleCharUpdate(e)}
                                    />
                                    <img src={Knight} alt="Knight" style={{height: "20vw"}}/>
                                    <input
                                        type="checkbox" 
                                        className="" 
                                        name="mage" 
                                        id="mage"
                                        value={!editData.charData.mage} 
                                        onChange={(e) => handleCharUpdate(e)}
                                    />
                                    <img src={Mage} alt="Mage" style={{height: "20vw"}} />
                                    <input
                                        type="checkbox" 
                                        className="" 
                                        name="rogue" 
                                        id="rogue"
                                        value={!editData.charData.rogue} 
                                        onChange={(e) => handleCharUpdate(e)}
                                        style={{size: "2vw"}}
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
                    Update
            </button>
        </form>
    )
}