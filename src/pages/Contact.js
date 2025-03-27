import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Contact.css';

export default function Contact()
{
    return (
        <>
            <title> Contact - Laptop Borrowing System </title>

            <Header/>

            <main class="contact">
                <h1> Contact Us </h1>
                <p>Have any questions? Feel free to reach out to us.</p>

                <div class="contact-info">
                    <p><strong>Email:</strong> citulaptopborrowingsystem@gmail.com</p>
                    <p><strong>Phone:</strong> +63 912 345 6789</p>
                    <p><strong>Address:</strong> CIT-U, N. Bacalso Ave, Cebu City, Philippines</p>
                </div>

                <form class="contact-form">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required=""/>
            
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required=""/>
            
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required=""></textarea>
            
                    <button type="submit">Send Message</button>
                </form>
            </main>

            <Footer/>
        </>
    );
}