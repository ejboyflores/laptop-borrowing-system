import '../assets/css/Header.css'
import citu_logo from '../assets/images/citu_logo.png';

export default function Header()
{
    return (
        <header>
            <img src={citu_logo} alt="CIT - U Logo"/>

            <div id="title">
				<div id="lbs"> LAPTOP BORROWING SYSTEM </div>
				<div id="ccs"> COLLEGE OF COMPUTER STUDIES </div>
		    </div>

            <nav>
				<ul>
					<li> <a href="home">HOME</a> </li>
					<li> <a href="about">ABOUT</a> </li>
					<li> <a href="contact">CONTACT</a> </li>
					<li> <a href="login">LOGIN</a> </li>
					<li> <a href="register">REGISTER</a> </li>
				</ul>
			</nav>
        </header>
    );
}