<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'teacher Doe',
            'email' => 'teacher@lekhapora.com',
            'password' => Hash::make('password'),
            'role' => 'teacher',
            'remember_token' => Str::random(10),
        ]);

        DB::table('users')->insert([
            'name' => 'student Doe',
            'email' => 'student@lekhapora.com',
            'password' => Hash::make('password'),
            'role' => 'student',
            'remember_token' => Str::random(10),
        ]);

        // You can add more users here...
    }
}
