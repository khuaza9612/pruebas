import React from 'react'
import correo from "../img/flecha-correcta.png";
import { useForm } from "@formspree/react";

export default function Subscription() {
    const [state, handleSubmit] = useForm("xbjqbgko");
    if (state.submitting) {
        return <p>Gracias por unirte a nuestra platafotma</p>
    }
   
  return (
    <div>
         <form
                action="https://formspree.io/f/xbjqbgko"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className="">
                    <input
                        id="email"
                        type="email"
                        className="inpt-newsletter"
                        placeholder="Ingresa tu email"
                        name="email"
                        required
                    ></input>

                    <button className="btn-newsletter" type="submit" disabled={state.submitting}>
                        <img src={correo} alt='flecha'></img>
                    </button>
                </div>
            </form>
    </div>
  )
}