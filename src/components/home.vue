<template>
  <div class="root" v-init="">
    <div class="leftWrap">
      <div class="leftWrap-head">
        <el-input class="inputValue" v-model="name" placeholder="请输入目标关键词" size="smail"></el-input>
        <!-- 模糊、精准查询选择 -->
        <el-select class="selectchoose" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="info" icon="el-icon-search" v-on:click="vagueSelect">检索</el-button>
      </div>

      <div class="leftWrap-select">
        <!-- <ul>
          <li v-on:click="show_countries=!show_countries">国家</li>
          <li v-on:click="show_categories=!show_categories">类别</li>
          <li v-on:click="show_credibility=!show_credibility">分级</li>
          <li v-on:click="show_heightLevelFilterPane=!show_heightLevelFilterPane">筛选</li>
        </ul>
        国家筛选界面
        <div id="countries" v-show="show_countries">
          <ul v-for="(iteam,index) in countries" v-bind:key="index">
            <li v-on:click="show=!show">{{iteam.type}}</li>
          </ul>

          <div v-show="show">
            <ul v-for="(iteam,index) in countries[0].countries" v-bind:key="index">
              <li>{{iteam}}</li>
            </ul>
          </div>
          重置、确定按钮
          <div>
              <el-button type="primary" >重置</el-button>
              <el-button type="primary" >确定</el-button>
          </div>
        </div>
        <div id="categories" v-show="show_categories">
            <ul>
                <li  v-for="(iteam,index) in categories" v-bind:key="index" v-on:click="show=!show">{{iteam}}</li>
            </ul>
        </div>
        <div id="credibility" v-show="show_credibility">
            <ul>
                <li  v-for="(iteam,index) in credibility" v-bind:key="index" v-on:click="show=!show">{{iteam}}</li>
            </ul>
        </div>
        高级筛选界面
        <div id="heightLevelFilterPane" v-show="show_heightLevelFilterPane">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="所属目标体系" name="1">
                    <div>
                        <ul>
                            <li v-for="(iteam,index) in targetSystem" v-bind:key="index">{{iteam}}</li>
                        </ul>
                    </div>   
                </el-collapse-item>
                <el-collapse-item title="目标等级" name="2">
                    <div>
                        <ul>
                            <li v-for="(iteam,index) in level" v-bind:key="index">{{iteam}}</li>
                        </ul>
                    </div>                    
                </el-collapse-item>
                <el-collapse-item title="是否完整整编成果" name="3">
                    <div>
                        <ul>
                            <li v-for="(iteam,index) in reorganizationResults" v-bind:key="index">{{iteam}}</li>
                        </ul>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="作战方向" name="4">
                    <div>
                        <ul>
                            <li v-for="(iteam,index) in fightDirection" v-bind:key="index">{{iteam}}</li>
                        </ul>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div> -->
        
        <el-tabs v-model="activeName" @tab-click="handleClick" id="selectTab">
            <el-tab-pane label="国家" name="first" id="countries" >                 
                <el-tabs v-model="activeName2" @tab-click="handleClick2" v-show = "show">
                    <el-tab-pane label="热门" name="1">
                        <ul v-for="(iteam,index) in countries[0].countries" v-bind:key="index">
                        <li @click="queryData('country',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="亚洲" name="2">
                        <ul v-for="(iteam,index) in countries[1].countries" v-bind:key="index">
                        <li @click="queryData('country',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="美洲" name="3">
                        <ul v-for="(iteam,index) in countries[2].countries" v-bind:key="index">
                        <li @click="queryData('country',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="欧洲" name="4">
                        <ul v-for="(iteam,index) in countries[3].countries" v-bind:key="index">
                        <li @click="queryData('country',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="非洲" name="5">
                        <ul v-for="(iteam,index) in countries[4].countries" v-bind:key="index">
                        <li @click="queryData('country',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                        </ul>
                    </el-tab-pane>
                    <div id="btn-enter">
                        <el-button type="primary" @click="reset">重置</el-button>
                        <el-button type="primary" v-on:click="vagueSelect">确定</el-button>
                    </div>
                </el-tabs>
            </el-tab-pane>

            <el-tab-pane label="类别" name="second" >
                <div v-show = "show">
                    <ul>
                        <li  v-for="(iteam,index) in categories" v-bind:key="index" @click="queryData('categories',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                    </ul>
                    <div id="btn-enter">
                        <el-button type="primary" @click="reset">重置</el-button>
                        <el-button type="primary" v-on:click="show = false">确定</el-button>
                    </div>
                </div>
                
            </el-tab-pane>
            <el-tab-pane label="分级" name="third">
                <div v-show = "show">
                    <ul>
                        <li  v-for="(iteam,index) in credibility" v-bind:key="index" @click="queryData('credibility',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                    </ul>
                    <div id="btn-enter">
                        <el-button type="primary" @click="reset">重置</el-button>
                        <el-button type="primary" v-on:click="show = false">确定</el-button>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="筛选" name="fourth" id="heightLevelFilterPane">
                <el-collapse v-model="activeNames" @change="handleChange" v-show = "show">
                    <el-collapse-item title="所属目标体系" name="1">
                        <div>
                            <ul>
                                <li v-for="(iteam,index) in targetSystem" v-bind:key="index" @click="queryData('targetSystem',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                            </ul>
                        </div>   
                    </el-collapse-item>
                    <el-collapse-item title="目标等级" name="2">
                        <div>
                            <ul>
                                <li v-for="(iteam,index) in level" v-bind:key="index" @click="queryData('level',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                            </ul>
                        </div>                    
                    </el-collapse-item>
                    <el-collapse-item title="是否完整整编成果" name="3">
                        <div>
                            <ul>
                                <li v-for="(iteam,index) in reorganizationResults" v-bind:key="index" @click="queryData('reorganizationResults',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                            </ul>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="作战方向" name="4">
                        <div>
                            <ul>
                                <li v-for="(iteam,index) in fightDirection" v-bind:key="index" @click="queryData('fightDirection',$event,iteam,selected)" :class="setSelectedSty(iteam,selected)">{{iteam}}</li>
                            </ul>
                        </div>
                    </el-collapse-item>
                    <div id="btn-enter">
                        <el-button type="info" @click="reset">重置</el-button>
                        <el-button type="info" v-on:click="show = false">确定</el-button>
                    </div>
                </el-collapse>
            </el-tab-pane>
        </el-tabs>

      </div>

        <!-- 已选条件显示 -->
      <div id="selected">
          <span style="color:white">已选条件：</span>
          <div id="countrySelected">
              <ul>
                  <li v-for="(iteam,index) in searchParams.data.query['country']" @click="queryData('country',$event,iteam,selected)" :key="index">{{iteam}}</li>
              </ul>
          </div>
          <div id="categoriesSelected">
              <ul>
                  <li v-for="(iteam,index) in searchParams.data.query['categories']" @click="queryData('categories',$event,iteam,selected)" :key="index">{{iteam}}</li>
              </ul>
          </div>
          <div id="credibilitySelected">
              <ul>
                  <li v-for="(iteam,index) in searchParams.data.query['credibility']" @click="queryData('credibility',$event,iteam,selected)" :key="index">{{iteam}}</li>
              </ul>
          </div>
          <div id="targetSystemSelected">
              <ul>
                  <li v-for="(iteam,index) in searchParams.data.query['targetSystem']" @click="queryData('targetSystem',$event,iteam,selected)" :key="index">{{iteam}}</li>
              </ul>
          </div>
          <div id="levelSelected">
              <ul>
                  <li v-for="(iteam,index) in searchParams.data.query['level']" @click="queryData('level',$event,iteam,selected)" :key="index">{{iteam}}</li>
              </ul>
          </div>
          <div id="reorganizationResultsSelected">
              <ul>
                  <li v-for="(iteam,index) in searchParams.data.query['reorganizationResults']" @click="queryData('reorganizationResults',$event,iteam,selected)" :key="index">{{iteam}}</li>
              </ul>
          </div>
          <div id="fightDirectionSelected">
              <ul>
                  <li v-for="(iteam,index) in searchParams.data.query['fightDirection']" @click="queryData('fightDirection',$event,iteam,selected)" :key="index">{{iteam}}</li>
              </ul>
          </div>
      </div>

      <!-- 搜索结果显示 -->
      <div>
        <span style="color: white">数据总条数： {{total}}</span>
        <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'country', order: 'descending'}" >
            <el-table-column prop="name" label="名称" width="100">
            </el-table-column>
            <el-table-column prop="country" label="国家" sortable width="100">
            </el-table-column>
            <el-table-column prop="type" label="类型" sortable width="100">
            </el-table-column>
            <el-table-column prop="level" label="等级" :formatter="formatter">
            </el-table-column>
        </el-table>
      </div>

      <!-- 分页    layout="total, sizes, prev, pager, next, jumper" -->
      <div ref="pageDom">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="10"
                layout=" prev, pager, next "
                :total="total">
            </el-pagination>
      </div>
    </div>
    <div id="cesium">
		<iframe src="http://192.168.1.81:8081/" style="width:100%;height:100%" frameborder="0"></iframe>
	</div>
  </div>
