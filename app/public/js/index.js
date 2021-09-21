const User = {
    data() {
        return {
            "result": {},
        }
    },
        computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMM YYYY')
        }
    },
    
    methods: {
        fetchUserData() {
            console.log("A");
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.result = responseJson.results[0];
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        }
    },
    created() {
        this.fetchUserData();
    }
} 

Vue.createApp(User).mount('#userApp');
console.log("Z");

// Code used from Professor Gregory's Class //