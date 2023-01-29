import { simplify, evaluate, parse, bignumber, add, subtract, unaryMinus, unaryPlus } from "mathjs";
import { randomOperatorGenerator } from "../generator";
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

    const first = randomIntegerBetween(0,20);
    const second = randomIntegerBetween(0,20);
    const letter = randomLetterGenerator()
    const operator = randomOperatorGenerator();
    let equation = '';
    if (Math.random() < 0.5) {
        equation = `${letter} ${operator} ${first} = ${second}`;
    } else if (Math.random() >= 0.5 && Math.random() < 0.75) {
        equation = `${first} ${operator} ${letter} = ${second}`;
    } else {
        equation = `${first} = ${letter} ${operator} ${second}`;
    }
    
    const question = equation;
    console.log(question);

    // Split the equation into left-hand side and right-hand side
    const sides = equation.split('=');

    // Determine which side has the variable
    const hasVariable = sides.findIndex(side => side.includes(letter));
    const valueToFlip = sides[hasVariable].replace(/\s/g, '').replace(letter, '');

    //converts values to number type
    const inverseValue = unaryMinus(valueToFlip);
    const valueOtherSide = unaryPlus(sides[hasVariable === 0 ? 1 : 0]);

    const solution = add(inverseValue, valueOtherSide);
    const answer = solution.toString();

    return {
        question,
        answer
    }
}


export {
    generateOneStepLinearEquation,
    generateMultiplyingSingleTerms
}