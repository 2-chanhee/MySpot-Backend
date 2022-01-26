import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class PostUserRecentMapParam {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    readonly recentMapId: number;
}
