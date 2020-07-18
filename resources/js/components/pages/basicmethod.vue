<template>
    <div>
        <h2>Count number {{ counter }}</h2>
        <button @click="updatecounter(1)">increase</button>
        <button @click="updatecounter(-1)">decrease</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0
        }
    },

    methods: {
        updatecounter(number){
            this.counter += number
        }
    }
}
</script>