/* eslint-disable prettier/prettier */
import { Permission } from 'src/permissions/entities/permission.entity';
import { Column, DeleteDateColumn, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Role {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @DeleteDateColumn()
  deleteAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Permission, (permissions) => permissions.roles)
  permissions: Permission[];
}
