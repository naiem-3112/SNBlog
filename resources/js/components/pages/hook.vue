<template>
    <div>
        <p>This is hook page through vue router</p>
        <h2>Understanding Hook</h2>
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
    }
}
</script>