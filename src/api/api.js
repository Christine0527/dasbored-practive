// 整個項目api的統一管理 
import request from "./request"

// 請求首頁左側的表格數據

export default {
    getTableData(){
        return request({
            url:"api/home/getTableData",
            method:'get'
        })
    }
}