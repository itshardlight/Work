function spinWheel() {
  const deposit = document.getElementById("deposit").value;
  const wheel = document.getElementById("wheel");
  const bonusOutputElement = document.getElementById("bonus-output");
  const percentageElement = document.getElementById("percentage");

  if (!deposit || deposit <= 0) {
    alert("Please enter a valid deposit amount");
    return;
  }

  let randomPercentage;

  // Bonus percentage logic based on deposit amount
  if (deposit >= 1 && deposit <= 10) {
    randomPercentage = Math.floor(Math.random() * 30) + 1; // 1% to 30%
  } else if (deposit > 10 && deposit <= 20) {
    randomPercentage = Math.floor(Math.random() * 20) + 1; // 1% to 20%
  } else if (deposit > 20 && deposit <= 30) {
    randomPercentage = Math.floor(Math.random() * 10) + 1; // 1% to 10%
  } else if (deposit > 30) {
    randomPercentage = 10; // 10% bonus for deposits above 30
  }

  // Calculate the bonus amount (1% to 30% based on deposit)
  const bonusAmount = (deposit * randomPercentage) / 100;

  // Calculate the total amount (deposit + bonus)
  const totalAmount = parseFloat(deposit) + bonusAmount;

  // Update the percentage inside the wheel
  percentageElement.textContent = randomPercentage + "%";

  // Display the bonus and total amount
  bonusOutputElement.textContent = `The bonus amount of ${deposit} is ${bonusAmount.toFixed(
    2
  )}, total loading amount is ${totalAmount.toFixed(2)}.`;

  // Add spin animation
  wheel.classList.add("spin");

  // Remove the spin class after the animation completes
  setTimeout(() => {
    wheel.classList.remove("spin");
  }, 3000); // 3 seconds duration for the spin animation
}

// Reset bonus when input field is clicked
document.getElementById("deposit").addEventListener("click", function () {
  document.getElementById("bonus-output").textContent = "Bonus Amount: 0";
  document.getElementById("percentage").textContent = "0%";
  document.getElementById("wheel").classList.remove("spin");
});
