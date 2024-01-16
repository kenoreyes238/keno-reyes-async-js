// function compareFunctionsSpeed(testArgument, runAmount, ...funcs) {
//     let times = []; // Array to hold the execution times for each function


//     for (let func of funcs) {
//         let start = performance.now();


//         for (let i = 0; i < runAmount; i++) {
//             func(testArgument);
//         }


//         let end = performance.now();
//         times.push(end - start);
//     }


//     console.log(`You ran ${funcs.length} functions ${runAmount} times each.`);
//     for (let i = 0; i < funcs.length; i++) {
//         console.log(`Function ${i + 1} took ${times[i]} milliseconds.`);
//     }
// }


// // Example usage:
// compareFunctionsSpeed('g', 10000,getKeyAndFingerByChar1, getKeyAndFingerByChar2 );

function compareSpeeds(testArgs, runAmount, ...funcs) {
    let times = [];
    for (let func of funcs) {
        let start = performance.now();
    }
    for(let i = 0; i < runAmount; i++) {
        func(testArgs);
    }
    let end = performance.now();
    times.push(end - start);

    console.log(`you ran ${funcs.length} functions ${runAmount} times each`);
    for(let i = 0; i < funcs.length; i++) {
        console.log(`function ${i + 1} took ${times[i]} milisecs`);
    }
}