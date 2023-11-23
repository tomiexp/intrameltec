<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() 
    {

        try {
            $urlKpiToday = "https://my345513.sapbydesign.com/sap/byd/odata/analytics/kpi/Kpi.svc/Kpi('Z06B490E4B983CB96DD195ADF')/Value?\$format=json";
            $Kpitoday = Http::withBasicAuth(env('SAP_USERNAME_PRODUCTION'), env('SAP_PASSWORD_PRODUCTION'))->get($urlKpiToday);

            if(!$Kpitoday) {
                throw new Exception("Error al Obtener los datos de Kpi en SAP", 400);
            }

            $jsonKpiToday = json_decode($Kpitoday->body());

            $today = date('Y-m-d').'T00:00:00';
            
            $urlSalesToday = "https://my345513.sapbydesign.com/sap/byd/odata/ana_businessanalytics_analytics.svc/RPCRMCIVIB_Q0001QueryResults?\$inlinecount=allpages&\$format=json&\$filter=CDOC_INV_DATE eq datetime'$today'&\$select=CIPR_PROD_UUID,TIPR_REFO_CATCP,TIPR_PROD_UUID,CIPR_REFO_CATCP,FCGR_VAL_INV,TIPR_REFO_PRDTY,CDPY_BUYER_INDS,CIACBA_PRJ_UUID,CDPY_BUYER_COUNT,TIP_SAL_EMP,FCTX_AMT_RC,FCDP_TOTAL_AMOUNT_CONTENT,CDOC_INV_DATE,CDOC_UUID,TDOC_STA_RELEASE,TDOC_STA_CONS,CDOC_YEAR,CDOC_CREATED_DT,FCINV_QTY,TDPY_BUYER_UUID,CDPY_BUYER_UUID,UCINV_QTY,UCCRE_MEM_QTY,FCCRE_MEM_QTY,UCCOR_INV_QTY,FCCOR_INV_QTY,TDPY_SELLER_UUID,RCNT_REVENUE,KCNT_REVENUE,KCTX_AMT_RC,KCCRE_MEM_QTY,KCCOR_INV_QTY,KCINV_QTY&";

            $salesToday = Http::withBasicAuth(env('SAP_USERNAME_PRODUCTION'), env('SAP_PASSWORD_PRODUCTION'))->get($urlSalesToday);

            if(!$salesToday) {
                throw new Exception("Error al Obtener los datos de Kpi en SAP", 400);
            }

            $jsonsalesToday = json_decode($salesToday->body());            
            
            return Inertia::render('Dashboard', [
                'kpi' => $jsonKpiToday->d->results,
                'invoices' => $jsonsalesToday->d->results,
            ]);
        } catch (Exception $e) {
            return Inertia::render('Dashboard', [
                'kpi' => $e->getMessage(),
                'invoices' => $e->getMessage(),
            ]);
        }

    }
}
