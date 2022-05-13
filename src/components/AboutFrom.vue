<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-2"></div>

            <div class="col-sm-4 mt-3">
                <img src="../../src/assets/images/contact-us-image.png" alt="image-contact-us" class="img-fluid p-3">
            </div>
            <div class="col-sm-4 text-center mt-3">
                <h4 class="text-info">تماس با ما</h4>
                <p>
                            در صورت نیاز به برقراری ارتباط
                            می توانید فرم تماس را تکمیل و ارسال کنید تا کارشناسان
                            ما در کمتر از 4 ساعت کاری با شما تماس بگیرند
                     </p>
                     <p class="mt-2">همچنین در صورت نیاز به تماس فوری میتوانید از راههای زیر اقدام نمایید</p>

                     <div>

                     </div>
            </div>

            <div class="col-sm-2"></div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-6">
               <div class="d-flex flex-column text-center mt-3 text-info">
                   <h3>سوال دارید؟</h3>
                   <h5>پیام خودر را ارسال کنید.</h5>
               </div>
               <div class="row">
                   <div class="col-sm-6 text-center d-flex flex-row w-100 mt-3">
                       <input type="text" class="form-control w-50 mx-2 bg-light rounded" placeholder="نام" id="txt-names" name="txt-names">
                       <input type="text" class="form-control w-50 mx-2 bg-light rounded" placeholder="شماره تلفن" id="txt-names" name="txt-names">
                       
                   </div>
                   <div class="flex-column">
                       <form action="">
                           <input type="text" class="form-control mt-3 w-100" placeholder="موضوع" id="txt-issue" name="txt-issue">
                           <textarea  class="form-control mt-3 " placeholder="پیام" id="txt-area-messge" name="txt-area-message"></textarea>
                           <input type="submit" class="btn btn-info w-100 mt-3 p-3 text-white" value="ارسال">
                       </form>
                   </div>
               </div>

            </div>
            <div class="col-sm-6">
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200996.77942159562!2d46.153641076808384!3d38.08028521066957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a05175b8429e1%3A0x59cb1dc6f21233fb!2sTabriz%2C%20East%20Azerbaijan%20Province%2C%20Iran!5e0!3m2!1sen!2sfr!4v1652378882983!5m2!1sen!2sfr" 
                width="600" height="450" ُ
                style="border:0;" allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe> -->
               
                    
                        
            </div>
        </div>
        <div class="row mt-3 border p-3 border-end">
            <div class="col-sm-3">
                <h3 class=" text-info">شماره موبایل</h3>
            </div>

            <div class="col-sm-3">
                  <h3 class=" text-danger">شماره تلفن</h3>
            </div>
            <div class="col-sm-3">
                  <h3 class=" text-info">شماره نشانی</h3>
            </div>
            <div class="col-sm-3">
                  <h3 class=" text-danger">آدرس ایمیل</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'AboutUs'
    }
</script>

<style lang="scss" scoped>
p{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    text-align: right;
}
hr{
    height: 5px;
}
</style>