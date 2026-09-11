import "./style.css"
import { useState } from 'react'
import { FaHeart, FaHeartBroken } from "react-icons/fa";

export default function Produto(){
    const [favorito, setFavorito] = useState(false)

    function switchFavorito(){
        setFavorito(!favorito)
    }
    return(
        <div className="container">
            <div className="favorito" onClick={switchFavorito}>
                {favorito ? <FaHeartBroken/> : <FaHeart/>}
            </div>
            <div className="preco">

            </div>
        </div>
    )
}