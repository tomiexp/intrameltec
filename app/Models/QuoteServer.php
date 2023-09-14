<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuoteServer extends Model
{
    use HasFactory;

    protected $table = 'quote_servers';

    protected $fillable = [
        'client_server_id',
        'server_id',
        'discount',
        'total_mounth',
        'total_amount',
        'total_year',
    ];
}
