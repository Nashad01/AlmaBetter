// function square(n){
//     count = 0;
//    for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         count++;
//     }
//    }
//    return count
// }
// console.log(square(4))


// Suggested by ChatGPT
function square(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            count++;
            console.log(`i=${i}, j=${j}, count=${count}`);
        }
    }
    return count;
}
square(4);
