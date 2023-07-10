
const operatorGenerator = () => {
    const operators = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
}

const integerOrLetterGenerator = () => {
    const characters = 'abcdefghijklmnpqrstuvwxyz0123456789';
    const length = characters.length;
    return characters.charAt(Math.floor(Math.random() * length));
}

const letterGenerator = () => {
    //excluded o for clarity
    const lowerCaseCharacters ='abcdefghijklmnpqrstuvwxyz';
    const length = lowerCaseCharacters.length;
    return lowerCaseCharacters.charAt(Math.floor(Math.random() * length));
}

const integerBetween = (min, max) => {
    return Math.floor(Math.random()*(max-min+1) + min);
}



export {
    integerBetween,
    integerOrLetterGenerator,
    letterGenerator,
    operatorGenerator
}