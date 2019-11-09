import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAccountDto {
  @ApiModelProperty()
  readonly id!: string;
}
