/* eslint-disable prettier/prettier */
import { Permission } from 'src/transactions/entities/transactions.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('role_permission')
export class RolePermission {
  @PrimaryColumn({ name: 'permission_id' })
  permissionId: number;

  @PrimaryColumn({ name: 'role_id' })
  roleId: number;

  @ManyToOne(() => Permission, (permission) => permission.roles)
  @JoinColumn([{ name: 'permission_id', referencedColumnName: 'id' }])
  permissions: Permission[];
  @ManyToOne(() => Role, (role) => role.permissions)
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  roles: Role[];
}
