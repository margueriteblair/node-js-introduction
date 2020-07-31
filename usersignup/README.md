Create a new NPM Project
title: UserSignup
goal: create a homepage that allows the client to make a new user. Your frontend should send a request to your server API .
create a router for the home page, and one for user  related request
the home router only needs to handle a GET request from the root- route aka the homepage aka http://localhost:3000/
this router will send a static html page. This page will have a signup form taking in the following data
username, email, and password(twice to confirm).
when the form is submitted a request should be made to your server ip address at the endpoint /user/post/new
when the server recieves the data is should check it to make sure the data was entered correctly, and send an appropriate response.
This data does not need to be stored anywhere, just sent back to the client.