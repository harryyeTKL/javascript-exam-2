const getNumberType = (number) => {
  if (Number.isInteger(number) && number > 0){
    return ((number % 2) === 0 )? "even number":"odd number"
  }else{
    return null;
  }
};

export default getNumberType;
