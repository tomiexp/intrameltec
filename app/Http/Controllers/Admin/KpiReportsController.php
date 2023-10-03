<?php

namespace App\Http\Controllers\Admin;

use Exception;
use Spatie\Permission\Models\Role;
use App\Models\KpiReport;
use App\Models\RoleHasKpi;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KpiReportsController extends Controller
{
    public function index()
    {
        $reports = KpiReport::paginate(3);
        $roles = Role::all()->except(1);
        return Inertia::render('Admin/Kpis/Index', [
            'reports' => $reports,
            'roles' => $roles
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validator = $request->validate([
                'reportName' => 'required|string',
                'urlData.data' => 'required|string',
                'roles' => 'required|array',
            ]);



            if (!$validator) {
                throw new Exception('Error en los campos ingresados');
            }

            $data = json_encode($request->input('urlData'));
            $kpi = new KpiReport([
                'reportName' => $request->input('reportName'),
                'data' => $data,
            ]);

            $saveKpi = $kpi->save();

            foreach ($request->roles as $role) {
                $kpiId = $kpi->id;

                $rolesKpi = new RoleHasKpi([
                    'UUID_kpi' => $kpiId,
                    'role_id' => $role,
                ]);

                $rolesKpi->save();
            }

            if (!$saveKpi) throw new Exception('Error en almacenar el KPI');

            return response()->json(['message' => 'Kpi almacenado Correctamente'], 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
        dd($request->all());
    }

    public function show(String $uuid) 
    {
        $data = KpiReport::where('id', $uuid)->first();

        return Inertia::render('Kpis/Show', [
            'data' => $data,
        ]);
    }
}
