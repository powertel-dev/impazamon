<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Suburb extends Model
{
    use HasFactory;

    /**********       function getSuburb($city_id)
    {
        $data=DB::table('suburbs')->where('city_id',$city_id)->get();
        return $data;
    }  */

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function pops()
    {
        return $this->hasMany(Pop::class);
    }


}
