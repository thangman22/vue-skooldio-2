export default {
    data () {
        return {
            count: 0
        }
    },
    mounted () {
        setInterval(() => {
            this.count = this.count + 1
            console.log(this.count)
        }, 1000);
    },
    methods: {
        consoleOne () {
            console.log('This is ONE')
        }
    }
}