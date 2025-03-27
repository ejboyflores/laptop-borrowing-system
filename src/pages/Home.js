import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Home.css';
import laptop_hero from '../assets/images/laptop_hero.jpg';

export default function Home()
{
    return (
        <>
            <title> Laptop Borrowing System CCS </title>

            <Header/>

            <main>
                <img id="hero" src={laptop_hero} alt="A woman handing someone a laptop"/>
			    <div id="maroon">
				    <h2> WE GOT YOU COVERED </h2>
				    <p>
					    Need a laptop for your next assignment? <br/>
					    <a href="register">Register</a> now and start borrowing!
				    </p>
			    </div>
			    <div id="gold">
                    
			    </div>
            </main>

            <Footer/>
        </>
    );
}