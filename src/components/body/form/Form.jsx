import React, {Component} from 'react';
import './Form.scss';

class Form extends Component {
render() {
    return (

            <div id="form1">
                <form>
                    <h3>Задайте нам запитання</h3>
                    <input maxLength="25" placeholder="Введіть Ваше імя" className="field"/>
                    <input maxLength="25" placeholder="Введіть Вашу фамілію" className="field"/>
                    <input type="email" maxLength="70" name="e-mail" placeholder="Введіть Ваш email"
                           className="field"/>
                    <textarea placeholder="Напишіть нам" className="textarea"/>
                    <p>Хотіли б Ви получити розсилку:</p>
                    <div id="buttons1">
                        <input type="radio" name="selector1" id="every-week"/><label
                        htmlFor="every-week">Так,
                        хочу</label>
                        <input type="radio" name="selector1" id="every-month"/><label
                        htmlFor="every-month">Ні,
                        не хочу</label>
                    </div>
                    <button type="submit">Відправити</button>
                </form>


        </div>
    )
}
}

export default Form;
