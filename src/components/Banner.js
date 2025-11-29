import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'Le souffle du jardin';
    return <div className= "lmj-banner">
        <img src={logo} alt="le souffle du jardin" className= "lmj-logo"/>
        <h1 className= "lmj-title">{title}</h1>
    </div>
    
}

export default Banner