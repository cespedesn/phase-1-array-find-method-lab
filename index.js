const winsAndLosses = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

// const sadReality =  [ 
//     { year: "2018", result: "N/A"},
//     { year: "2017", result: "N/A"},
//     { year: "2016", result: "N/A"},
// ]


function superbowlWin(winsAndLosses) {
    const result = winsAndLosses.find(winsAndLosses => winsAndLosses.result === 'W');
    return result ? result.year : undefined
}

superbowlWin(record);




// function testFN(data) {
//     data.forEach(element => {
        
//     })
// }
// console.log(record); 




// function superbowlWin(winsAndLosses) {
//     return winsAndLosses.find(aDub).year;
//  }


// function aDub(winsAndLosses) {
//     if(winsAndLosses.result === 'W') {
//         return true;
//     } else {
//         return undefined;
//     }
// }

// function noDub(soSad) {
//     if(sadReality.result === 'N/A') {
//         return true;
//     } else {
//         return false;
//     }
// }


// function soSad(noDub) {
//     if(sadReality.result === 'N/A') {
//         return undefined;
//     }
// }
