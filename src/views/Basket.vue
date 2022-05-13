<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-5">
                <div class="border d-flex flex-row mt-5 p-1">
                    <button @click="basketMethod()" class="btn btn-light text-center w-50 mx-1  border-start">سبد خرید</button>
                    <button @click="nextBasketMethod()" class="btn btn-light text-center w-50 mx-1 ">سبد خرید بعدی</button>

                </div>
                    <div>
                            <div v-if="basketGoods">
                                    <hr>
                                <div class="d-flex flex-row justify-content-around mt-5">
                                    <span >از غرفه دنیای جک گازی ایران</span>
                                    <span> یک کالا</span>
                                </div>
                                <div class="flex-column">
                                    <h4 class="mt-3 ">ارسال از غرفه به سراسر ایران رایگان می باشد
                                        <img class="img-fluid mt-2" src="../../src/assets/images/image2.png" alt="image-of product" style="width:100px">
                                    </h4>
                                    <span>آماده ارسال از یک روز دیگر</span>
                                    <div class="flex-row d-flex" >
                                        <div class="flex-column mx-3">
                                            <button @click="this.coutn++" class="btn btn-light">+</button>
                                            <button class="btn  btn-light" disabled >{{coutn}}</button>
                                            <button @click="this.coutn--" class="btn btn-light">-</button>
                                            <i class="fa fa-trash mx-3"></i>
                                        </div>

                                        <div class="flex-column mx-3">
                                                <span class="mx-3 mt-4">7400تومان</span>
                                                <span class="mx-3 mt-4">650000 تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="nextBasketGoods">
                                <p>خردی بعدی</p>
                            </div>
                    </div>
            </div>
            <div class="col-sm-3 border justify-content-center text-center mt-5 p-4">
                
                <div class="d-flex flex-column ">
                    <h6>جزییات قیمت</h6>
                    <div class="flex-row justify-content-around">
                        <span>قیمت محصولات</span>
                        <span>750 تومان</span>
                    </div>
                    <div class="d-flex flex-row">
                        <span class="text-danger mx-5">تخفیف محصولات</span>
                        <span class="text-danger mx-5">100 تومان </span>
                    </div>
                    <div>
                        <span class="mx-2 text-danger">هزینه ارسال</span>
                        <span class="mx-2 text-danger">وابسته به آدرس</span>
                    </div>
                    <hr>
                <div class="d-flex flex-column">
                    <button class="btn-danger btn mt-2">ادامه خرید از غرفه یک</button>
                    <span class="text-success mt-2">تضمین رضایت برگشت پول در مدت 7 روز</span>

                </div>                    
                </div>
                    <hr>
                    <div>

                    </div>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
</template>

<script>
    export default {    
        data(){
            return{
                basketGoods:true,
                nextBasketGoods:true,
                coutn:1
            }
        },
        methods:{
            basketMethod(){
                this.basketGoods=true;
                this.nextBasketGoods=false;
            },
            nextBasketMethod(){
                this.basketGoods=false;
                this.nextBasketGoods=true
            }
        }
    }
</script>

<style lang="scss" scoped>
button{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

button:link {
  color: red;
}

/* visited link */
button:visited {
  color: green;
}

/* mouse over link */
button:hover {
  color: hotpink;
}

/* selected link */
button:active {
  color: blue;
}
span{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>