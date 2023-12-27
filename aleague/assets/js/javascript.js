// control next step quen mat khau
$("#bottom-sheet-forgot-password .step-1 .run-to-step2").click(function(){
    $("#bottom-sheet-forgot-password .step-1").addClass("display-none");
    $("#bottom-sheet-forgot-password .step-2").removeClass("display-none");
});

$("#bottom-sheet-forgot-password .step-2 .run-to-step3").click(function(){
    $("#bottom-sheet-forgot-password .step-2").addClass("display-none");
    $("#bottom-sheet-forgot-password .step-3").removeClass("display-none");
});

$("#bottom-sheet-forgot-password .step-3 .run-to-step4").click(function(){
    $("#bottom-sheet-forgot-password .step-3").addClass("display-none");
    $("#bottom-sheet-forgot-password .step-4").removeClass("display-none");
});

// control next step tao tai khoan
$("#bottom-sheet-create-account .step-1 .run-to-step2").click(function(){
    $("#bottom-sheet-create-account .step-1").addClass("display-none");
    $("#bottom-sheet-create-account .step-2").removeClass("display-none");
});

$("#bottom-sheet-create-account .step-2 .run-to-step3").click(function(){
    $("#bottom-sheet-create-account .step-2").addClass("display-none");
    $("#bottom-sheet-create-account .step-3").removeClass("display-none");
});

$("#bottom-sheet-create-account .step-3 .run-to-step4").click(function(){
    $("#bottom-sheet-create-account .step-3").addClass("display-none");
    $("#bottom-sheet-create-account .step-4").removeClass("display-none");
});

// control back step
$(".step-2 .back-to-step1").click(function(){
    $(".step-1").removeClass("display-none");
    $(".step-2").addClass("display-none");
});

$(".step-3 .back-to-step2").click(function(){
    $(".step-2").removeClass("display-none");
    $(".step-3").addClass("display-none");
});






// close bottom-sheet
$(".close-bottom-sheet, .single-selection").click(function(){
    $("body").removeClass("popup-active");
    $(".bottom-sheet").removeClass("active");
});

// Open bottom sheet forgot password 
$(".open-bottom-sheet-forgot-password").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-forgot-password").addClass("active");
});


// Open bottom sheet thành tích khác
$(".open-bottom-sheet-thanhtichkhac").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-thanhtichkhac").addClass("active");
})

// Open bottom sheet tooltip
$(".open-bottom-sheet-tooltips").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-tooltips").addClass("active");
});


// Open bottom sheet cập nhận trận đấu
$(".open-bottom-sheet-capnhattrandau").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-capnhattrandau").addClass("active");
});



// Create account
$(".open-bottom-sheet-create-account").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-create-account").addClass("active");
});

// Open bottom sheet policy
$(".open-bottom-sheet-policy").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-policy").addClass("active");
});


// Open bottom sheet cccd
$(".open-bottom-sheet-cccd").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-cccd").addClass("active");
});

// Open bottom sheet edit ban tổ chức
$(".open-bottom-sheet-edit-bantochuc").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-edit-bantochuc").addClass("active");
});

// Open bottom sheet loại sân
$(".open-bottom-sheet-loaisan").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-loaisan").addClass("active");
});

// Open bottom sheet đội bóng
$(".open-bottom-sheet-doibong").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-doibong").addClass("active");
});

// Open bottom sheet số vòng đấu
$(".open-bottom-sheet-sovongdau").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-sovongdau").addClass("active");
});


// Open bottom sheet tạo trận đấu
$(".open-bottom-sheet-taotrandau").click(function(){
    $("body").addClass("popup-active");
    $("#bottom-sheet-taotrandau").addClass("active");
});

$(".open-bottom-sheet-chondoibong").click(function(){
    $("#bottom-sheet-taotrandau .thongtintran").addClass("display-none");
    $("#bottom-sheet-taotrandau .chondoibong").removeClass("display-none");
});


// control back step tạo trận đấu
$(".back-to-thongtintran").click(function(){
    $("#bottom-sheet-taotrandau .thongtintran").removeClass("display-none");
    $(".chondoibong").addClass("display-none");
});



// tạo cầu thủ
// js control tạo giải đấu
$(".themcauthuchinhthuc .to-step2").click(function(){
    $(".themcauthuchinhthuc .step1").css("display","none");
    $(".themcauthuchinhthuc .step2").css("display","block");
    $(".progressBar .current").css("width","50%");
});

$(".themcauthuchinhthuc .to-step3").click(function(){
    $(".themcauthuchinhthuc .step2").css("display","none");
    $(".themcauthuchinhthuc .step3").css("display","block");
    $(".progressBar .current").css("width","75%");
});

