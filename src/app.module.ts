/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TransactionModule } from './transactions/transactions.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { ClientsModule } from './clients/clients.module';
import { SalesModule } from './sales/sales.module';
import { StoresModule } from './stores/stores.module';
import { TransfersModule } from './transfers/transfers.module';
import { InventoryModule } from './inventory/inventory.module';
import { HrmModule } from './hrm/hrm.module';
import { CategoriesModule } from './categories/categories.module';
import { ShiftsModule } from './shifts/shifts.module';
import { DepartmentsModule } from './departments/departments.module';
import { LeavesModule } from './leaves/leaves.module';
import { CompaniesModule } from './companies/companies.module';
import { AuthModule } from './auth/auth.module';
import { RolePermissionModule } from './role_permission/role_permission.module';
import { TransactionRoleModule } from './transaction-role/transaction-role.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'zxstudioDB',
      password: 'ZXStudio2023',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    TransactionModule,
    SubscriptionsModule,
    ClientsModule,
    SalesModule,
    StoresModule,
    TransfersModule,
    InventoryModule,
    HrmModule,
    CategoriesModule,
    ShiftsModule,
    DepartmentsModule,
    LeavesModule,
    CompaniesModule,
    AuthModule,
    RolePermissionModule,
    TransactionRoleModule,
    PermissionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
