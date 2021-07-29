const getters = {
    profile: state => {
        const userinfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(userinfo.username);
        return localStorage.getItem("userInfo")? userinfo : state.AppActiveUser;
    },
    isAuthenticated: state => {
        return localStorage.getItem("loggedState")? localStorage.getItem("loggedState") : state.loggedState;
    }
}
export default getters