<?php

namespace App\Http\Controllers;

use App\Enums\EventTypes;
use App\Models\Event;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $events = Event::all();

        return Inertia::render('Home', [
            'events' => $events,
            'eventTypes' => EventTypes::labels(),
        ]);
    }
}
