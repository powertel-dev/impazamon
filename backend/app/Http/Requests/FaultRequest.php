<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FaultRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "customerName"=>'required',
            "contactName"=>'required',
            "phoneNumber"=>'required',
            "contactEmail"=>'required',
            "address"=>'required',
            "accountManager"=>'required',
            "city"=>'required',
            "suburb"=>'required',
            "pop"=>'required',
            "linkName"=>'required',
            "suspectedRfo"=>'required',
            "serviceAttribute"=>'required',
            "remarks"=>'required',
            "status"=>'required',
        ];
    }
}
