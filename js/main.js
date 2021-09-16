Vue.config.devtools = true;

const app = new Vue ({
    el: "#root",
    data: {
        counter : 10,
        mess: [],
    },
    mounted () {
            for(let i = 0; i < this.counter; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp)=>{
                //    console.log(i +  resp.data.response);
                this.mess.push( i +  resp.data.response);
                });
            };
    }
})