public class Transaction
{
    public decimal TransactionId { set; get; }
    public string? FullName { set; get; }
    public TransactionType TransactionType { set; get; }
    public string? AccountNumber { set; get; }
    public string? BankCode { set; get; }
    public DateTime IssueDate { set; get; }
    public decimal Amount { set; get; }

}

public enum TransactionType
{
    Outgoing,
    Incoming,
Withdraw,
}