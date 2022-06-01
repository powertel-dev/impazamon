<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFaultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faults', function (Blueprint $table) {
            $table->increments('id');
            $table->string('customerName');
            $table->string('contactName');
            $table->integer('phoneNumber');
            $table->string('contactEmail');
            $table->string('address');
            $table->string('accountManager');
            $table->string('city');
            $table->string('suburb');
            $table->string('pop');
            $table->string('linkName');
            $table->string('suspectedRfo');
            $table->string('serviceType');
            $table->string('serviceAttribute');
            $table->string('faultType')->nullable();
            $table->string('priorityLevel')->nullable();
            $table->string('assigned_department')->nullable();
            $table->string('created_by')->nullable();
            $table->integer('status_id')->nullable();
            $table->string('remarks');
            $table->string('assessRemarks')->nullable();
            $table->string('status');
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
        Schema::dropIfExists('faults');
    }
}
