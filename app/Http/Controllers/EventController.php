<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Event', [
            'events' => Event::all(),
        ]);
    }

    public function store(Request $request)
    {
        Event::create($request->validate([
            'type' => ['required'],
            'title' => ['required', 'max:50'],
            'leader' => ['required', 'max:50'],
            'description' => ['nullable', 'max:255'],
            'location' => ['required', 'max:255'],
            'scheduled_at' => ['required', 'date'],
        ]));

        return redirect()->route('events.index');
    }

    public function update(Request $request, Event $event)
    {
        $event->update($request->validate([
            'type' => ['required'],
            'title' => ['required', 'max:50'],
            'leader' => ['required', 'max:50'],
            'description' => ['nullable', 'max:255'],
            'location' => ['required', 'max:255'],
            'scheduled_at' => ['required', 'date'],
        ]));

        return redirect()->route('events.index');
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return redirect()->route('events.index');
    }
}
