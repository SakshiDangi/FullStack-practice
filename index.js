// 1. hollow square star pattern
// let n = 5;
// let string = "";
// for(let i=0; i<n; i++) {
//     for(let j=0; j<n; j++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// or this

// function half(n) {
//     let str = "*";
//     for (let i = 0; i<n-2; i++) {
//         str += " "
//     }
//     str += "*";
//     console.log(str);
// }

// function full(n) {
//     let str = "";
//     for (let i = 0; i<n; i++) {
//         str += "*";
//     }
//     console.log(str)
// }

// function complete(n) {
//     full(n);
//     for (let i = 0; i<n-2; i++) {
//         half(n);
//     }
//     full(n);
// }
// complete(10);


// -------  square pattern --------
// let n = 5; // row or column count
// // defining an empty string
// let string = "";
// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);


// ------- right angle triangle pattern ------
// let n = 10;
// let str = "";
// for (let i = 0; i<n; i++) {
//     for (let j = 0; j<n-i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k<i; k++) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);


// ------- downward angle triangle pattern ------
// let n = 10;
// str = "";
// for (let i = 0; i<n; i++) {
//     for (let j = 0; j<n-i; j++) {
//         str = str + "*";
//     }
//     for (let k = 0; k<i; k++) {
//         str = str + " ";
//     }
//     str += "\n";
// }
// console.log(str);


// ------- left angle triangle pattern ------
// let n = 10;
// str = "";
// for (let i = 0; i<n; i++) {
//     for (let j = 0; j<i; j++) {
//         str = str + "*";
//     }
//     for (let k = 0; k<n-i; k++) {
//         str = str + " ";
//     }
//     str += "\n";
// }
// console.log(str);


// ------- Hollow triangle pattern ------
// let n = 11;
// str = "";
// for (let i = 1; i<=n; i++) {
//     for (let j = 0; j<i; j++) {
//         if(i === n) {
//             str += "*";
//         }
//         else {
//             if (j == 0 || j == i-1) {
//                 str +="*";
//             }
//             else {
//             str += " ";
//             }
//         }  
//     }
//     str += "\n";
// }
// console.log(str);


// ------- pyramid pattern ------
// let n = 10;
// let str = "";
// //    external loop
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i ; j++) {
//         str += " ";
//     }
//     for (let k = 0; k< 2*i-1; k++) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);


// ------- reverse pyramid pattern ------
// let n = 10;
// let str = "";
// //    external loop
// for (let i = 0; i < n; i++) {
//     // printing spaces
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }
//      // printing star
//     for (let k = 0; k< 2 * (n-i) - 1; k++) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);



// ------- reverse pyramid pattern ------
// let n = 10;
// let str = "";
// //    external loop
// for (let i = 1; i <= n; i++) {
//     // printing spaces
//     for (let j = 1; j <= n-i; j++) {
//         str += " ";
//     }
//      // printing star
//     for (let k = 0; k< 2*i-1; k++) {
//         if (i === 1 || i === n) {
//             str += "*";
//         }
//         else {
//             if(k === 0 || k === 2 * i -2) {
//                 str += "*";
//             }
//             else {
//                 str += " ";
//             }
//         }
//     }
//     str += "\n";
// }
// console.log(str);


// ------- Diamond pattern ------
// let n = 10;
// let str = "";
// //    upside pyramid
// for (let i = 1; i <= n; i++) {
//    for (let j = n; j > i; j--) {
//     str += " ";
//    }
//    for (let k = 0; k < i * 2- 1; k++) {
//     str += "*";
//    }
//     str += "\n";
// }
// //    downside pyramid
// for (let i = 1; i <= n-1; i++) {
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }
//     for (let k = (n-i) * 2; k > 1; k--) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);


// ------- Hollow Diamond pattern ------
// let n = 10;
// let str = "";
// // upside pyramid
// for (let i = 1; i<=n; i++) {
//     for (let j = n; j > i; j--) {
//         str += " ";
//     }
//     for (let k = 0; k < i * 2 - 1; k++) {
//         if(k === 0 || k === 2 * i - 2) {
//             str += "*";
//         }
//         else {
//             str += " ";
//         }
//     }
//     str += "\n";
// }
// //  downside diamond
// for (let i = 1; i <= n-1; i++) {
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//         if (k === 1 || k === (n - i) * 2 - 1) {
//             str += "*";
//         }
//         else {
//             str += " ";
//         }
//     }
//     str += "\n";
// }
// console.log(str);


// -------- Hourglass Star Pattern --------
// let n = 10;
// let str = "";

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < (n-i) * 2 -1; k++) {
//         str += "*";
//     }
//     str += "\n";
// }
// for (let i = 2; i <= n; i++) {
//     for (let k = n; k > i; k--) {
//         str += " ";
//     }
//     for (let j = 0; j < i * 2 - 1; j++) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);


//  --------- Right pascal star pattern --------
// let n = 10;
// let str = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         str += "*";
//     }
//     str += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//     for (let j = 0; j < n - i; j++) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);


//  --------- Right pascal star pattern --------
// let n = 10;
// let str = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         str += "*";
//     }
//     str += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < n - i; k++) {
//         str += "*";
//     }
//     str += "\n";
// }
// console.log(str);



//  --------- Right pascal star pattern --------
var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
     // print first spaces
    for (let j = 1; j < n - i; j += 2) {
        str += " ";
    }
     // print first stars
    for (let j = 1; j < i + 1; j++) {
        str += "*";
    }
    // print second spaces
    for (let j = 1; j < n - i + 1; j++) {
      str += " ";
    }
    // print second stars
    for (let j = 1; j < i + 1; j++) {
      str += "*";
    }
    str += "\n";
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let j = 1; j < i * 2; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);