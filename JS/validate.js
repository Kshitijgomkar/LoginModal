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
                url:'http://localhost:3000/login',
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
                url:'http://localhost:3000/admin',
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
                url:'http://localhost:3000/login',
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


// Sign Up Modal for User ---------------------------

function validation(e){
    
    if (document.getElementById('rPassword').value != document.getElementById('password_again').value) {
      
        document.getElementById("repeat_pwd").innerHTML = "<p style='color:red'>Password is not matching!!!</p>";
        return false;
}
return true;
}

$("#signUp").click((e)=>{
    e.preventDefault();
    var flag = validation(e);
  
    if(flag){
        console.log("posting");
        var name=$("#Name").val();
        var email=$("#sEmail").val().toLowerCase();
        var password=$("#rPassword").val();
        if( email != "" && password != "" && name != ""){    
        $.ajax({
            url:"http://localhost:3000/login",
            method:"POST",
            data:{
                "name":name,
                "username": email,
                "password":password
            },
            success:(x)=>{
                alert("Registration successful...");
            },
            error:(e1)=>{
                alert("error"+e1);
            }
        
        });
    }
}else{
    alert("Form not complete");
}
    })  


// Caraousal Categories Data --------------------------
    $.ajax({
        url: "http://localhost:3000/categories",
        method: "GET",
        success:(element)=>{
            for (var i = 0; i < element.length; i++) {
                console.log(element);
                if(element[i].id <= 1 ){
                    $('#mycarousal').append(" <div class='carousel-item row active'><div class='col-md-4  divAlign'><div class='card card-body peopleCarouselImg'><img class='img-fluid' src='"+element[i].url+"'><h2>"+element[i].name+"</h2> <br> <h4>"+ element[i].data+"<h4></div></div> </div> </div>")  ;
                }else{
                    $('#mycarousal').append(" <div class='carousel-item row '><div class='col-md-4 divAlign'><div class='card card-body peopleCarouselImg'><img class='img-fluid' src='"+element[i].url+"'><h2>"+element[i].name+"</h2> <br> <h4>"+ element[i].data+"<h4></div></div></div>")  ;
                }
            } 
        }
    });
});
