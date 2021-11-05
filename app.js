////    CHAPTER 13-15   ////

/// Q1 ///

// var JS = [];

// console.log(JS);


/// Q2 ///

// var JS = [];

// JS[0] = "Ahmed";

// console.log(JS);



////    Q3 /////


// var names = ["Ahmed" , "Abdullah" , "Owais"];

// console.log(names);


////    Q4 ////

// var num = [20 , 10 , 11];

// console.log(num);


////    Q5 ////


// var boolen = [true , false];

// console.log(boolen);



////    Q6 /////


// var mixArr = ["Ahmed" , "umer" , 10 , 11 , true , false];

// console.log(mixArr);



////    Q7 ////


// var quaArr = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]

// console.log(quaArr);

// document.write("1)" + quaArr[0] );
// document.write( " <br>2) " + quaArr[1] );
// document.write( "<br> 3)" + quaArr[2] );
// document.write( "<br> 4)" + quaArr[3] );
// document.write( "<br> 5)" + quaArr[4] );
// document.write( "<br> 6)" + quaArr[5] );
// document.write( "<br> 7)" + quaArr[6] );
// document.write( "<br> 8)" + quaArr[7] );




////    Q8 /////


// var stdArr = ["Muhammed" , "Mustafa" , "Ahmed"]

// var scoreArr = [480, 400 , 350]

// var total = 500;

// var percentages = scoreArr / total * 100

// console.log(stdArr , scoreArr , total )
// console.log(percentages)

// document.write(stdArr)
// document.write("<br>" ,scoreArr)
// document.write(total)
// document.write(percentages)




/// Q9 ////



// var colorName = ["green" , "black" , "white"]

// colorName.unshift("yellow")
// colorName.push("grey")
// colorName.unshift("blue" , "red")
// colorName.pop()
// colorName.splice(4 , 0 , "pink")
// colorName.splice(4,1)


// document.write(colorName);



///     Q10 ////



// var scoreStd = [320 , 230 , 500 , 300]

// scoreStd.sort()

// document.write(scoreStd)



/// Q11 ///


// var cities =["karachi" , "islamabad" , "lahore" , "multan","hyderabad"]

// var selCities = cities.slice(1,4)

// document.write(selCities)


/// Q12 ///


// var arr = ["This" , "is", "my" , "cat"]

// var arr1 = arr.join(" ")

// document.write(arr1)



/// Q13 ///


// var newArr = ["keybord" , "Mouse" , "Speaker" , "Lcd"]

// console.log(newArr)

// newArr.shift()
// newArr.shift()
// newArr.shift()
// newArr.shift()

// document.write(newArr)



/// Q14 ///


// var newArr = ["keybord" , "Mouse" , "Speaker" , "Lcd"]

// console.log(newArr)

// newArr.pop()
// newArr.pop()
// newArr.pop()
// newArr.pop()








////    CHAPTER 17-20 //////




/// Q1   ////

// var multiDmt = [[]];

// console.log(multiDmt)




////    Q3 /////


// for(var i = 1 ; i <= 10 ; i++ ){

//     document.write( i + "<br>")
// }



////    Q4 /////

// var tableNum = +prompt("Enter Table Number")

// var tableLength = +prompt("Enter Table Length")

// for(var i = 1 ; i <= tableLength ; i++){

//     document.write(tableNum + "x" + i + "=" + tableNum*i + "<br>")
// }


////    Q5 /////

// var fruits = ["apple" , "banana","mango","orange","strawberry"]

// console.log(fruits);

// for(var i = 0 ; i < fruits.length ; i++ ){

//     document.write(fruits[ i ] + "<br>");
// }



/// Q6 ////


// for(var i = 1 ; i <= 15 ; i++ ){

//     document.write( i + "<br>");
// }

// for(var i = 15 ; i >= 1 ; i-- ){

//     document.write( i + "<br>");
// }


// for(var i = 0 ; i <= 20 ; i = i+2 ){

//     document.write( i + "<br>");
// }

// for(var i = 1 ; i <= 19 ; i = i + 2 ){

//     document.write( i + "<br>");
// }

// for(var i = 2 ; i <= 20 ; i = i + 2 ){

//     document.write( i + ("k") , "<br>");
// }



////    Q7 ////


// var bakery =  prompt("Welcome to ABC bakery")

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]

// var ismar = "no";

// for ( var i = 0 ; i < bakery.length ; i++ ){

//     if(bakery === a[i]){

//         alert("available")
//         ismar = "yes"
//     }
// }

// if(ismar == "no"){
//     alert("not available")
// }



///   Q10 ////


// for(var i = 1 ; i <= 20 ; i++){

//     document.write(5 * i );
    
// }



