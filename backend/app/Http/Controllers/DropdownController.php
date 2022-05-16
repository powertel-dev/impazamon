<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use DB;
use App\Models\City;
use App\Models\Pop;
use App\Models\Suburb;
use App\Models\Customer;
use App\Models\link;

class DropdownController extends Controller
{

  public function getCityList(Request $req)
    {
        $cities= DB::table("cities")
                    ->select("city","id")
                    ->get();
        return response()->json($cities);
    }

    public function getSuburbList(Request $req)
    {
        $suburbs= DB::table("suburbs")
                    ->where("city_id",$req->city_id)
                    ->select("suburb","city_id","id")
                    ->get();
        return response()->json($suburbs);
    }

    public function getPopList(Request $req)
    {
        $pops= DB::table("pops")
                    ->where("suburb_id",$req->suburb_id)
                    ->select("pop","suburb_id","id")
                    ->get();
        return response()->json($pops);
    }


    /***** function getCity()
{
     
      $cityModel=new City();
      $data=$cityModel->getCity();
      return response()->json($data);
}

function getSuburb(Request $request)
{
    $city_id = $request->city_id;
    $suburbModel=new Suburb();
    $data=$suburbModel->getSuburb($city_id);
    return response()->json($data);
}

function getPop(Request $request)
{
    $suburb_id = $request->suburb_id;
    $popModel=new Pop();
    $data=$popModel->getPop($suburb_id);
    return response()->json($data);
}
 */

 public function getCustomer(Request $req)
 {
    $customers = DB::table("customers")
                     ->select("customerName","id")
                     ->get();
    return response()->json($customers);
 }

 public function getLink(Request $req)
 {
    $links = DB::table('links')
                    ->where("customer_id",$req->customer_id)
                    ->select('linkName','customer_id',"id")
                    ->get();
    return response()->json($links);
 }

}
