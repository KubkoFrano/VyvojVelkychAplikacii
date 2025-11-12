namespace vvsa_backend.ViewModels;

public class TransactionViewModel
{
    public int TransactionId { get; set; }
    public string FullName { get; set; }
    public string TransactionType { get; set; }
    public string AccountNumber { get; set; }
    public string BankCode { get; set; }
    public DateTime IssueDate { get; set; }
    public decimal Amount { get; set; }

}