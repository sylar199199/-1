export default {
    changeKeepAlive_:(state,keepAlive_)=>{
        if(typeof keepAlive_ == "string"){
            state.keepAlive.push(keepAlive_);
        }else{
            state.keepAlive = keepAlive_;
        }
    },
    setIsLoading(state, value) {
        state.isLoading = value
    },
    setIsAgree(state, value) {
        state.isAgree = true
    },
    setisshowAreement(state, value) {
        state.isshowAreement = value
    },
    setIsShowRegister(state, value) {
    	state.isShowRegister = value
    },
    setIsShowBindPhone(state, value) {
        state.isShowBindPhone = value
    }
}