</template>


<script>
import qs from "qs"
    export default{
        name: 'home',
        data(){
            return {
                url:'http://192.168.1.109:8089',
                //模糊、精准选择
                value: '模糊',
                //input值
                name:'',
                options: [{
                    value: '模糊',
                    label: '模糊'
                }, {
                    value: '精准',
                    label: '精准'
                }],
                //国家
                countries: [
                    {type: '热门',countries:['台湾','美国', '日本', '韩国', '朝鲜','印度', '菲律宾','越南']},
                    {type: '亚洲',countries:['朝鲜', '日本','印度', '韩国','泰国', '马来西亚', '吉隆坡', '柬埔寨', '菲律宾','新加坡' ,'蒙古国','越南','老挝', '缅甸', '文莱','孟加拉','斯里兰卡','吉尔吉斯斯坦', '塔吉克斯坦', '伊拉克', '叙利亚']},
                    {type: '欧洲',countries: ['瑞典','芬兰','奥地利','爱沙尼亚','希腊','英国','德国','波兰','俄罗斯','爱沙尼亚','乌克兰','罗马尼亚','意大利','葡萄牙','安道尔']},
                    {type: '美洲',countries: ['阿根廷', '巴哈马','加拿大', '伯利兹','美国', '玻利维亚','巴西','古巴','委内瑞拉','萨尔瓦多','智利' ,'危地马拉','苏里南', '特立尼达', '多巴哥', '安提瓜', '洪都拉斯']},
                    {type: '非洲',countries: ['埃及','苏丹','利比亚','突尼斯', '阿尔及利亚','摩洛哥']},
                    {type: '大洋洲',countries: ['澳大利亚','新西兰']}
                ],
                
                //类别
                categories: ['党政首脑机关','军事指挥机构','空军基地','地空导弹阵地','技侦阵地','通信站','海军基地', '对空雷达站' ],
                //分级
                credibility: ['可靠','可用','参考'],
                //高级筛选
                targetSystem: ['防空防导','侦察预警','指挥通信','更多体系'],
                level:['等外','1级','2级','3级'],
                reorganizationResults:['是','否'],
                fightDirection:['南海','东海','黄海','中朝'],
                specialTask:['1221任务'],
                mbSystem:['MB体系12','MB体系83'],
                weaponType:['型号一','型号二','型号三','型号四'],
                //国家、类别、分级、筛选界面显示隐藏
                show:true,
                // show_countries:true,
                // show_categories:false,
                // show_credibility:false,
                // show_heightLevelFilterPane:false,

                activeNames: ['1'],

                activeName: 'first',
                activeName2: '1',

                //已选条件
                searchParams: {  
                    data: {
                        query: {row:10,start:0},
                        isAllquery: true, //是走默认查询还是多条件查询
                        source: [],
                    }
                },

                //已选条件样式设置
                changeStyle : [],
                //要改变样式的选中条件
                selected:[],
                //结果显示表格
                tableData: [],

                // 分页
                currentPage1: 1,  //当前页
                total : "0",
                pageSize : 10,    //每页多少条数据

            }
        },
        mounted:{

        },
        methods: {
            setSelectStyle(val,arr) {
                // 如果当前被点击的数据在已选择的数组中不存在
                // for(var i=0;i<arr.selectedCountries.length;i++){
                //     if(arr.selectedCountries[i].indexOf(val) > -1){
                //         return 'active';
                //     }else{
                //         return;
                //     }
                // }
                console.log('val');
            },
            handleChange(val) {
                console.log(val);
            },
            handleClick(tab, event) {
                console.log("99999999999999999",tab, event);
                
                this.show = true;
                console.log('this.show:',this.show)
            },
            handleClick2(tab, event) {
                console.log(tab, event);
            },
            

            //查询请求
            vagueSelect:function(){
                this.show = false
                console.log(this.$refs.pageDom);
                console.log(this.value);
                var _this=this;
                //searchParams.data.query中的键值对个数
                var key_count = 0
                for (var key in _this.searchParams.data.query){
                    key_count += 1;
                }

                var params = _this.searchParams.data.query
                var headers = ""
                //如果key_count等于2，模糊查询；key_count大于2，条件查询
                //模糊查询
                if (key_count == 2 && this.name == "" && this.value =="模糊"){
                    var url = _this.url+'/seis/v3/api/all'
                    headers = {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
                    params = qs.stringify(params)
                }
                //条件查询
                else if (key_count > 2 && this.name == "" && this.value =="模糊"){
                    params['row'] = [];
                    params['start'] = [];
                    params['row'].push(_this.pageSize);
                    params['start'].push(_this.currentPage1 * _this.pageSize - _this.pageSize);
                    var url = _this.url+'/seis/v3/api/ads'
                    headers = {'Content-Type':'application/json; charset=UTF-8'}
                }
                //精准查询
                else if (_this.name && key_count == 2 && this.value =="精准"){
                    var url = _this.url+'/seis/v3/api/one'
                    headers = {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
                    // _this.$set(_this.searchParams.data.query,"name",_this.name)
                    params = qs.stringify({name:_this.name})
                }
                else{
                    alert('查询方式错误')
                }
                             
                _this.$http.post(url,params,headers)
                .then(function(res){
                    // console.log("hhhhhh:",res.data[0].country);
                    for (var i=0 ; i<res.data.length-1 ; i++ ){
                        _this.$set(_this.tableData,i,{});
                        _this.$set(_this.tableData[i],'name',res.data[i].name);
                        _this.$set(_this.tableData[i],'country',res.data[i].country);
                        _this.$set(_this.tableData[i],'type',res.data[i].type);
                        _this.$set(_this.tableData[i],'level',res.data[i].level);
                        
                        // console.log("11111111:",res.data[i].name)
                    }
                    _this.total = res.data[res.data.length-1].total
                    console.log("total:",_this.total)
                    console.log("tableData:",_this.tableData)
                })
                .catch(function(error){
                    console.log(error);
                })
            },
            //添加、删除筛选条件
            queryData:function(key,e,iteam,arr){
                //添加、删除已选条件的样式
                if(arr.indexOf(iteam) == -1){
                    arr.push(iteam);
                }else{
                    arr.splice(arr.indexOf(iteam),1);
                }                
                // console.log("444444444",arr)

                //点击元素获取值
                // console.log(e.target.innerHTML)
                var value = e.target.innerHTML;
                // key为真时...;key为假时，添加key，添加value
                if(this.searchParams.data.query[key]){
                    //key为真时判断value是否在数组中
                    if(this.searchParams.data.query[key].indexOf(value)==-1){
                        this.searchParams.data.query[key].push(value)
                    }else{
                        this.searchParams.data.query[key].splice(this.searchParams.data.query[key].indexOf(value),1);
                        //数组长度为0时，删除key
                        if(this.searchParams.data.query[key].length==0){
                            delete this.searchParams.data.query[key]
                        }
                    }
                }
                else{
                    this.$set(this.searchParams.data.query,key,[]);
                    this.searchParams.data.query[key].push(value)
                }    
                console.log(this.searchParams.data.query)

                //已选条件改变样式
                // console.log('eeeeeeeeeeeeeeeeeeeeeeee',e)
                // if(!e.target.className){
                //     e.target.classList.toggle("selectedStyle")
                // }else{
                //     e.target.className = ""
                // }
            },

            //条件筛选重置按钮
            reset:function(){
                this.searchParams.data.query = {row:10,start:0};
                this.selected = [];
                console.log(this.countries[0]);
                // this.searchParams.data.query={row:10,start:0};
            },

            

            //结果显示表格
            formatter(row, column) {
                return row.level;
            },

            // 分页
            handleSizeChange(val) {debugger
                var data = this.searchParams.data.query
                console.log(`每页 ${val} 条`);
                this.$set(this.searchParams.data.query,'row',`${val}`)
                this.pageSize = `${val}`
                // console.log('this.pageSize:',this.pageSize);
            },
            handleCurrentChange(val) {
                var data = this.searchParams.data.query
                console.log(`当前页: ${val}`);
                console.log(`${val}`);
                
                // var params = {row:10,start:`${val}`*10-10}
                this.$set(this.searchParams.data.query,'start',`${val}`*this.pageSize-this.pageSize) 
                console.log("this.searchParams.data.query: ",data,this.pageSize)
                //切换页码发起查询请求
                this.vagueSelect();
            },
            setSelectedSty(iteam,arr){
                if(arr.indexOf(iteam) == -1){
                    return;
                }else{
                    return 'selectedStyle'
                }
            }
        } 
             
    }
  
</script>

<style type="text/css">
.root {
  display: flex;
  height: 100%;
  color: #444;
  background-color:#444444;
}
.leftWrap {
  width: 400px;
  /* height:700px; */
  /* background:#444444; */
  border: 1px solid gray
}

#cesium {
  flex: 1;
  background-color: black;
}
/* 输入框 */
.el-input__inner{
    background-color: white;
}

.inputValue {
  width: 200px;
}

.selectchoose {
  width: 100px;
}
/* 检索 */
.el-button--primary {
    color: #444;
    background-color: white;
    border-color: #dcdfe6;
}


ul li{list-style: none;}
ul{
    padding-inline-start:0;
    margin: 5px;
}

.el-tabs__item{
    padding: 0 35px;
}

.el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2), .el-tabs--bottom .el-tabs__item.is-top:nth-child(2), .el-tabs--top .el-tabs__item.is-bottom:nth-child(2), .el-tabs--top .el-tabs__item.is-top:nth-child(2){padding-left:35px;}

