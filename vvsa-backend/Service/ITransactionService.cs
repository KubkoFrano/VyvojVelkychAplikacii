using vvsa_backend.Repository;

namespace vvsa_backend.Service;

public interface ITransactionService
{
    public List<Transaction> GetAllTransactions();
    Transaction GetTransactionById(int id);
}

public class TransactionService : ITransactionService
{

    private readonly ITransactionRepository transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        this.transactionRepository = transactionRepository;
    }
    public List<Transaction> GetAllTransactions()
    {
        return transactionRepository.GetAllTransactions();
    }

    public Transaction GetTransactionById(int id)
    {
        return transactionRepository.GetTransactionById(id);
    }
}