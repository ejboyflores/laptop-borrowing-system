import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Login.css';

export default function Login()
{
    return (
        <>
            <title> Login - Laptop Borrowing System </title>

            <Header/>

            <main>
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="login-box">
                            <h2>Login</h2>
                            <form action="dashboard.html" method="POST">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" required />
 
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" required />
 
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}