import { simplify, evaluate, parse, bignumber, add, subtract, unaryMinus, unaryPlus } from "mathjs";
import { operatorGenerator, integerBetween, letterGenerator, integerOrLetterGenerator } from "../generators";

const generateSingleTerms = (numberOfTerms) => {
    let arrayOfTerms = [];
    for (let i=0; i<numberOfTerms; i++){
        arrayOfTerms.push(integerOrLetterGenerator());
    }
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

// if (Math.random() < 0.5) {
//     equation = `${letter} ${operator} ${first} = ${second}`;
// } else if (Math.random() >= 0.5 && Math.random() < 0.75) {
//     equation = `${first} ${operator} ${letter} = ${second}`;
// } else {
//     equation = `${first} = ${letter} ${operator} ${second}`;
// }

const generateOneStepLinearEquation = () => {
    const question = "";
    const answer = '';
    return {
        question,
        answer
    }
}


export {
    generateOneStepLinearEquation,
    generateMultiplyingSingleTerms
}