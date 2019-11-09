import { ApiModelProperty } from '@nestjs/swagger';

export class AmountDto {
  @ApiModelProperty()
  readonly amount: number;
}
