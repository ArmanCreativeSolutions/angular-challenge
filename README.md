# Javascript Ticket Challenge


The volleyball Federation decided to use an online selling platform for the next season, and our company has been chosen for implementing that.

# Requirements

In this challenge, you are going to develop a **responsive web application** to show stadium seats
randomly to user and user can select a seat. The basic application implemented and page designs are ready. You need to complete the application.


# What is your task?
1. Fork and clone this repository. You should complete the "ticket-challenge" angular application.
2. There are two components in the project. You should complete them according to this document and design file.
3. Make the implementation responsive.
4. You should change the color of selected seats after user click. Also, you should log the coordinates of the selected seat.


# APIs
Base URL: https://ticket-challange.herokuapp.com

* `GET /map`


Get the list of map ids.
You should use this endpoint to get the list and choose one of the stadium maps randomly

* `GET /map/<map_id>`


Get map detail and show seats

in the response: 1 means reserved, and 0 means seat available to buy

# Implementation details

Try to write your code as **reusable** and **readable** as possible.
Also, don't forget to **document your code** and clear the reasons for all your decisions in the code.

It is more valuable to us that the project comes with unit tests

Please don't use any CSS framework (like bootstrap, material, ...)

Don't forget that many stadium seats are available (around 100k) so try to implement your code in a way that could show it smoothly.
If your solution does not sample enough for implementing fast, you can just describe it in your documents.

Please fork this repository and add your code to that. Don't forget that your commits are so important.
So be sure that you're committing your code often with a proper commit message.
