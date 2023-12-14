// STEP NUMBER 1

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // STEP SECOND
  const withdrawNew = document.getElementById("withdraw-new");
  const withdrawNewString = withdrawNew.value;
  const NewWithdraw = parseFloat(withdrawNewString);

  withdrawNew.value = "";

  if (isNaN(NewWithdraw)) {
    alert("Please input valid number");
    return;
  }

  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalStrin = withdrawTotal.innerText;
  const totalWithdraw = parseFloat(withdrawTotalStrin);

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalString = balanceTotal.innerText;
  const balance = parseFloat(balanceTotalString);

  if (NewWithdraw > balance) {
    alert("Insufficient Balance");
    return;
  }

  const totalBalance = balance - NewWithdraw;
  balanceTotal.innerText = totalBalance;

  const finalWithdraw = totalWithdraw + NewWithdraw;
  withdrawTotal.innerText = finalWithdraw;
});
