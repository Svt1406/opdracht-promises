// opdracht 1: 

// const testNum = (num) => { 
//     return new Promise ((resolve, reject) => {
//         if (num > 10) {
//             resolve(num + ' is greater than 10');
//         } else {
//             reject(num + ' is less than 10');
//         }
//     });
// };

// testNum(18)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

//opdracht 2:

const makeAllCaps = (words) => { 
    return new Promise((resolve, reject) => { 
       if ( words.every(word => { 
            return typeof word === 'string';
        })
    )   {
        resolve(
            sortWords( 
                words.map(word => {
                    return word.toUpperCase();
                })
            )
        );
        } else {
            reject ('not a string');
        }
    });
};

const sortWords = (words) => { 
    return new Promise ((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject('string only!');
        }
    });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(complicatedArray) 
    .then(sortWords(complicatedArray))
    .then(result => console.log(reult))
    .catch(error => console.log(error));

