import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Post1", likesCount: 12},
                {id: 2, message: "Post2", likesCount: 120},
                {id: 3, message: "Post3", likesCount: 124575}
            ],
            newPostText: "Something New"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dymich"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Alex"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hi bro! How r u?"},
                {id: 3, message: "OK thanks"}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state) {
        console.log('rerenderEntireTree')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
