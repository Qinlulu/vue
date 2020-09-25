import axios from 'axios'

const request = {
    install: function (Vue) {
        Vue.prototype.$request = (type="get",url,data)=>{
            let promise;
            return new Promise(function (resolve) {
                if(type=="get"){
                    promise=axios.get(url,data);
                }else{
                    promise=axios.post(url,data);
                }
                promise.then((res)=>{
                    resolve(res.data)
                  }).catch((err)=>{
                      console.log(err)
                    resolve(false);
                  })
            })
        }

        Vue.prototype.$get = (url,data) => {
            return Vue.prototype.$request("get",url,data)
        }

        Vue.prototype.$post = (url,data) => {
            return Vue.prototype.$request("post",url,data)
        }

    }
}
export default request
