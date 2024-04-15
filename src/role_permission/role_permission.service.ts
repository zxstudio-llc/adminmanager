import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from 'src/transactions/entities/transactions.entity';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class RolePermissionService {
  constructor(
    @Inject(forwardRef(() => RolesService))
    private readonly rolesService: RolesService,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}
  async assingPermissionToRole(
    roleId: number,
    permissionId: number,
  ): Promise<void> {
    if (isNaN(roleId) || isNaN(permissionId)) {
      throw new Error('Invalid roleId or permissionId');
    }
    console.log('a');
    const role = await this.rolesService.findOneById(roleId);
    console.log('1');
    const permission = await this.permissionRepository.findOne({
      where: { id: permissionId },
    });

    if (!role || !permission) {
      throw new Error('Role or Permission not found');
    }
    console.log('c');
    role.permissions = [...role.permissions, permission];
    await this.rolesService.save(role);
  }

  async getRolePermissions(roleId: number): Promise<Permission[]> {
    const role = await this.rolesService.findOne({
      where: { id: roleId },
      relations: ['permissions'],
    });

    if (!role) {
      throw new Error('Role not found');
    }

    return role.permissions;
  }
}
