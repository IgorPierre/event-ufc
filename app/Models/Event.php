<?php

namespace App\Models;

use App\Enums\EventTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
