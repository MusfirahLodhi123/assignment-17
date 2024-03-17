// // Chapters 14-16------------------------

// // q1
// var studentsNames = [];
// // q3
// var studentsNames = ["Musfirah", "Sadia", "Husna", "Muntaha"];
// console.log(studentsNames);
// // q4
// var studentsMarks = [100, 200, 300, 400];
// console.log(studentsMarks);
// // q5
// var booleanArrays = [true,false];
// console.log(booleanArrays);
// // q6
// var mixedArrays = ["Musfirah", 100, true];
// console.log(mixedArrays);
// // q7
// var qualifications = [
//     'SSC',
//     'HSC',
//     'BCS',
//     'BS',
//     'BCOM',
//     'MS',
//     'M. Phil.',
//     'PhD'
//   ];
//   console.log(qualifications);
// //   q8
// var studentNames = ["Musfirah", "Sadia", "Husna", "Muntaha"];
// var scores = [100, 200, 300, 400];
// var totalMarks = 500;
// console.log('Score of ' + studentNames[0] + ' is ' + scores[0] + '. Percentage: ' + (scores[0] / totalMarks) * 100 + '%');
// console.log('Score of ' + studentNames[1] + ' is ' + scores[1] + '. Percentage: ' + (scores[1] / totalMarks) * 100 + '%');
// console.log('Score of ' + studentNames[2] + ' is ' + scores[2] + '. Percentage: ' + (scores[2] / totalMarks) * 100 + '%');
// // q9
// var colors = ["red", "blue", "green", "purple", "orange"];
// console.log(colors);
// var colortoaddtostart =prompt("Enter a color to add to the beginning of the array");
// colors.unshift(colortoaddtostart);
// console.log("your updated array:" + colors);
// colors.unshift("indigo", "royal blue");
// console.log("2 colors added:" + colors);
// colors.shift();
// console.log("color from beginning removed : " + colors);
// colors.pop();
// console.log("color removed from end: " + colors);
// var indexToAddColor = parseInt(prompt('Enter the index to add the color (starting from 0):'));
// var colorToAdd = prompt('Enter the name of color to add:');
// colors.splice(indexToAddColor, 0, colorToAdd);
// console.log('Updated array after adding color:', colors);
// var indexToremoveColor = parseInt(prompt('Enter the index to add the color (starting from 0):'));
// var numToremove = parseInt(prompt('Enter the name of color to add:'));
// colors.splice(indexToremoveColor, numToremove);
// console.log('Updated array after deleting color:', colors);
// // q10
// var citynames = ["Karachi", "Lahore", "Islamabad", "Multan"];
// console.log("list of cities: " + citynames);
// var selectedCities = citynames.slice(1,3);
// console.log("selected cities: " + selectedCities);

// // chap 17 to 20--------------------------------

// // q1
// var multiDArray=[[]];
// // q2
// var multiArray = ["0 1 2 3"+["<br>"+ "1 0 1 2"]+ ["<br>"+ "2 1 0 1"]];
// document.write(multiArray);
// // q3
// for (var i=0; i<=10; i++){
//     console.log(i);
// }
// // q5
// var table = +prompt("Enter number for table you wanna generate");
// var range = +prompt("Enter your desired range of table");
// for(var i = 1; i<=range; i++){
//     document.write(table + "*" + i + "=" + table*i + "<br>")
// };
// // q6
// var fruits = ["Apple", "banana", "mango", "orange", "strawbery"];
// console.log(fruits);
// for(i=0; i<=fruits.length; i++){
// console.log("Element at index " +i+ " is " + fruits[i])
// };
// document.write("<h1>Counting</h1>")
// for(i=1; i<=15; i++){
//     document.write( i )
// }
// document.write("<h1>Reverse Counting</h1>")
// for(i=10; i>=1; i--){
//     document.write( i )
// }
// document.write("<h1>Even</h1>")
// for(i=2; i<=20; i+=2){
//     document.write( i )
// }
// document.write("<h1>odd</h1>")
// for(i=1; i<=21; i+=2){
//     document.write( i )
// }
// document.write("<h1>Series</h1>")
// for(i=2; i<=20; i+=2){
//     document.write( i+"k" )
// }
// q7
// var x = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter an item to search");
// search = search.toLowerCase();
// var foundindex = -1
// for(var i = 0; i< x.length; i++){
//     if(x[i].toLowerCase() === search){
//         foundindex = i;
//         break;
//     }
// }
// if (foundindex !== -1){
//     console.log(search + " is found at index " + foundindex)
// } else{
//     console.log(search + " not found in the list")
// };
