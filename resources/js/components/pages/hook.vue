<template>
    <div>
        <p>This is hook page through vue router</p>
        <h2 ref="ref1">Understanding Hook</h2>
        <h3>My name is {{ name }}</h3>
    </div>
</template>

<script>

// here data property is a local memory for this template

export default {
    data(){
        return{
            name: 'Shahadat Hossain Naiem',
        }
    },

    //beforecreate hook can't access from local memory and HTML element bcz its not rendering both yet when vue instance are created
    created(){
        console.log(this.name)
    },
    
    //created hook can access from local memory but cannot access HTML element bcz its not rendering yet when vue instance are created
    created(){
        console.log(this.name)
    },

    //mounted hook can access HTML and from local memory bcz its rendering HTML adn data when vue instantiate
    mounted(){
        console.log(this.$refs.ref1)
    }
}
</script>