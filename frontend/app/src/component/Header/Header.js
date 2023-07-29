import logo from '../../assets/digimon.png'
import classes from './Header.module.css'


function Header ()
{
    return (
        <header className={classes.header}>
        <img src={logo} alt="logo"></img>
        <h1>Digimon Card DB</h1>
        </header>
    )
}

export default Header;