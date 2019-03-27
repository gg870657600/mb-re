<template>
	<div class=wrap>
		<p>
		<input type="text" v-model="searchKey" placeholder="Id/Name/Age">
		<button v-on:click='dataGet'>查询</button>
		<button v-on:click='show=!show'>添加用户</button>
        <button class="btn3" v-on:click="sortGet" style="text-align: center;">点击按age排序</button>
		</p>
		<table>
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Age</th>
			</tr>
			<tr class="row" v-for="item in list">
				<td v-for="val in item">{{val}}</td>
			</tr>
		</table>
<!-- 		<button v-on:click="dataGet">click显示数据</button>
 -->		<div class="create" v-show="show">
			<p>Create New User</p>
        	<form >
            	<p>id:<input type="number" name="id" v-model='id'></p>
            	<p>name:<input type="text" name="name" v-model='name'></p>
            	<p>age:<input type="number" name="age" v-model='age'></p>
            	<button v-on:click="dataPost" style="text-align: center;">Create</button>
          	</form>
        </div>
	</div>
</template>

<script>
    export default{
        name: 'home',
        data(){
            return {
                list:[],
                show:false,
                searchKey:'',
                id:'',
                name:'',
                age:''
            }
        },
        mounted:function(){
        	this.dataGet();
        },

        methods:{
          dataGet:function(){
            var _this = this;
            _this.$http.get('http://localhost:3020/api/getList.json?t='+ (new Date()).getTime().toString()).then(function(result){
            		//查询函数
            		if(_this.searchKey!=''){
            			var res_list=result.data.list;
            			_this.list=[];    //vue实例挂载后已经运行了一次dataGet函数，list已经被赋值了，所以要先变为空
            			for(var i=0;i<res_list.length;i++){
            				if(res_list[i].id==_this.searchKey | res_list[i].name==_this.searchKey | res_list[i].age==_this.searchKey){
            					_this.list.push(res_list[i]);
            				}
            			}
            		}else{
            			_this.list=result.data.list;
            		}

            });
          },
          dataPost:function(){
            var _this = this;
            _this.$http.post('http://localhost:3020/api/postList.json',{id:_this.id,name:_this.name,age:_this.age},{emulateJSON:true}).then(function(res){
              _this.dataGet();

            },function(res){
              console.log(res);
            });
            _this.show=false;
          },
          sortGet:function(){
            var _this=this;
            _this.$http.get('http://localhost:3020/get_sort_List.json?t='+ (new Date()).getTime().toString()).then(function(result){
              if(result.data.code==0){
                _this.list=result.data.list;
              }
            });
          }
        },

    }

</script>

<style type="text/css">
    .wrap{
    	text-align: center;
    }
    p button{
    	background-color: #0090D3FF;
    	border:0;
    	padding:5px 10px;
    	border-radius:3px;
    }
	tr.row{
		margin:0;
		background-color: white;
	}
	th{
		padding:10px 20px;
	}
	td{
		padding:10px 20px;
	}
	table{
		display: inline-block;
		background-color: #0090D3FF;
	}
	.create{
		width:400px;
		height: 250px;
		background-color: white;
		position: absolute;
		left:50%;
		margin-left: -200px;
		top:50%;
		text-align: center;
		box-shadow: 0 0 10px #888888;
		animation: myfirst 5s;
	}
	@keyframes myfirst{
		0% {transition:rotateY(90deg);}
		50% {transition:rotateY(180deg);}
		100% {transition:rotateY(270deg);}
	}

	@-webkit-keyframes myfirst {
		0% {transition:rotateY(90deg);}
		50% {transition:rotateY(180deg);}
		100% {transition:rotateY(270deg);}
	}
	.create>p{
		padding:10px;
		margin:0;
		background-color: #0090D3FF;
	}
	.create form {
		text-align: right;
		margin-right: 100px;
	}
	.create form>button{
		padding:5px 15px;
		margin:0;
		border:0;
		background-color: #0090D3FF;
	}
</style>