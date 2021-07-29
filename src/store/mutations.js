const mutations = {
  UPDATE_USER_INFO(state, payload) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser

    for (const property of Object.keys(payload)) {

      if (payload[property] != null) {
        // If some of user property is null - user default property defined in state.AppActiveUser
        state.AppActiveUser[property] = payload[property]

        // Update key in localStorage
        userInfo[property] = payload[property]
      }
    }
    // Store data in localStorage
    console.log('updateer');
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },
  
  UPDATE_SIGNED(state, payload) {
    state.loggedState = payload
  }

}

export default mutations