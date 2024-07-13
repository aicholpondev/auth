import axios from "axios";
const instance = axios.create({
    baseURL: 'https://aibek-backender.org.kg/email-verify/',
});

export const regisAuth ={
    async register(data){
        try{
            const response =await instance.post('/registration',data);
            console.log(response.data);
        }catch (e){
            console.log('Error',e);
            throw e
        }
    },

    async resend(data){
        try{
            const response  =await instance.post('/registration/resend',data);
            console.log(response);
        }catch (e) {
            console.log('Error',e);
            throw e
        }
    },
    async login(login){
        try{
            const response = await instance.post('/login',login,{withCredentials:true});
            localStorage.setItem('accessToken',response.data.accessToken);
            axios.defaults.headers.common['Authorization']=`Bearer ${response.data.accessToken}`;

        }catch (e){
            console.log('Error',e);
            throw e;
        }
    }

}