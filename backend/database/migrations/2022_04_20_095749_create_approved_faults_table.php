<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApprovedFaultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('approved_faults', function (Blueprint $table) {
            $table->id();
            $table->string('customerName');
            $table->string('accountManager');
            $table->string('city');
            $table->string('suburb');
            $table->string('pop');
            $table->string('linkName');
            $table->string('suspectedfo');
            $table->string('serviceAttribute');
            $table->string('serviceType');
            $table->string('faultType');
            $table->string('priorityLevel');
            $table->string('status');
            $table->string('section');
            $table->string('remarks');
            $table->string('assesRemarks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('approved_faults');
    }
}
