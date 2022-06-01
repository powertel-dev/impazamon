<?php

namespace App\Models;
use DB;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;


    /********     function getCity()
    {
        $data=DB::table('cities')->get();
        return $data;
    } 
 */
    public function suburbs()
    {
        return $this->hasMany(Suburb::class);
    }

}
