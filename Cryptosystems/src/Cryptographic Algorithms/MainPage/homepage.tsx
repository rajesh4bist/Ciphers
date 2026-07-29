import './homepage.css';

export const HomePage = (() => {

    return (
        <>
            <title>Cryptographic Algorithms</title>
            <h1 id="select-algorithm">Select</h1>
            <div className="algorithm-menu">
                <div className="AES menu-item">
                    <a href="AES">AES</a>
                </div>
                <div className="RSA menu-item">
                    <a href="RSA">RSA</a>
                </div>
                <div className="Elgamal menu-item">
                    <a href="elgamal"> Elagamal</a>
                </div>
            </div>
        </>

    )
})