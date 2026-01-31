//JS DAY - 5.1

//NESTED LOOPS WITH ARRAYS

// //EXAMPLE 1: BASIC PATTERN
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j=${j}`);
        
//     }
// }

// //EXAMPLE 2: MULTIPLICATION TABLE
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
        
//     }
// }

// //EXAMPLE 3: STAR PATTERN - RIGHT TRIANGLE
// for (let i = 1; i<=5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
    
// }

// //EXAMPLE 4: NUMBER GRID
// for (let row = 1; row <= 4; row++){
//     let line = "";
//     for (let col = 1; col <= 4; col++) {
//         line += col + "";
//     }
//     console.log(line);
    
// }

// //EXAMPLE 5: SQUARE PATTERN
// let size = 5;
// for (let i = 1; i <= size; i++) {
//     let row = "";
//     for (let j = 1; j <= size; j++) {
//         row += "#";
//     }
//     console.log(row);
    
// }

//FOR LOOPS WITH NESTED ARRAYS

// //EXAMPLE 1: SIMPLE 2D ARRAY
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for (let i = 0; i <matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
    
//     }
// }