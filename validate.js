$(document).ready(function(){
    $("#but_submit").click(function(){
        var username = $("#userEmail").val();
        var password = $("#userPass").val();
        var logged=false;
        if( username != "" && password != "" ){
            $.ajax({
                url:'http://localhost:3000/login/',
                type:'get',
                success:function(response){
                    // console.log(response);
                    for (var i=0; i < response.length; i++) {
                        if ( username == response[i].username && password == response[i].password){
                            logged=true;
                        }
                      }
                      if(logged){
                        alert(" User Login successfully");
                   } else{
                           alert("Invalid username and password for user");
                        }
                }
                  
            });
        }
    });

    $("#admin_btn_submit").click(function(){
        var usernameAdmin = $("#adminEmail").val();
        var passwordAdmin = $("#adminPassword").val();
        var logged=false;
        if( usernameAdmin != "" && passwordAdmin != "" ){
            $.ajax({
                url:'http://localhost:3000/admin/',
                type:'get',
                success:function(response){
                    // console.log(responseAdmin);
                    for (var i=0; i < response.length; i++) {
                        if ( usernameAdmin == response[i].username && passwordAdmin == response[i].password){
                            logged=true;
                            // console.log(response[i]);
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
});