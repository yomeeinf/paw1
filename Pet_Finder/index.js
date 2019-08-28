var express=require("express");
var app=express();
//default route //
app.use("/",require("/home"));
//signUp route this route will inclued signup form  which will create new user account//
app.use("/signUp",require("/signUp"));
//login route will check login credentials of user and will redirect them to userProfile route//
app.use("/logIn",require("/logIn"));
//userProfile route will display all the user info. here user can add,delete and update pet info//
app.use("/userProfile",require("/userProfile"));
//pets route will display all the pets available in db regardless of category(i.both cats and dogs )//
app.use("/pets",require("/pets"));
//seperate route only for dogs //
app.use("/dogs",require("/dogs"));
//seperate route only for cats //
app.use("/cats",require("/cats"));
app.listen(3000);