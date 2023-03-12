<?php

namespace App\Http\Controllers;

use App\Models\Name;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('client.pages.index');
    }
    public function teacher()
    {
        $person = Name::all();
        return view('client.pages.teacher', compact('person'));
    }
}
