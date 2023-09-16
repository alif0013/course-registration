# Question 1: Add at least 3 Project features?

Here are three project features (this asignment) that can enhance the functionality and user experience of a website:

1. User can select the course as per his choice.
2. When user select a course a specific item add to the cart.
3. When user add to cart in a specific item user  can see the total credit hour and total remaining hour.

# Question 2: Discuss how you managed the state in your assignment project?

I'm manage my state to follow the react rules and some simple step by my acquired knowledge. Now i will discuss about this project bellow:-

1. At First i creat a react application with vite and install all the framework like tailwind and daisy ui. 

2. Then i creat a json file and make data with all requirement. 

3. I creat 2 componant (call the componant in app.jsx file) cards(w-[2/3]) and carts(w-[1/3]) like figma sample ui.

4. Then i fetch the data in cards componant and stored the value in cards useState.(this useState carries in emty arrays);

5. when i fetch and set the updated data then i run a daynamic loop like 
cards.map(card => <Card></card>) and creat a single card componant to showing single cards data.

6. Then i go to daiay ui and copy a card and past it the card componant and modify the design. and i creat a Onclick arrow function and pass the single data by course parameter. 

7. Then i go to app.jsx file and make a function named handCoursesBtn and declare a useState courses and set courses. then i copy this previous array and updates by calling setCourses function 
likesetCourses([...courses, course]);   (course is a single data recivier of card componant).

8. i pass the handCoursesBtn function by props drilling method . pass cards function recive the data cards function. there is no btn so i pass the data card componant by props and recive the data card componant and there is my btn .

9. Now my dynamic card is redy . But my cart is not ready. so i go to carts componant i do some design and make a dynamic loop(map) of courses object and creat a single cart componant for showing data dynamically on the cart componant.

10. The i go to app.jsx file and creat 2 useState named remaining and totalcredit hour for handling the dynamic calculation in carts componant. Here i send data by props drilling method and recive the data and destructure the object in carts and cart componant.

11. I apply the all condition and validation in app.jsx file in fullfill all the requirement .


 [Note: Dear Sir, I am not comfort to write in english. Sorry For the mistakes]