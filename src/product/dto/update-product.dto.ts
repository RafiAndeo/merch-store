import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
} from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    example: 'Product 1',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 100000,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'Product 1 description',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
  })
  @IsString()
  image: string;

  @ApiProperty({
    example: ['Accessories'],
  })
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @Transform(({ value }) => {
    return value.trim().split(',');
  })
  category: string[];
}
