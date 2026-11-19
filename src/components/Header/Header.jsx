import s from './Header.module.css';

function Header(props) {
    return (
        <div className={s.header}>
            {props.logo ? <img src={props.logo} className="App-logo" alt="logo" /> : ""}
            {props.text}
        </div>
    );
}

export default Header;