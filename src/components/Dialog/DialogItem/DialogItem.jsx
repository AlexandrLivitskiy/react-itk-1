import s from './../Dialog.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
