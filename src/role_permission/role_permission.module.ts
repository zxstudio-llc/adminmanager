import { Module, forwardRef } from '@nestjs/common';
import { RolePermissionService } from './role_permission.service';
import { RolePermissionController } from './role_permission.controller';
import { RolePermission } from './entities/role_permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from 'src/roles/roles.module';
import { PermissionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RolePermission]),
    forwardRef(() => RolesModule),
    forwardRef(() => PermissionsModule),
  ],
  controllers: [RolePermissionController],
  providers: [RolePermissionService],
  exports: [RolePermissionService],
})
export class RolePermissionModule {}
