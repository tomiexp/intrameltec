<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\User;
use App\Policies\RolPolicy;
use App\Policies\UserPolicy;
use App\Policies\DirectorPolicy;
use Spatie\Permission\Models\Role;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Role::class => RolPolicy::class,
        User::class => UserPolicy::class,
        User::class => DirectorPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        // Grant "Super Administrador" role all permissions 
        Gate::before(function ($user, $ability) {
            if($user->hasRole('Super Administrador')) {
                return true;
            }
        });
    }
}
