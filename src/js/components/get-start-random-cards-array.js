import getRandomIntUniqueNumbersArray from './get-random-int-unique-numbers-array';

const randomIntUniqueNumbersArray = getRandomIntUniqueNumbersArray();

export default array => {
  const randomCardArray = [];

  for (let i = 0; i < randomIntUniqueNumbersArray.length; i += 1) {
    const numberFromArray = randomIntUniqueNumbersArray[i];
    const randomCard = array[numberFromArray];

    randomCardArray.push(randomCard);
  }
  return randomCardArray;
};
