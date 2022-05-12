<template>
    <div class="mt-5" id="website-id">
        <div >
           <div>
               <div class="row d-flex flex-row justify-content-center">
                   <div class="col-sm-1"></div>
                   <div class="col-sm-3">
                       <form action="" class="pt-5 pb-5 px-2">
                            <input type="text" placeholder="نام" id="txt-uname" name="txt-uname" class="form-control mx-1">
                       </form>
                   </div>
                   
                   <div class="col-sm-3 justify-content-center">

                        <form action="" class="pt-5 pb-5 px-2">
                            <input type="text" placeholder="تلفن" id="txt-tel" name="txt-tel" class="form-control mx-1">
                       </form>


                   </div>
                       <div class="text-center mt-3 mb-3">
                           <button id="btn-consultant" class="btn btn-warning p-3">درخواست مشاوره تلفنی</button>
                       </div>
                    <div class="col-sm-2"></div>
               </div>
           </div>
        </div>

        <div>
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-3">
                    <div class="mt-3">
                        <h3 class="text-white text-center">رتبه 1</h3>
                        <p class="text-white">
                                    رتبه یک، ارائه دهنده حرفه ای         
                                    خدمات تبلیغات در گوگل، سئو و طراحی سایت میباشد که از 
                                    سال 1390 فعالیت خود
                                    را آغاز کرده و با برخورداری از تیمی جوان
                                    و خلاق، به یکی از بهترین ها در این زمینه تبدیل شده است.
                        </p>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="text-center">
                        <h3 class="text-white">اطلاعات تماس</h3>
                        <span class="d-block text-white mt-3">پشتیبانی 24 ساعته و 7 روز در هفته</span>
                        <span class="d-block text-white mt-3"> <i class="fa fa-mobile"></i> 09147861734</span>
                        <span class="d-block text-white mt-3"> <i class="fa fa-mobile"></i> 0216585129</span>
                        <span class="d-block text-white mt-3"> <i class="fa fa-search"></i> تبریز-4راه عباسی کوی شهدا</span>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="text-center">
                        <h3 class="text-white mt-3">دسترسی سریع</h3>
                        <router-link class="nav-link text-center text-white" to="/" >شارژ اکانت گوگل ادوردز</router-link>
                        <router-link class="nav-link text-center text-white" to="/" >ساخت اکانت گوگل ادوردز</router-link>
                        <router-link class="nav-link text-center text-white" to="/" >ساخت اکانت گوگل ادوردز</router-link>
                        <router-link class="nav-link text-center text-white" to="/" >ثبت شکایت</router-link>
                    </div>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </div>
        <div>
            <div class="row flex-row d-flex">
                <div id="icons-bottom">
                    <router-link class="mx-3" to="/"> <i class="fa fa-instagram text-white"></i></router-link>
                    <router-link class="mx-3" to="/"> <i class="fa fa-whatsapp text-white"></i></router-link>
                    <router-link class="mx-3" to="/"> <i class="fa fa-facebook text-white"></i></router-link>
                    <router-link class="mx-3" to="/"> <i class="fa fa-telegram text-white"></i></router-link>
                    <router-link class="mx-3" to="/"> <i class="fa fa-youtube text-white"></i></router-link>
                </div>
            </div>
        </div>

        <div>
            <ul class="nav">
                <li class="nav-item" v-for="item in bottomItems" :key="item.id">
                    <router-link class="nav-link border-start text-white mt-3" :to="item.itemRoute">{{item.itemName}}</router-link>
                </li>

                
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SampleWebsite',
        data(){
            return{
                bottomItems:[
                    {id:1, itemName:"صفحه اصلی" ,itemRoute:'/'},
                    {id:2, itemName:"تماس با ما" ,itemRoute:'/'},
                    {id:3, itemName:"درباره ما" ,itemRoute:'/'},
                    {id:4, itemName:"شرایط و قوانین" ,itemRoute:'/'},
                    {id:5, itemName:"ثبت شکایات" ,itemRoute:'/'},
                    {id:6, itemName:"تعرفه ها" ,itemRoute:'/'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
#website-id{
    background-image: url('../../assets/images/image3.png');
    background-repeat: no-repeat;
}
button{
    border-radius: 10px;
}
p{
    line-height: 45px;
}
#icons-bottom a{
    font-size: 30px;
} 
li a{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
    border: 2px solid white;
    margin: 5px;
    padding: 5px;
}
#btn-consultant:hover{
    transform: skew(-12deg);
    transform: translateY(5px);
}
</style>