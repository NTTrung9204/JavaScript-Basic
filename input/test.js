function Check(){
    var form = document.getElementsByClassName("input__form");
    var warning = document.getElementsByClassName("warning");
    var infor = document.getElementsByClassName("input__type");
    for(let i=0;i<form.length;i++){
        form[i].onblur = function (e){
            if(e.target.value==""){
                warning[i].innerHTML = `Lỗi. ${infor[i].innerHTML} không được để trống!`
            }
        }
        form[i].onfocus = function (){
            warning[i].innerHTML = ``;
        }
    }
    function f(e){
        if(!form[1].value.includes("@gmail.com")){
            warning[1].innerHTML = `Lỗi. Mail không hợp lệ!`;
            e.preventDefault()
        }
        if(form[2].value.length<8){
            warning[2].innerHTML = `Lỗi. Mật khẩu quá ngắn!`;
            e.preventDefault()
        }
        for(let i=0;i<form.length;i++){
            if(form[i].value==""){
                warning[i].innerHTML = `Lỗi. ${infor[i].innerHTML} không được để trống!`
                e.preventDefault()
            }
        }
    }
    var submit = document.getElementsByClassName("submit")[0];
    submit.onclick = function(e){
        f(e);
    }
}
function Create(){
    document.getElementsByClassName("button")[0].style.display =  "none";
    var Ele = document.createElement("div");
    Ele.classList.add("form");
    document.body.appendChild(Ele);
    Ele.innerHTML = `
        <div class="regis">
            <a class="regis__item">
                <ion-icon class="icon" name="logo-youtube"></ion-icon>
                <span class="text">Đăng ký với Youtube</span>
            </a>
            <a class="regis__item">
                <ion-icon class="icon" name="logo-facebook"></ion-icon>
                <span class="text">Đăng ký với Facebook</span>
            </a>
            <p class="tip">Mẹo: Đăng ký nhanh hơn với Youtube hoặc Facebook</p>
        </div>
        <div class="or">
            <span class="or__text">Hoặc</span>
        </div>
        <div class="input">
            <p class="input__type">
                Họ và tên
            </p>
            <input class="input__form"  placeholder="Eg. Nguyễn Thành Trung" type="text">
            <span class="Warning"></span>
        </div>
        <div class="input">
            <p class="input__type">
                Email
            </p>
            <input class="input__form"  placeholder="Eg. trungpro@gmail.com" type="text">
            <span class="Warning"></span>
        </div>
        <div class="input">
            <p class="input__type">
                Mật khẩu
            </p>
            <input class="input__form"  placeholder="Eg. Nhập mật khẩu" type="password">
            <span class="Warning"></span>
        </div>
        <div class="boxtick">
            <input class="tick" type="checkbox">
            <span class="tick__text">Nhận thông báo về các tin tức & sự kiện mới nhất của chúng tôi. (Có thể hủy đăng ký bất cứ lúc nào.)</span>
        </div>
        <a href="" class="submit">Đăng ký</a>
        <p class="term">
            Bằng cách đăng ký, bạn đồng ý với các 
            <a href="">điều khoản sử dụng </a> 
            của chúng tôi
        </p>
    `
    var perform = document.getElementsByClassName("form")[0];
    setTimeout(function (){
        perform.style.position = "relative";
        perform.style.marginTop = "50px";
        perform.style.marginBottom = "50px";
    },1000);
    Check()
}