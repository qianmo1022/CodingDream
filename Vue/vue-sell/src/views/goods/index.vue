<template>
    <div class="goods">
        <div class="goods-content">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li 
                        class="menu-item" 
                        :class="{'current':currentIndex === index}"
                        v-for="(item,index) in goods" 
                        :key="index"
                        @click="selectMenu(index)"    
                    >
                        <span class="text">
                            <SupportIcon size="3" :type="item.type" v-if="item.type >= 0 "/>
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="fooodsWrapper">
                <ul>
                    <!-- 一个菜系 -->
                    <li class="food-list" v-for="(item,index) in goods" :key="index" ref="foodList">
                        <h1 class="title">{{ item.name }}</h1>
                        <!-- 一道又一道菜 -->
                        <ul>
                            <li class="food-item" v-for="(i,idx) in  item.foods" :key="idx">
                                <div class="pic">
                                    <img :src="i.image" alt="">
                                </div>
                                <div class="content">
                                    <h2 class="name">{{ i.name }}</h2>
                                    <p class="desc">{{ i.description }}</p>
                                    <div class="extra">
                                        <span class="count">月售{{ i.sellCount }}份</span>
                                        <span>好评率{{ i.rating }}%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">￥{{ i.price }}</span>
                                        <span class="old" v-if="i.oldPrice" >￥{{ i.oldPrice }}</span>
                                    </div>
                                    <!-- 加号 -->
                                </div>
     
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart-wrapper">购物车</div>
    </div>

</template>

<script>
import { getGoods } from '@/api'
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import BScroll from '@better-scroll/core'
    export default {
        components:{
            SupportIcon
        },
        data(){
            return{
                goods:[],
                // currentIndex:0,
                foodsScroll:{},//被BScroll修饰后的容器
                scrollY:0,
                foodList:[],// 所有的菜系的DOM结构
                listHeight:[],// 所有的菜系的DOM的高度
            }
        },
        computed: {
            currentIndex() {//计算属性,根据右侧滚动的位置，返回不同的下标
                // 随着右侧滚动this.scrollY返回不同的下标
                for(let i = 0; i < this.listHeight.length; i++){
                    const h1 = this.listHeight[i]
                    const h2 = this.listHeight[i + 1]
                    if (!h2 || (this.scrollY >= h1 && this.scrollY < h2)) {
                        return i
                    }
                }
                return 0
            }
        },
        created(){
         // 获取商品数据
            getGoods().then(res=>{
                console.log(res);
                this.goods = res
                
                this.$nextTick(()=>{// $nextTick里面的回调会在页面加载完毕后才执行
                    this.betterScroll()
                    this._calculateHeight()
                })
            })
        },
        methods: {
            betterScroll(){
                // 获取到menu-wrapper的DOM结构
                // 希望哪个容器可以滚动，就拿到该容器的父容器
                new BScroll(this.$refs.menuWrapper,{
                    click:true
                })
                this.foodsScroll = new BScroll(this.$refs.fooodsWrapper,{
                    click: true,
                    scrollY: true,
                    probeType: 3
                })

                this.foodList = this.$refs.foodList

                // 给右侧容器监听上了滚动事件
                this.foodsScroll.on('scroll',pos => {
                    // console.log(Math.round(Math.abs(pos.y)));
                    this.scrollY = Math.round(Math.abs(pos.y))
                })
            },
            selectMenu(i) {
                // console.log(i);
                this.currentIndex = i
                // 让右侧的内容滚动到对应的位置
                // console.log(this.$refs.foodList);
                this.foodsScroll.scrollToElement(this.$refs.foodList[i],300)
            },
            _calculateHeight() {
                //  this.foodList
                let height = 0
                this.listHeight.push(height)
                this.foodList.forEach( li => {
                    height += li.clientHeight//获取每个菜系的高度
                    this.listHeight.push(height)//把每个菜系的高度存起来
                })
                console.log(this.listHeight);
            }
        }
    }
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

.goods{
    position: absolute;
    width: 100%;
    top: 177px;
    bottom: 46px;
    overflow: hidden;
    &-content{
        display: flex;
        height: 100%;
        .menu-wrapper{
            flex: 0 0 80px;
            background: @color-background-ssss;
            // overflow: scroll;
            .menu-item{
                padding: 0 14px;
                font-size: @fontsize-small ;
                height: 54px;
                display: flex;
                align-items: center;
                text-align: center;
                &.current{
                    background: @color-white;
                    font-weight: 700;
                }
            }
        }
        .foods-wrapper{
            flex: 1;
            .title{
                height: 26px;
                line-height: 26px;
                font-size: @fontsize-small;
                color: rgb(147, 153, 159);
                background-color: @color-background-ssss;
                padding-left: 14px;
                border-left: 1px solid #d9dde1;

            }
            .food-item{
                display: flex;
                padding: 18px;
                .pic{
                    flex: 0 0 57px;
                    margin-right: 10px;
                    img{
                        width: 100%;
                    }
                }
                .content{
                    flex: 1;
                    .name{
                        font-size: @fontsize-medium;
                        color: rgb(7, 17, 27);
                        margin: 2px 0 8px 0;
                    }
                    .desc,.extra{
                        font-size: @fontsize-small-s;
                        color: rgb(147, 153, 159);
                        margin-bottom: 8px;
                        line-height: 10px;
                        .count{
                            margin-right: 12px;
                        }
                    }
                    .price{
                        font-weight: 700;
                        line-height: 10px;
                        .now{
                            font-size: @fontsize-medium;
                            color: @color-red;
                            margin-right: 8px;
                        }
                        .old{
                            font-size: @fontsize-small-s;
                            color: rgb(147, 153, 159);
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }
    .cart-wrapper{
        position: fixed;//固定定位
        bottom: 0;
        width: 100%;
        height: 48px;
        background-color: #aaa;
    }
}
</style>