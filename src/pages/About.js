import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/About.css';
import laptop_about from '../assets/images/laptop_about.jpg'

export default function About()
{
    return (
        <>
            <title> About - Laptop Borrowing System </title>

            <Header/>

            <main>
                <section class="hero">
                    <img src={laptop_about} alt="Student using laptop"/>
                </section>

                <section class="about">
                    <h1>About Us</h1>
                    <p>
                        Welcome to the Laptop Borrowing System, an innovative platform designed to provide students with 
                        easy and efficient access to laptops for academic use.
                    </p>
                    <p>
                        Developed by the College of Computer Studies, our system aims to streamline the borrowing process, 
                        ensuring that students have the necessary tools to enhance their learning experience.
                    </p>
                    <button>See More</button>
                </section>
            </main>

            <Footer/>
        </>
    );
}