// program to generate random strings
// declare all character
//ABCDEFGHIJKLMNOPQRSTUVWXYZ

const randomOperatorGenerator = () => {
    const operators = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
}


export {
    randomOperatorGenerator
}