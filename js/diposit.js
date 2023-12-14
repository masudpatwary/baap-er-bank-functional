// Diposit Amount and sum of Total Diposit

// step number 1
//*
document.getElementById("btn-diposit").addEventListener("click", function () {
  //*
  // step number 2
  const newDipositAmount = document.getElementById("new-diposit");
  const newDipositAMountString = newDipositAmount.value;
  const newDiposit = parseFloat(newDipositAMountString);
  //*
  // step 3
  newDipositAmount.value = "";

  if (isNaN(newDiposit)) {
    alert("Please input a valid number");
    return;
  }

  //*/
  // step 4
  const dipositTotal = document.getElementById("diposit-total");
  const dipositTotalString = dipositTotal.innerText;
  const diposit = parseFloat(dipositTotalString);
  //*
  // step 5
  const finalDiposit = diposit + newDiposit;
  dipositTotal.innerText = finalDiposit;

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalString = balanceTotal.innerText;
  const balance = parseFloat(balanceTotalString);

  const currentBalance = balance + newDiposit;
  balanceTotal.innerText = currentBalance;
});
