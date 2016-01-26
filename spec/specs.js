describe("BankAccount", function() {
  it("creates a bank account with name and balance properties", function() {
    var testBankAccount = new BankAccount("Mike", 500);
    expect(testBankAccount.name).to.equal("Mike");
    expect(testBankAccount.balance).to.equal(500);
  });
  it("will add the withdraw method to BankAccount objects", function() {
    var testBankAccount = new BankAccount("Mike", 500);
    expect(testBankAccount.withdraw(200)).to.equal(300);
  });
  it("will add the deposit method to BankAccount objects", function() {
    var testBankAccount = new BankAccount("Mike", 500);
    expect(testBankAccount.deposit(200)).to.equal(700);
  });
});
