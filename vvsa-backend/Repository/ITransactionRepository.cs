using Microsoft.EntityFrameworkCore;
using vvsa_backend.DatabaseModel;

namespace vvsa_backend.DatabaseModel;

public interface ITransactionRepository
{
    List<Transaction> GetAllTransactions();
    Transaction GetTransactionById(int id);
}


public class TransactionRepository : ITransactionRepository
{

    private List<Transaction> transactions;
    private readonly Whiyes5oContext context;
    public TransactionRepository(Whiyes5oContext context)
    {
        this.context = context;
        Transaction trans1 = new Transaction { Id = 1 };
        Transaction trans2 = new Transaction { Id = 2 };

        transactions = new List<Transaction> { trans1, trans2 };
    }

    public List<Transaction> GetAllTransactions()
    {
        var result = this.context.Transactions
        .Include(p => p.User)
        .Include(p => p.TransactionType)
        .ToList();
        return result;
    }

    public Transaction GetTransactionById(int id)
    {
        var result = this.context.Transactions
        .Include(p => p.User)
        .Include(p => p.TransactionType)
        .FirstOrDefault(p => p.Id == id);
        return result;
    }
}