<template>
    <div>
        <h2>Count number {{ counter }}</h2>
        <button @click="updatecounter(1)">increase</button>
        <button @click="updatecounter(-1)">decrease</button>
        <hr>

        <div v-for="(blog, i) in blogs" :key="i">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.post }}</p>
            <p>{{ blog.id }}</p>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0,
            blogs: [],
        }
    },

    methods: {
        updatecounter(number){
            this.counter += number
        }
    },

    created(){
        this.counter = 100

        //get the blog post
        let posts = [
            {title: 'title 1', post: 'post 1', id: 1},
            {title: 'title 1', post: 'post 1', id: 2},
            {title: 'title 1', post: 'post 1', id: 3},
            {title: 'title 1', post: 'post 1', id: 4},
            {title: 'title 1', post: 'post 1', id: 5},
        ]

        this.blogs = posts
    }
}
</script>