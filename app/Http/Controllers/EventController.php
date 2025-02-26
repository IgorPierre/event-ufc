<?php

namespace App\Http\Controllers;

use App\Enums\EventTypes;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        // Filtra os eventos pelo ID do usuário logado
        $events = Event::where('user_id', Auth::user()->id)->get();

        return Inertia::render('Dashboard', [
            'events' => $events,
            'eventTypes' => EventTypes::labels(),
        ]);
    }

    public function store(Request $request)
    {
        // Cria o evento e associa ao usuário logado
        $request->user()->events()->create($request->validate([
            'type' => ['required'],
            'title' => ['required', 'max:50'],
            'leader' => ['required', 'max:50'],
            'description' => ['nullable', 'max:255'],
            'location' => ['required', 'max:255'],
            'scheduled_at' => ['required', 'date'],
        ]));

        return redirect()->route('dashboard');
    }

    public function update(Request $request, Event $event)
    {
        // Atualiza o evento, garantindo que ele pertença ao usuário logado
        if ($event->user_id === $request->user()->id) {
            $event->update($request->validate([
                'type' => ['required'],
                'title' => ['required', 'max:50'],
                'leader' => ['required', 'max:50'],
                'description' => ['nullable', 'max:255'],
                'location' => ['required', 'max:255'],
                'scheduled_at' => ['required', 'date'],
            ]));
        }

        return redirect()->route('dashboard');
    }

    public function destroy(Event $event)
    {
        // Deleta o evento, garantindo que ele pertença ao usuário logado
        if ($event->user_id === $request->user()->id) {
            $event->delete();
        }

        return redirect()->route('dashboard');
    }
}
