import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return (
    <footer className="lmj-footer">
        <div className="lmj-footer-content">
            
            {/* Branding */}
            <div className="lmj-footer-brand">
                <h3>Le souffle du jardin 🌿</h3>
                <p>Pour les passionné·e·s de plantes, de nature et de bien-être.</p>
            </div>

            {/* Newsletter */}
            <div className="lmj-footer-newsletter">
                <label htmlFor="email">
                    Recevez nos conseils verts 🌱
                </label>
                <div className="lmj-footer-input-group">
                    <input
                        id="email"
                        type="email"
                        placeholder="Entrez votre email"
                        onChange={handleInput}
                        value={inputValue}
                        onBlur={handleBlur}
                    />
                    <button>S’inscrire</button>
                </div>
            </div>

        </div>

        {/* Bas du footer */}
        <div className="lmj-footer-bottom">
            © {new Date().getFullYear()} Le souffle du jardin — Tous droits réservés
        </div>
    </footer>
)
}


export default Footer