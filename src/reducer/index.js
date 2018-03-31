const initialState = {
    users: []
}
export default (state=initialState,action) => {

    switch (action.type) {
        case "GETDATA":
        state.users = action.payload
        
          return  state.users
        
          case "TEST":
          return state
        default:
          return state
      }
}