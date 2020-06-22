<template>
    <div class="bottom-bar">
        <div class="check-content"> 
            <check-button class="check-button"></check-button>
            <span>全选</span>
        </div>  

        <div class="price">
            合计：{{totalPrice}}   
        </div>   

        <div class="calculate">
            去计算：({{checkLength}})
        </div> 
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name: "CartBottomBar",
        components: {
            CheckButton
        },
        computed: {
            totalPrice() {
                return '￥' + this.$store.state.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.price * item.count
                },0)
            },
            checkLength() {
                return this.$store.state.cartList.filter(item => item.checked).length
            }
        }
    }
</script>

<style scoped>
    .bottom-bar{
        position: relative;
        display: flex;
        height: 40px;
        background-color: #eee;       
        line-height: 40px;    
    }

    .check-content {
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 60px;
    }

    .check-button {
        width: 22px;
        height: 22px;
        line-height: 22px;
        margin-right: 5px;
    }

    .price {
        margin-left: 30px;
        flex: 1;
    }

    .calculate {
        width: 100px;
        background-color: red;
        color: #fff;
        text-align: center;
    }
</style>