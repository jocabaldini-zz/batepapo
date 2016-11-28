<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoomsController extends Controller
{
    public function index()
    {
        $rooms = Room::all();
        return view('rooms.index', compact('rooms'));
    }

    public function show($id)
    {
        $room = Room::find($id);
        if(!$room){
            throw new ModelNotFoundException("Sala não existente");
        }
        $user = Auth::user();
        $user->room_id = $room->id;
        $user->save();
        return view('rooms.show', compact('room'));
    }
}
