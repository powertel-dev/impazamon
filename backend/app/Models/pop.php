<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Pop extends Model
{
    use HasFactory;

    /*********    function getPop($suburb_id)
    {
        $data=DB::table('pops')->where('suburb_id',$suburb_id)->get();
        return $data;
    } */
    public function suburb()
    {
        return $this->belongsTo(Suburb::class);
    }


}
