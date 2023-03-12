<?php

namespace App\Http\Controllers;

use App\Models\Name;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function index()

    {
        $person = Name::all();
        return view('client.pages.Authentication.register', compact('person'));
    }
}
