/* eslint-disable prettier/prettier */
// import { TransactionRole } from 'src/transaction-role/entities/transaction-role.entity';
import { Column, Entity } from 'typeorm';

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

  // @OneToMany(
  //   () => TransactionRole,
  //   (transactionRole) => transactionRole.transaction,
  // )
  // transactionRole: TransactionRole[];
}
