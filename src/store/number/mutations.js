import {
    CHANGE_RED,
    CHANGE_WHITE,
    CHANGE_USER_STATE,
    CHANGE_USER_INFO,
    USER_NAME,
    CHANGE_CATEGORY_LIST

} from './const'


const mutations = {
    CHANGE_RED(state, payload) {
        state.login_red = true;
    },
    CHANGE_WHITE(state, payload) {
        state.login_red = false;
    },
    CHANGE_USER_STATE(state, payload) {
        state.user_state = payload.user_state
    },
    CHANGE_USER_INFO(state, payload) {
        state.user_info = payload.user_info
    },
    USER_NAME(state, payload) {

    },
    CHANGE_CATEGORY_LIST (state, payload) {
        state.category_list = payload.category_list
    }
}

export default mutations