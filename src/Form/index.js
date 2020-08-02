import React from "react"
import "./style.css"

const Form = () => (
    <form className="form">
        <input className="form__input" autoFocus type="text" placeholder="Co jest do zrobienia?"                className="form__input"/>
            <button className="form__submit ">Dodaj zadanie</button>
    </form>
)

export default Form;