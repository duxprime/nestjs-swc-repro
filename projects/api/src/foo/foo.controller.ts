import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
} from '@nestjs/common';
import { exists } from '@repro/utils/fns';

interface Foo {
    id: string;
    value: string;
}

const foos: Record<string, Foo> = {
    abc: {
        id: 'abc',
        value: 'foo',
    },
    def: {
        id: 'def',
        value: 'bar',
    },
};

@Controller('foo')
export class FooController {
    @Get(':id')
    public getFoo(@Param('id') id: string): Foo {
        if (!exists(foos[id])) {
            throw new HttpException(
                `Invalid ID: ${id}`,
                HttpStatus.BAD_REQUEST
            );
        }

        return foos[id];
    }
}
