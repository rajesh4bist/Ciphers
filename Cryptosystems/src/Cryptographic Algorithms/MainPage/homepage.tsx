import './homepage.css';
import { Link } from 'react-router';

export const HomePage = (() => {

    return (
        <>
            <title>Cryptographic Algorithms</title>
            <h1 id="select-algorithm">Select</h1>
            <div className="algorithm-menu">
                <Link to="/AES">
                    <div className="AES menu-item">
                        AES
                    </div>
                </Link>

                <Link to="/RSA">
                    <div className="RSA menu-item">
                        RSA
                    </div>
                </Link>

                <Link to="/Elgamal">
                    <div className="Elgamal menu-item">
                        Elgamal
                    </div>
                </Link>

                {/* <div className="RSA menu-item">
                    <Link to="/RSA">RSA</Link>
                </div>
                <div className="Elgamal menu-item">
                    <Link to="/Elgamal"> Elagamal</Link>
                </div> */}
            </div>
        </>

    )
})