import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TransrolesModule } from './transroles/transroles.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [UsersModule, RolesModule, TransactionsModule, TransrolesModule, PermissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
