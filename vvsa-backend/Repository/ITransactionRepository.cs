namespace vvsa_backend.Repository;

public interface ITransactionRepository
{
    List<Transaction> GetAllTransactions();
    Transaction GetTransactionById(int id);
}

public class TransactionRepository : ITransactionRepository
{

    private List<Transaction> transactions;

    public TransactionRepository()
    {
        Transaction trans1 = new Transaction { TransactionId = 1 };
        Transaction trans2 = new Transaction { TransactionId = 2 };

        transactions = new List<Transaction> { trans1, trans2 };
    }

    public List<Transaction> GetAllTransactions()
    {
        return transactions;
    }

    public Transaction GetTransactionById(int id)
    {
        return transactions.FirstOrDefault(t => t.TransactionId == id);
    }
}