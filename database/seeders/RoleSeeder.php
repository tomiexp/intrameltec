<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roleAdmin = Role::create(['name' => 'Administrador']);
        $roleDirector = Role::create(['name' => 'Director']);
        $roleCommon = Role::create(['name' => 'Usuario corriente']);

        Permission::create(['name' => 'directors.index'])->syncRoles([$roleAdmin, $roleDirector]);

        Permission::create(['name' => 'admin.parts.index'])->assignRole($roleAdmin);
        Permission::create(['name' => 'admin.parts.create'])->assignRole($roleAdmin);
        Permission::create(['name' => 'admin.parts.edit'])->assignRole($roleAdmin);
        Permission::create(['name' => 'admin.parts.destroy'])->assignRole($roleAdmin);

        Permission::create(['name' => 'admin.users.index'])->assignRole($roleAdmin);
        Permission::create(['name' => 'admin.users.edit'])->assignRole($roleAdmin);
        Permission::create(['name' => 'admin.users.destroy'])->assignRole($roleAdmin);
    }
}