#selectTab ul{
    display: inline-block;
}
#selectTab ul li{
    padding: 2px 10px;
    margin:2px 5px;
    display: inline-block;
}
#selectTab ul li:hover{
    background-color: #126C86;
    box-shadow: 0 0 0 1px #08DAF1;
    cursor: pointer;
}
#heightLevelFilterPane{
    background-color: #444444;
}
#heightLevelFilterPane ul li{
    display: inline-block;
    padding:5px 10px;
}

/* 重置、确定 */
#btn-enter{
    text-align: right;
    margin: 5px 10px;
}

/* 条件选择 */
#selected ul li{
    display: inline-block;
    padding:5px 10px;
    margin:5px;
    background-color: #126C86;
    box-shadow: 0 0 0 1px #08DAF1;
    color: white
}
#selected ul li:hover{
    cursor: pointer
}
.selectedStyle {
    background-color: #126C86;
    box-shadow: 0 0 0 1px #08DAF1;
    
}
/* 分页 */

.el-pagination{
    /* white-space: nowrap; */
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    /* position: absolute;
    bottom: 5px; */
}

/* 组件重新调整样式 */
.el-scrollbar {
    overflow: hidden;
    position: relative;
    background-color: #444444;
}
.el-select-dropdown__item {
    color: white;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: gray;
}
.el-popper[x-placement^=bottom] .popper__arrow::after {
    border-bottom-color: #444444;
}
.el-select .el-input.is-focus .el-input__inner {
    border-color: #409EFF;
    background: #383838;
    color:white
}
.el-input--suffix .el-input__inner {
    padding-right: 30px;
    background: #383838;
    color:white
}
#selectTab{
    color:white;
    border-top: 1px solid gray;
}
.el-tabs__item{
    color:#909399;
}
.el-table {
    color: white;
}
.el-table, .el-table__expanded-cell {
    background-color: #444444;
}
.el-table th, .el-table tr {
    background-color: #444444;
}
.el-collapse-item__header.is-active {
    border-bottom-color: transparent;
}
.el-collapse-item__header {
    color: white;
}
.el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap {
    background-color: #444444;
}
.el-collapse-item__content {
    color: white;
}
.el-button--primary {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
.leftWrap-head{
    margin: 10px 1px;
}
#selected{
    border-top:1px solid gray;
}
.el-table__body, .el-table__footer, .el-table__header {
    border-top: 1px solid gray;
}
.el-pagination button:disabled {
    background-color: gray;
}
.el-pagination .btn-next, .el-pagination .btn-prev {
    background: center center no-repeat gray;
}
.el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.el-table--enable-row-hover table.el-table__body tr:hover td{
    background-color: rgba(155,155,155,.2);
    color: #08DAF1;
}
.el-table__body-wrapper {
    overflow-y: scroll;
    position: relative;
    height: 500px;
    overflow-x: hidden;
}
.el-pagination {
    background: gray;
}
.el-button--info:focus, .el-button--info:hover{
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
</style>