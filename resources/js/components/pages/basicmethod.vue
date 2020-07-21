<template>
    <div>
        <h2>Count number {{ counter }}</h2>
        <button @click="updatecounter(1)">increase</button>
        <button @click="updatecounter(-1)">decrease</button>
        <hr>

        <!-- foreach -->
        <div v-for="blog in blogs" :key="blog.id">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.post }}</p>
            <p>{{ blog.id }}</p>
        </div>

        <br><br>
        <hr>

        <div>
            <h2 v-if="showItem">show this item if "showItem" is true</h2>
            <h2 v-else>show this item if "showItem" is false</h2>
        </div>

        <button @click="showItem=!(showItem)">change visibility</button>
        <button @click="changeShow()">by method</button>

    </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0,
            blogs: [],
            showItem: true,
        }
    },

    methods: {
        updatecounter(number){
            this.counter += number
        },

        changeShow(){
            this.showItem=!this.showItem
        },
    },

    created(){
        this.counter = 50

        //get the blog post
        let posts = [
            {title: 'title 1', post: 'post 1', id: 1},
            {title: 'title 2', post: 'post 2', id: 5},
            {title: 'title 3', post: 'post 3', id: 3},
            {title: 'title 4', post: 'post 4', id: 4},
            {title: 'title 5', post: 'post 5', id: 2},
        ]

        this.blogs = posts
    }
}
</script>