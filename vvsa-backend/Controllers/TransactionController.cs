using Microsoft.AspNetCore.Mvc;
using vvsa_backend.Service;
using vvsa_backend.ViewModels;

namespace vvsa_backend.DatabaseModel;

[ApiController]
[Route("api/transaction")]
public class TransactionController : ControllerBase
{
    private readonly ITransactionService transactionService;

    public TransactionController(ITransactionService transactionService)
    {
        this.transactionService = transactionService;
    }

    public List<TransactionViewModel> GetAllTransactions()
    {
        return transactionService.GetAllTransactions();
    }

    public TransactionViewModel GetTransactionById(int id)
    {
        return transactionService.GetTransactionById(id);
    }

    [HttpGet(Name = "GetTransaction")]
    public IEnumerable<Transaction> Get()
    {
        return [new Transaction()];
    }

}