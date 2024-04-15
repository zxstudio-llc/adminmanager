import { Role } from 'src/roles/entities/role.entity';
import { Column, ManyToOne } from 'typeorm';

export class TransactionRole {
  @Column({ primary: true, generated: true })
  id: number;

  @ManyToOne(() => Role, (role) => role.id, {
    eager: true, // traer todos los datos de la relacion al hacer la consulta findone
  })
  role: Role;

  //   @ManyToOne(() => Transaction, (transaction) => transaction.id, {
  //     eager: true, // traer todos los datos de la relacion al hacer la consulta findone
  //   })
  //   transaction: Transaction;
}
