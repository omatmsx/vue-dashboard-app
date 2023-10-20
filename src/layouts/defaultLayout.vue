<template>
    <header class="header">
        <Headers />
    </header>
    <main class="main">
        <router-view />
    </main>
    <footer class="footer">
        <Footer />
    </footer>
</template>

<script>
import Headers from '../components/Header/index.vue'
import Footer from '../components/Footer/index.vue'
export default {
    components:{
        Headers,
        Footer,
    }
}
</script>

<style scoped>
.header, .footer{
    height: 5vh;
}
.main{
    height: 90vh;
}
</style>