<template>
    <div class="login-wrp">
        <div class="login-div">
            <div class="title">Login</div>
            <form>
                <input type="text" placeholder="Enter username" />
                <input type="text" placeholder="Enter password" />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .title{
        font-size: 18px;
        font-weight: 600;
    }
    .login-wrp{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .login-div {
        padding: 20px;
        box-shadow: 0px 0px 5px 1px #8c8c8c;
        border-radius: 10px;
        background: #fff;
    }
    input{
        width: 100%;
        height: 30px;
        margin: 10px 0; 
        padding: 5px;   
    }
    button{
        width: 100%;
        height: 30px;
        margin: 10px 0;
        background: #7823dc;
        color: #fff;
        font-size: 14px;
    }
    button:hover{
        background: #3e057e;
    }
</style>