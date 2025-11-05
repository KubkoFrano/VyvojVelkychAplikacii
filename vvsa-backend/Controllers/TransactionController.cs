using Microsoft.AspNetCore.Mvc;
using vvsa_backend.Service;

namespace vvsa_backend.Controllers;

[ApiController]
[Route("[api/transaction]")]
public class TransactionController : ControllerBase
{
    private readonly ITransactionService transactionService;

    public TransactionController(ITransactionService transactionService)
    {
        this.transactionService = transactionService;
    }

    public List<Transaction> GetAllTransactions()
    {
        return transactionService.GetAllTransactions();
    }

    public Transaction GetTransactionById(int id)
    {
        return transactionService.GetTransactionById(id);
    }

    [HttpGet(Name = "GetTransaction")]
    public IEnumerable<Transaction> Get()
    {
        return [new Transaction()];
    }

}