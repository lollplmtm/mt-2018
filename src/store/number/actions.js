
import axios from 'axios'
import md5 from 'js-md5'
const actions  = {
    action_login (context, { code, phone, success, fail }) {
        axios.post('/mz/v4/api/login?__t=' + Date.now, {
            code: "",
            codeKey: "",
            loginType: 1,
            password: md5(code),
            username: phone
        }).then(res => {
            if (res.statusText ==='OK') {
                console.log(res.statusText);
                context.commit({
                    type: 'CHANGE_USER_STATE',
                    user_state: res.statusText
                }) 
                success();   
            }else {
                fail();
                console.log(222);
                //更改state的数据，所以要调用mutations的方法
            }
        })
    },
}

export default actions