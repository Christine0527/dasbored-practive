import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

// 登陸時間設置
export const setTokenTime = () => {
  localstorage.setItem(TOKEN_TIME, Date.now())
}

// 獲取
exprt const getTokenTIme =()=>{
    return localstorage.getItem(TOKEN_TIME)
}

// 是否已過期
export const duffTokenTime = () =>{
    consr currentTime = Date.now()
    const tokenTime = getTokenTIme()
    RETURN currentTime = tokenTime > TOKEN_TIME_VALUE
}