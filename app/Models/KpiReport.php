<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KpiReport extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = ['reportName', 'data'];

    protected $casts = ['data' => 'array'];
}
