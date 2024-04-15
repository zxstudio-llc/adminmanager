import { Controller, Get, Post, Param } from '@nestjs/common';
import { RolePermissionService } from './role_permission.service';

@Controller('role-permission')
export class RolePermissionController {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  @Post(':assigne/assign-permission/:permissionId')
  async assignPermissionToRole(
    @Param('roleId') roleId: number,
    @Param('permissionId') permissionId: number,
  ): Promise<void> {
    console.log('R');
    return await this.rolePermissionService.assingPermissionToRole(
      roleId,
      permissionId,
    );
  }

  @Get(':roleId/permissions')
  async getRolePermissions(@Param('roleId') roleId: number): Promise<any> {
    return await this.rolePermissionService.getRolePermissions(roleId);
  }
}
