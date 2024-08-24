import { Link } from "react-router-dom"


export const GameOver = () => {
    return (
        <>
            <div className="d-flex justify-content-center flex-column w-25 mx-auto p-5">
                <h1 style={{color: "white", textShadow: "2px 2px 4px black", fontSize: "3vw"}}> Game Over </h1>
                <button style={{width: "10vw", height: "4vw", textShadow: "2px 2px 4px black", marginLeft: "2vw", maringRight: "5vw", fontSize: "1.5vw"}}><Link to = {`/RPGBattle`} style={{color: "white"}}> Try Again? </Link></button>
            </div>
        </>

    )
}