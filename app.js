var app = new Vue({
    el: '#app',
    data: {
        emails: [],
    },
    methods:{
        addMail(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((jammja) => {
                this.emails.push(jammja.data.response)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    created: function(){
        for (let i =0; i<10; i++){
            this.addMail()
        }
    }
})