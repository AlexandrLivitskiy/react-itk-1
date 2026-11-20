const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 4, message: body})
    }

    return state;
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })

export default dialogsReducer;
