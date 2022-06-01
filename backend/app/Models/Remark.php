<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Remark extends Model
{
    use HasFactory;

    public function fault()
    {
        return $this->belongsTo(Fault::class);
    }
}
