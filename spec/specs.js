describe("BankAccount", function() {
  it("creates a bank account with name and balance properties", function() {
    var testBankAccount = new BankAccount("Mike", 500);
    expect(testBankAccount.name).to.equal("Mike");
    expect(testBankAccount.balance).to.equal(500);
  });
});