$(".themcauthuchinhthuc .to-final-step").click(function(){
    $("body").addClass("popup-active");
    $("#popup-success").addClass("active");
});

$(".themmoiungvien .to-final-step").click(function(){
    $("body").addClass("popup-active");
    $("#popup-success").addClass("active");
});



// js control tạo giải đấu
$(".taogiaidau .to-step2").click(function(){
    $(".taogiaidau .step1").css("display","none");
    $(".taogiaidau .step2").css("display","block");
    $(".progressBar .current").css("width","50%");
});

$(".taogiaidau .to-step3").click(function(){
    $(".taogiaidau .step2").css("display","none");
    $(".taogiaidau .step3").css("display","block");
    $(".progressBar .current").css("width","75%");
});

$(".taogiaidau .to-step4").click(function(){
    $(".taogiaidau .step3").css("display","none");
    $(".taogiaidau .step4").css("display","block");
    $(".progressBar .current").css("width","100%");
});

$(".taogiaidau .to-final-step").click(function(){
    $("body").addClass("popup-active");
    $("#popup-success").addClass("active");
});


/// js control tạo mùa giải
$(".taomuagiai .to-step2").click(function(){
    $(".taomuagiai .step1").css("display","none");
    $(".taomuagiai .step2").css("display","block");
    $(".progressBar .current").css("width","50%");
});

$(".taomuagiai .to-final-step").click(function(){
    $("body").addClass("popup-active");
    $("#popup-success").addClass("active");
});


/// js control tạo lịch thi đấu vòng
$(".taolichthidauvong .to-step2").click(function(){
    $(".taolichthidauvong .step1").css("display","none");
    $(".taolichthidauvong .step2").css("display","block");
    $(".progressBar .current").css("width","50%");
});

$(".taolichthidauvong .to-final-step").click(function(){
    $("body").addClass("popup-active");
    $("#popup-success").addClass("active");
});



/// js control tạo đội bóng
$(".taodoibong .to-step2").click(function(){
    $(".taodoibong .step1").css("display","none");
    $(".taodoibong .step2").css("display","block");
});

$(".taodoibong .to-final-step").click(function(){
    $("body").addClass("popup-active");
    $("#popup-success").addClass("active");
});


// tab control
function chitietmuagiai(chitiet) {
    var i;
    var x = document.getElementsByClassName("tabs-content-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(chitiet).style.display = "block";  
}

// tab control cau thu
function chitietcauthu(chitiet) {
    var i;
    var x = document.getElementsByClassName("tabs-cauthu-content-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(chitiet).style.display = "block";  
}

// tab control
function chitietvongdau(chitiet) {
    var i;
    var x = document.getElementsByClassName("tabs-content-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(chitiet).style.display = "block";  
}

// tab control đội bóng
function chitietdoibong(chitiet) {
    var i;
    var x = document.getElementsByClassName("tabs-doibong-content-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(chitiet).style.display = "block";  
}

// tab control
function thuhangmua(loai) {
    var i;
    var x = document.getElementsByClassName("tabs-thuhangmua-content-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(loai).style.display = "block";  
}


// tab control
function contentLive(loai) {
    var i;
    var x = document.getElementsByClassName("tabs-content-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(loai).style.display = "block";  
}

// tab control
function thongso(loai) {
    var i;
    var x = document.getElementsByClassName("tab-content-thongso");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(loai).style.display = "block";  
}

// control style tab thong so
$(".tabs-thongso .tab").click(function(){
    $(".tabs-thongso .tab").removeClass("active");
    $(this).addClass("active");
});





// control style tab
$(".tabs-control .tab").click(function(){
    $(".tabs-control .tab").removeClass("active");
    $(this).addClass("active");

    $(".taomuagiai .step1").css("display","none");
    $(".taomuagiai .step2").css("display","block");
    $(".progressBar .current").css("width","50%");
});

// control style tab
$(".tabs-thuhangmua-control .tab-thuhangmua").click(function(){
    $(".tabs-thuhangmua-control .tab-thuhangmua").removeClass("active");
    $(this).addClass("active");

});



// collapse cầu thủ tham dự

$(".doithamdu .doithamdu-header .toggle").click(function(){
   $(this).toggleClass("collapse");
   $(this).parent().parent().parent("doithamdu-body").toggleClass("hidden")
});

// checkbox cầu thủ tham đự
$(".cauthuthamdu .checkbox").click(function(){
    $(this).toggleClass("checked");
 });

 // checkbox thong tin bo sung
$(".thongtinbosung .checkbox").click(function(){
    $(this).toggleClass("checked");
 });

 // checkbox cầu thủ tham đự
$(".chondoibong .doibong").click(function(){
    $(".chondoibong .doibong").removeClass("active");
    $(this).addClass("active");
 });
