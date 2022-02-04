import logo from '../img/logo.jpg'
import './login.css'
export default function login(){
    return(
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="tittle">Create a ew password</h1>
                <p className="subtittle">Enter a new password for you account</p>
                <form className="form">
                    <label for="password" className="label"></label>
                    <input type="password" id="password" placeholder="*****" className="input input-password"></input>
                    <label for="new-password" className="label"></label>
                    <input type="password" id="new-password" placeholder="*****" className="input input-password"></input>
                    <input type="submit" value="Confirm" className="primary-button login-button"></input>
                </form>
            </div>

        </div>
    );

}