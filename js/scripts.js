// Business Logic
function BankAccount(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

BankAccount.prototype.withdraw = function(amount) {
  return this.balance -= amount;
}

BankAccount.prototype.deposit = function(amount) {
  return this.balance += amount;
}

// User Interface Logic
var createBankAccountUI = function(account) {
  $('div#createdAccounts').append('<div class="col-md-3">' +
                                    '<h3>' + account.name + '</h3>' +
                                    '<form id="accountInterface">' +
                                      '<div class="form-group">' +
                                        '<label>Withdraw</label>' +
                                        '<input id="withdrawAmount" class="form-control" type="number">' +
                                      '</div>' +
                                      '<div class="form-group">' +
                                        '<label>Deposit</label>' +
                                        '<input id="depositAmount" class="form-control" type="number">' +
                                      '</div>' +
                                      '<button class="btn btn-primary" type="submit">Get new balance</button>' +
                                    '</form>' +
                                  '</div>');
}

$(function() {
  $("form#createNewAccount").submit(function(event) {
    event.preventDefault();

    var accountName = $("input#accountName").val();
    var initialDeposit = $("input#initialDeposit").val();
    var newBankAccount = new BankAccount(accountName, initialDeposit);

    createBankAccountUI(newBankAccount);
  });
});
