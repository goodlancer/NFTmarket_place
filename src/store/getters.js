const getters = {
    profile: state => {
        
        const userinfo = JSON.parse(localStorage.getItem("userInfo"));
        return (state.AppActiveUser.id != "")? state.AppActiveUser : userinfo;
    },
    isAuthenticated: state => {
        const user = (state.AppActiveUser.id != "")? state.AppActiveUser : JSON.parse(localStorage.getItem("userInfo"));
        
        if (user && user.accessToken) {
            var hours = Math.abs(new Date() - new Date(user.genTokenDate)) / 36e5;
            console.log('expire hours', hours);
            if(hours < 12){
                return true;
            }else{
                return false
            }
            // for Node.js Express back-end
          } else {
            return false;
          }
    }
}
export default getters