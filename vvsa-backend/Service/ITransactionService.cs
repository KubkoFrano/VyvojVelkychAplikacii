using Microsoft.EntityFrameworkCore.Metadata.Internal;
using vvsa_backend.DatabaseModel;
using vvsa_backend.ViewModels;
using vvsa_backend.Repository;

namespace vvsa_backend.Service;

public interface ITransactionService
{
    public List<TransactionViewModel> GetAllTransactions();
    TransactionViewModel GetTransactionById(int id);
}

public class TransactionService : ITransactionService
{

    private readonly ITransactionRepository transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        this.transactionRepository = transactionRepository;
    }
    public List<TransactionViewModel> GetAllTransactions()
    {
        var newList = new List<TransactionViewModel>();

        var oldList = transactionRepository.GetAllTransactions();

        foreach (var trans in oldList)
        {
            var viewModel = new TransactionViewModel
            {
                AccountNumber = trans.AccountNumber,
                Amount = trans.Amount,
                BankCode = trans.BankCode,
                FullName = trans.User.Name,
                IssueDate = trans.IssueDate,
                TransactionType = trans.TransactionType.Name
            };

            newList.Add(viewModel);
        }
        return newList;
    }

    public TransactionViewModel GetTransactionById(int id)
    {
        var trans = transactionRepository.GetTransactionById(id);
        var viewModel = new TransactionViewModel
        {
            AccountNumber = trans.AccountNumber,
            Amount = trans.Amount,
            BankCode = trans.BankCode,
            FullName = trans.User.Name,
            IssueDate = trans.IssueDate,
            TransactionType = trans.TransactionType.Name
        };
        return viewModel;
    }
}