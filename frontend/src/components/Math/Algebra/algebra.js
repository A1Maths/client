import { simplify, evaluate, parse, bignumber, add, subtract } from "mathjs";
// const mathjs = require('mathjs');
// import * as mathjs from 'mathjs';
// const { parse, bignumber, simplify, evaluate } = mathjs;


const randomIntegerOrLetterGenerator = () => {
    const characters = 'abcdefghijklmnpqrstuvwxyz0123456789';
    const length = characters.length;
    return characters.charAt(Math.floor(Math.random() * length));
}

const randomLetterGenerator = () => {
    //excluded o for clarity
    const lowerCaseCharacters ='abcdefghijklmnpqrstuvwxyz';
    const length = lowerCaseCharacters.length;
    return lowerCaseCharacters.charAt(Math.floor(Math.random() * length));
}

const randomIntegerBetween = (min, max) => {
    return Math.floor(Math.random()*(max-min+1) + min);
}

const generateSingleTerms = (numberOfTerms) => {
    let arrayOfTerms = [];
    for (let i=0; i<numberOfTerms; i++){
        arrayOfTerms.push(randomIntegerOrLetterGenerator());
        console.log('inside the forloop' + arrayOfTerms)
    }
    console.log(arrayOfTerms)
    return arrayOfTerms;
}


const generateMultiplyingSingleTerms = (numberTermsSelected=7) => {
    // const arr = numberTermsSelected === 0 ? generateSingleTerms(2) : generateSingleTerms(numberTermsSelected);
    const termsToMultiply = generateSingleTerms(numberTermsSelected);
    const question = termsToMultiply.join(' * ');
    console.log('question is ' + question + ' and ' + typeof question)
    const answer = simplify(question).toString();
    console.log(answer)
    return {
    question,
    answer
    }
}


const generateOneStepLinearEquation = () => {
    const equation = '4 = x - 2';

    // Split the equation into left-hand side and right-hand side
    const sides = equation.split('=');

    // Determine which side has the variable
    const hasVariable = sides.findIndex(side => side.includes('x'));

    // Convert both sides to `Node` objects
    const lhsNode = parse(sides[hasVariable === 0 ? 1 : 0]);
    const rhsNode = parse(sides[hasVariable]);

    // Convert the `Node` objects to numbers using `mathjs.evaluate`
    const lhsValue = evaluate(lhsNode);
    const rhsValue = evaluate(rhsNode);

    // Isolate the variable by either adding or subtracting the right-hand side from/to the left-hand side
    const isolatedValue = hasVariable === 0 ? lhsValue + rhsValue : lhsValue - rhsValue;

    console.log(`x = ${isolatedValue}`); // x = 6
    const question = equation;
    const answer = `x = ${isolatedValue}`

    return {
        question,
        answer
    }
}


export {
    generateOneStepLinearEquation,
    generateMultiplyingSingleTerms
}