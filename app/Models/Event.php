<?php

namespace App\Models;

use App\Enums\EventTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'title',
        'leader',
        'description',
        'location',
        'scheduled_at'
    ];

    protected $casts = [
        'type' => EventTypes::class,
    ];
}
