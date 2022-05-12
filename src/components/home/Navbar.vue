<template>
    <div class="fixed-top">
        <div class="mt-2">
            <ul class="nav  ">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">فایل</a>

                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item text-center" to="/basket">سبد خرید</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item text-center" to="/aboutus">درباره من</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item text-center" to="/myskills">مهارت های من</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item text-center" to="/exitpage">خروج</router-link>
                                </li>
                            </ul>

                </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/website" >وب سایت</router-link>
                    </li>

                    <li class="nav-item drpdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" >خدمات</a>
                        <ul class="dropdown-menu">
                            <li v-for="item in serviceItems" :key="item.id">
                                <router-link class="dropdown-item text-center" :to="item.itemPath">{{item.itemName}}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" >آکادمی</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" >رتبه 1</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/aboutus" >تماس با ما</router-link>
                    </li>

                    <li class="float-left mx-5">
                        <form action="">
                             <div class="input-group">
                                 <input type="text" class="form-control" placeholder="Username">
                                <span class="input-group-text bg-info"><i class="fa fa-search"/></span>
                                </div>
                        </form>
                    </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Navbar",
        data(){
            return{
                serviceItems:[
                    {id:1, itemName:'طراحی سایت',itemPath:'/'},
                    {id:1, itemName:'تبلیغات در گوگل ادوردز',itemPath:'/'},
                    {id:1, itemName:'مشاوره کسب و کار',itemPath:'/'},
                    {id:1, itemName:'افزایش رتبه سایت',itemPath:''},
                    {id:1, itemName:'افزایش فروش اینترنتی',itemPath:'/'},
                    {id:1, itemName:'پکیج انفجار فروش',itemPath:'/'},
                    {id:1, itemName:'شرکت برندیگ',itemPath:'/'},
                ]
            }
        }
    
    }
</script>

<style lang="scss" scoped>
a{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

li a:hover {
    display: block;
}
</style>