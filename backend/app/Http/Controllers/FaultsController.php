<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fault;
use App\Http\Requests\FaultRequest;

class FaultsController extends Controller
{



    public function createfault(FaultRequest $req)
    {
        Fault::create($req->all())->makeHidden(['faultType', 'deleted_at']);
    }

    public function getfaults()
    {
        return Fault::all();
        return response()->json(auth()->user());
    }

    public function add(Request $req)
    {
        $fault = new Fault;
        $fault->customerName=$req->customerName;
        $fault->contactName=$req->contactName;
        $fault->phoneNumber=$req->phoneNumber;
        $fault->contactEmail=$req->contactEmail;
        $fault->address=$req->address;
        $fault->accountManager=$req->accountManager;
        $fault->city=$req->city;
        $fault->suburb=$req->suburb;
        $fault->pop=$req->pop;
        $fault->linkName=$req->linkName;
        $fault->suspectedRfo=$req->suspectedRfo;
        $fault->serviceAttribute=$req->serviceAttribute;
        $fault->serviceType=$req->serviceType;
        $fault->remarks=$req->remarks;
        $fault->status=$req->status;
        $result=$fault->save();

        if($result)
        {
            return ["Result"=>"Data successfully added"];
        }
        else{
            return ["Result"=>"Oparation Failed"];
        }
    }


}
