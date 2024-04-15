/* eslint-disable prettier/prettier */
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Transaction {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Role, (role) => role.transaction)
  @JoinTable({
    name: 'role_permissions',
    joinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: Role[];
}
