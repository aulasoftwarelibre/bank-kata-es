import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateAccountDto {
  @ApiModelProperty()
  readonly id!: string;

  @ApiModelProperty()
  readonly balance: number;
}
