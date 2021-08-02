const getters = {
    profile: state => {
        
        const userinfo = JSON.parse(localStorage.getItem("userInfo"));
        return (state.AppActiveUser.id != "")? state.AppActiveUser : userinfo;
    },
    isAuthenticated: state => {
        return localStorage.getItem("loggedState")? localStorage.getItem("loggedState") : state.loggedState;
    }
}
export default getters