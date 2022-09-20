// function boolToWord( bool ){
//     if (bool) {
//       return 'Yes'
//     }
//     return 'No'
//   }

// function alphabetPosition(text) {

//     const alphabet = {

//         "A": "1",
//         "B": "2",
//         "C": "3",
//         "D": "4",
//         "E": "5",
//         "F": "6",
//         "G": "7",
//         "H": "8",
//         "I": "9",
//         "J": "10",
//         "K": "11",
//         "L": "12",
//         "M": "13",
//         "N": "14",
//         "O": "15",
//         "P": "16",
//         "Q": "17",
//         "R": "18",
//         "S": "19",
//         "T": "20",
//         "U": "21",
//         "V": "22",
//         "W": "23",
//         "X": "24",
//         "Y": "25",
//         "Z": "26"
        
//     }

//     const str = ''

//     for (let word of text) {
        
//     }

//     return 

// }


function fun(text) {
    const alphabet = {

        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "K": 11,
        "L": 12,
        "M": 13,
        "N": 14,
        "O": 15,
        "P": 16,
        "Q": 17,
        "R": 18,
        "S": 19,
        "T": 20,
        "U": 21,
        "V": 22,
        "W": 23,
        "X": 24,
        "Y": 25,
        "Z": 26
        
    }

    let result = ''

    for (let item of text) {
        if (item.match(/[a-zA-Z]/)) {
            let marker = item.toUpperCase()
            result = result + alphabet[marker] + ' '
        }
        
    }

    return result

}

console.log(fun("The sunset sets at twelve o' clock."))

function findOdd(A) {
    

    const counterObj = {}

    for (let i of A) {
        if (i in counterObj) {
            counterObj[i]++
        } else {
            counterObj[i] = 1
        }
    }


    for (let key in counterObj) {
        if (counterObj[key] % 2 !== 0) {
            return +key
        }
    }

    return +A[0]
    
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))