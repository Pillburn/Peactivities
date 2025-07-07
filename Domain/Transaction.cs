using System;

namespace Domain;

public class Transaction
{
    public required string TransactionId { get; set; }

    public required string TransactionLog { get; set; }
}
