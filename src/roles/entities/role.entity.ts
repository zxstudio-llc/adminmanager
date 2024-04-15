/* eslint-disable prettier/prettier */
import { Transaction } from 'src/transactions/entities/transactions.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Transaction, (permissions) => permissions.roles)
  transaction: Transaction[];
}
