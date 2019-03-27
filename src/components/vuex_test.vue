<template>
    <div>
        <div class="div1" ></div>
        <button >点击显示图像</button>

    </div>

</template>

<script>
    export default({
        name:"vuex_test",
        data(){
            return{}
        },
        computed:{
            show_(){
                return this.store.state.show
            },
            notShow(){
                return this.store.commit('isShow')
            }
        }
    })

</script>


<style>
    .div1{
        width:200px;
        height: 200px;
        background-color: red;
    }

</style>
