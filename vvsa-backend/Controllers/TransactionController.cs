using Microsoft.AspNetCore.Mvc;
using vvsa_backend.Service;
using vvsa_backend.ViewModels;

[ApiController]
[Route("api/transaction")]
public class TransactionController : ControllerBase
{
    private readonly ITransactionService transactionService;

    public TransactionController(ITransactionService transactionService)
    {
        this.transactionService = transactionService;
    }

    [HttpGet]
    public List<TransactionViewModel> GetAllTransactions()
    {
        return transactionService.GetAllTransactions();
    }

    public TransactionViewModel GetTransactionById(int id)
    {
        return transactionService.GetTransactionById(id);
    }

}