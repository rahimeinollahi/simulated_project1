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
                                    <router-link class="dropdown-item text-center" to="/aboutme">درباره من</router-link>
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

                    <li class="nav-item">
                        <router-link class="nav-link" to="/" >خدمات</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" >آکادمی</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" >رتبه 1</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" >تماس با ما</router-link>
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
        name:"Navbar"
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