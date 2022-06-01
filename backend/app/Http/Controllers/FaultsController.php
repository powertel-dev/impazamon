<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Fault;
use App\Http\Requests\FaultRequest;

class FaultsController extends Controller
{


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createfault(FaultRequest $req)
    {
        Fault::create($req->all())->makeHidden(['faultType', 'deleted_at']);
    }

       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getfaults()
    {
        return Fault::all();
       // return response()->json(auth()->user());
    }

        /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getfault($id)
    {
        return Fault::find($id);
    }

        /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FaultRequest $request, $id)
    {
        $fault = Fault::find($id);
        if(is_null($fault))
        {
            return response()->json(["message" => "fault not found"],404);
        }
        $fault ->update($request->all());
        return response()->json([
            "message" => "record updated successfully"
        ],200);
    }

    /********if(Fault::where('id',$id)->exists())
        {
            $fault = Fault::find($id);
            $fault->customerName = $request ->customerName;
            $fault->contactName = $request ->contactName;
            $fault->phoneNumber = $request -> phoneNumber;
            $fault->contactEmail = $request -> contactEmail;
            $fault->address = $request -> address;
            $fault->accountManager = $request -> accountManager;
            $fault->city = $request -> city;
            $fault->suburb = $request -> suburb;
            $fault->pop = $request -> pop;
            $fault->linkName = $request -> linkName;
            $fault->suspectedRfo = $request -> suspectedRfo;
            $fault->serviceAttribute = $request -> serviceAttribute;
            $fault->remarks = $request -> remarks;
            $fault-> status = $request ->  status;

            $fault->save();
            return response()->json([
                "message" => "record updated successfully"
            ],200);
        }
        else
        {
            return response()->json([
                "message" => "fault not found"
            ],404);
        } */


}
