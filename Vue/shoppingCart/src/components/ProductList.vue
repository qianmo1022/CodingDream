<template>
    <ul>
        <li
            v-for="product in products"
            :key="product.id"    
        >
            {{ product.title }} - {{ currency(product.price)  }}
            <br>
            <button
                :disabled="!product.inventory"
                @click="addProductToCart(product)"
            >Add to Cart</button>
        </li>
    </ul>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { currency } from '../currency';
const store = useStore(); //状态树
// 借 | 接
console.log(store);
const products = computed(() => store.state.products.all); //计算属性
const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product);
// console.log(products);
// 派遣一个工作 dispatch commit
store.dispatch('products/getAllProducts')

</script>

<style scoped>

</style>