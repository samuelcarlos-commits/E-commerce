import "./style.css"
import { useState } from "react"
import { FaHeart, FaHeartBroken } from "react-icons/fa"

export default function Produto({ produto }) {
    const [favorito, setFavorito] = useState(false)
    const { nome, descricao, preco, imagem } = produto

    function switchFavorito() {
        setFavorito(!favorito)
    }

    return (
        <div className="container">
            <div className="imagem">
                <img src={imagem} alt={nome} />
            </div>

            <h3>{nome}</h3>
            <p>{descricao}</p>

            <div className="preco">
                <p>{preco}</p>
            </div>

            <div className="favorito" onClick={switchFavorito}>
                {favorito ? <FaHeartBroken /> : <FaHeart />}
            </div>
        </div>
    )
}