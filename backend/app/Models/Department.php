<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    public function technicians()
    {
        return $this->hasMany(Technician::class);
    }

    public function faults()
    {
        return $this ->hasMany(Fault::class);
    }
}
