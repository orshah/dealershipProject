import "./agecalculator.style.css";

const AgeCalculator = () => {
  let birthYearInput = prompt("Enter your date of birth");
  const today = new Date();
  const currentYear = today.getFullYear();
  const getAge = currentYear - parseInt(birthYearInput);
  return (
    <h1>
      You are going to die, but for now, congrats! You are {getAge} 🎉🎉🎉
    </h1>
  );
};

export default AgeCalculator;
