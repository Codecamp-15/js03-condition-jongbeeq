// let a = prompt();

// if (a != null && a.trim() != '' && !isNaN(a)) {
//     let b = prompt();
//     if (b != null && b.trim() != '' && !isNaN(b)) {
//         let c = prompt();
//         if (c != null && c.trim() != '' && !isNaN(c)) {
//         //##############วิ่่งได้#########
//             // let array = [a , b , c]
//             // function compareNumbers(b, a) {
//             //         return a - b;
//             // }
//             // let e = String(array.sort(compareNumbers))

//             // console.log(e)
//         //##################################
//         //##############ติด bug################
//             // if (a >= b && b >= c) {
//             //     console.log(`${a} , ${b} , ${c}`);
//             // } else if (a >= c && c >= b) {
//             //     console.log(`${a} , ${c} , ${b}`);
//             // } else if (b >= a && a >= c) {
//             //     console.log(`${b} , ${a} , ${c}`);
//             // } else if (b >= c && c >= a) {
//             //     console.log(`${b} , ${c} , ${a}`);
//             // } else if (c >= a && a >= b) {
//             //     console.log(`${c} , ${a} , ${b}`);
//             // } else if (c >= b && b >= a) {
//             //     console.log(`${c} , ${b} , ${a}`);
//             // }
//         //##################################
//         }
//     }
// }


//############เฉลย###########################
// V.0 แสดงเฉพาะตัวที่มากที่สุด
// V.1 Handleㆍ เลขที่ไม่เหมือนกัน
// V.2 Handle เลขที่เหมือนกันได้

let x = Number(prompt('Enter number 1'));
let y = +prompt('Enter number 2');
let z = prompt('Enter number 3') * 1;

let max
let mid
let min

// CASE1 : X มากสุด
// CASE2 : Y มากสุด
// CASE3 : Z มากสุด
// DRY Principle : Don't  Repeat Yourself

// // V.0 แสดงเฉพาะตัวที่มากที่สุด
// if (x > y && x > z) {
//     // console.log(`MAX = ${x}`);
//     Max = x;
// } else if (y > x && y > z) {
//     // console.log(`MAX = ${y}`);
//     Max = y;
// } else if (z > x && z> y) {
//     // console.log(`MAX = ${z}`);
//     Max = z;
// }

// console.log(`Max = ${Max}`)


// // V.1 Handle เลขที่ไม่เหมือนกัน : วิธี1
// if ( x > y && x > z) {
//     max = x;
//     if (y > z) {
//         mid = y;
//         min = z;
//     } else {
//         mid =z;
//         min = y;
//     }
// } else if ( y > x && y > z) {
//     max = y;
//     if (x > z) {
//         mid = x;
//         min = z;
//     } else {
//         mid = z;
//         min = x;
//     }
// } else if ( z > x && z > y) {
//     max = z;
//     if (x > y) {
//         mid = x;
//         min = y;
//     } else {
//         mid = y;
//         min = x;
//     }
// }

// console.log(`Max = ${max} Mid = ${mid} Min = ${min}`);

// V.1 Handle เลขที่ไม่เหมือนกัน : วิธี2
if (x >= y && x >= z && y >= z) {
    // x,y,z
    max = x;
    mid = y;
    min = z;
} else if (x >= y && x >= z && y < z) {
    max = x;
    mid = z;
    min = y;
} else if (y >= x && y >= z && x >= z) {
    max = y;
    mid = x;
    min = z;
} else if (y >= x && y >= z && x < z) {
    max = y;
    mid = z;
    min = x;
} else if (z >= x && z >= y && x >= y) {
    max = z;
    mid = x;
    min = y;
} else if (z >= x && z >= y && x < y) {
    max = z;
    mid = y;
    min = x;
}

console.log(`Max = ${max} Mid = ${mid} Min = ${min}`);

//############################################