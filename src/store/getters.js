const getters = {
    profile: state => {
        return state.loggedState? state.AppActiveUser : {}
    }
}
export default getters