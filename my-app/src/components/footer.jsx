
import seguridad from "../img/seguridad.png";
import codigoqr from "../img/codigo-qr.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import twitter from "../img/tw.png";

import'./footer.css'

export default function Footer() {
    return (
    <>
        <div className="footer">
            <div className="footer-container">
                <h2>Pufi</h2>
                <div className="footer-links">
                    <p>Pufi Rain</p>
                    <p>Pufi Puff</p>
                    <p>Pufi Cart</p>
                    <p>Pufi Nap</p>
                </div>
        <div className="contacto">
            <p>Contacto</p>
            <p>Ayuda</p>
            <p>Como comprar</p>
            <p>Terminos {'&'} Condiciones</p>
        </div>
        <div className="otro">
            <p>COMPRA 100% SEGURA</p>
            <div>
                        <img src={codigoqr} alt='qr'></img>
                        <img src={seguridad} alt='safe'></img>
                        <p>COMPRÁ CON LA GARANTIA DE PUFI</p>
                    </div>
        </div>
        <div className="redes">
            <p>Siguenos en </p>
            <img src={facebook} alt='qr'></img>
                        <img src={instagram} alt='safe'></img>
                        <img src={twitter} alt='safe'></img>
            
        </div>

            </div>
        </div>




                

    </>

    )
}
