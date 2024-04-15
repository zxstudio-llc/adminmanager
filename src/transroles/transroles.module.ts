import { Module } from '@nestjs/common';
import { TransrolesService } from './transroles.service';
import { TransrolesController } from './transroles.controller';

@Module({
  controllers: [TransrolesController],
  providers: [TransrolesService],
})
export class TransrolesModule {}
