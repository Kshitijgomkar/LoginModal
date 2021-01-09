$(document).ready(function(){
    $('logout_btn').click(function(){
        var lastname = sessionStorage.getItem("response[i].username");
        alert(lastname);
    });
// User Login Authentication Query ---------------------
    $("#user_login_modal").click(function(){
        var username = $("#userEmail").val();
        var password = $("#userPass").val();
        var logged=false;
        if( username != "" && password != "" ){
            $.ajax({
                url:'http://localhost:3000/login/',
                type:'get',
                success:function(response){
                    for (var i=0; i < response.length; i++) {
                        if ( username == response[i].username && password == response[i].password){
                            logged=true;
                            // window.sessionStorage;
                            // sessionStorage.setItem("response[i].username", "response[i].id");
                        }
                      }
                      if(logged){
                        alert("User login success");
                   } else{
                           alert("Invalid username and password for user");
                        }
                } 
            });
        }
    });

// Admin Login Authentication Query ------------------
    $("#admin_btn_submit").click(function(){
        var usernameAdmin = $("#adminEmail").val();
        var passwordAdmin = $("#adminPassword").val();
        var logged=false;
        if( usernameAdmin != "" && passwordAdmin != "" ){
            $.ajax({
                url:'http://localhost:3000/admin/',
                type:'get',
                success:function(response){
                    for (var i=0; i < response.length; i++) {
                        if ( usernameAdmin == response[i].username && passwordAdmin == response[i].password){
                            logged=true;
                        }
                      }
                      if(logged){
                        alert("admin Login successfully");
                   }else{
                           alert("Invalid username and password for Admin");
                        }
                }
            });
        }
    });

// Forgot password Query ----------------------------
    $('#forgot_pass').click(function(){
        var email = $('#emailForgotPass').val();
        var logged = false;
        var password;
        if(email != ''){
            $.ajax({
                url:'http://localhost:3000/login/',
                type:'get',
                success:function(response){
                    for(var i =0;i< response.length; i++){
                        if( email == response[i].username)
                        {
                            logged=true;
                            password = response[i].password;
                        }
                    }
                    if(logged){
                        alert("Password for the user is : " +password);
                    }else{
                        alert("Oops....User not found...!!");
                    }
                }
            });
        }
    });


// Caraousal Categories Data --------------------------
$.ajax({
    url: "http://localhost:3000/categories",
    method: "GET",
    success:(x)=>{
        var cards = 0;
        x.forEach(element => {
            if(cards < 3){
                $('#carouselExampleControls').append("  <div class='carousel-inner'><div class='carousel-item active'>   <div class='col-md-3' style='float:left'><div class='card mb-2'><img class='card-img-top' src= '"+ element.url +"' alt='Card image cap'><div class='card-body'><h4 class='card-title'>"+  element.name +"</h4> <p class='card-text'>" + element.data+ "</p><a class='btn btn-primary'>Button</a></div></div></div></div></div>")    
                cards = cards + 1;
            }else{
                $('#carouselExampleControls').append("  <div class='carousel-inner'><div class='carousel-item '>   <div class='col-md-3' style='float:left'><div class='card mb-2'><img class='card-img-top' src= '"+ element.url +"' alt='Card image cap'><div class='card-body'><h4 class='card-title'>"+  element.name +"</h4> <p class='card-text'>" + element.data+ "</p><a class='btn btn-primary'>Button</a></div></div></div></div></div>")    
            }
            });
    }
})

   
});
