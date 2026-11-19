import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-new-nature-beautiful-background-pictures-image_16017682.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                Posts
            </div>
        </div>
    );
}

export default ProfileInfo;
