<template>
      <nav class="nav-bar">
        <RouterLink to="/">Dashboard</RouterLink>
      </nav>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar {
    display: flex;
    align-items: center;
    background: #7823dc;
    width: 100vw;
    height: 100%;
    padding: 0px 20px 0px 20px;
}
.nav-bar a{
    padding: 5px 5px 5px 5px;
    height: 100%;
    color: #edecec;
    font-weight: 700;
    font-size: 20px;
}
.nav-bar a:hover {
    font-weight: 900;
}
</style>