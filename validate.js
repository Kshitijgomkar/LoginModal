$(document).ready(function(){


    $('logout_btn').click(function(){
        var lastname = sessionStorage.getItem("response[i].username");
        alert(lastname);
    });
// User Login Authentication Query ---------------------
    $("#but_submit").click(function(){
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
                            window.sessionStorage;
                            sessionStorage.setItem("response[i].username", "response[i].id");
                        }
                      }
                      if(logged){
                        window.location.href= './logout.html';
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
                        alert("USer not registered");
                    }
                }
            });
        }
    });

   
});

