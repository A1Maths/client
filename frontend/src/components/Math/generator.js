// program to generate random strings
// declare all character
//ABCDEFGHIJKLMNOPQRSTUVWXYZ

export const randomIntegerBetween = (min, max) => {
    return Math.floor(Math.random()*(max-min+1) + min);
}

export const randomLetterGenerator = () => {
    //excluded o for clarity
    const lowerCaseCharacters ='abcdefghijklmnpqrstuvwxyz';
    const length = lowerCaseCharacters.length;
    return lowerCaseCharacters.charAt(Math.floor(Math.random() * length));
}

export const randomIntegerOrLetterGenerator = () => {
    //excluded o for clarity
    const characters = 'abcdefghijklmnpqrstuvwxyz0123456789';
    const length = characters.length;
    return characters.charAt(Math.floor(Math.random() * length));
}

export const generateSingleTerms = (numberOfTerms) => {
    let arrayOfTerms = [];
    for (let i=0; i<numberOfTerms; i++){
        arrayOfTerms.push(randomIntegerOrLetterGenerator());
        console.log('inside the forloop' + arrayOfTerms)
    }
    console.log(arrayOfTerms)
    return arrayOfTerms;
}


// export {
//     randomIntegerBetween,
//     randomLetterGenerator,
//     randomIntegerOrLetterGenerator,
//     generateSingleTerms
// }