import { Module } from '@nestjs/common';
import { FooController } from './foo.controller';

@Module({
    imports: [],
    controllers: [FooController],
    providers: [],
})
export class FooModule {}
