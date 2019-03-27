<template>
    <div>
        <input type="text" v-model="searchKey" placeholder="模糊查询：name/price/category">
        <br>
        <table>
            <tr v-for="item in searchData">
                <td v-for='key in item'>{{key}}</td>
            </tr>
        </table>
        
    </div>

</template>

<script>
    export default({
        name:"helloworld",
        data(){
            return{
                searchKey:'',
                list:[{
                name: '苹果',
                price: 25,
                category: "水果"
            }, {
                name: '香蕉',
                price: 15,
                category: "水果"
            }, {
                name: '雪梨',
                price: 65,
                category: "水果"
            }, {
                name: '宝马',
                price: 2500,
                category: "汽车"
            }, {
                name: '奔驰',
                price: 10025,
                category: "汽车"
            }, {
                name: '柑橘',
                price: 15,
                category: "水果"
            }, {
                name: '奥迪',
                price: 25,
                category: "汽车"
            }, {
                name: '火龙果',
                price: 25,
                category: "工具"
            }]
            }
        },
        computed:{
            searchData:function(){
                var searchKey=this.searchKey;
                if(searchKey){
                    return this.list.filter(function(item){
                        return Object.keys(item).some(function(key){
                            return String(item[key]).toLowerCase().indexOf(searchKey) >-1;
                        })
                    })
                }
                return this.list;
            }
        }
    })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
