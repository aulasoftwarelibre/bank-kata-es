import { ApiModelProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiModelProperty()
  readonly id!: string;

  @ApiModelProperty()
  readonly balance: number;
}
