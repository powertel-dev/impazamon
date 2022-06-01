<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFaultTechnicianTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fault_technician', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('technician_id');
            $table->unsignedInteger('fault_id');
            $table->timestamps();
            $table->foreign('technician_id')
                    ->references('id')
                    ->on('technicians');
            $table->foreign('fault_id')
                    ->references('id')
                    ->on('faults');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fault_technician');
    }
}
