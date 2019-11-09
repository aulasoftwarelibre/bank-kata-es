import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { AmountDto, CreateAccountDto } from '../dto';
import { AccountView } from '../read-model/schema';
import { AccountService } from '../service';

@ApiUseTags('Accounts')
@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({ title: 'Get Accounts' })
  @ApiResponse({ status: 200, description: 'Get Accounts.' })
  @Get()
  async getAccounts(): Promise<AccountView[]> {
    return await this.accountService.getAccounts();
  }

  @ApiOperation({ title: 'Create Account' })
  @ApiResponse({ status: 200, description: 'Create Account.' })
  @Post()
  async createAccount(@Body() newAccountDto: CreateAccountDto) {
    return await this.accountService.createAccount(newAccountDto.id);
  }

  @ApiOperation({ title: 'Get Account' })
  @ApiResponse({ status: 204, description: 'Get Account.' })
  @ApiResponse({ status: 404, description: 'Account not found.' })
  @Get(':id')
  async getAccount(@Query('id') id: string): Promise<AccountView> {
    return await this.accountService.getAccount(id);
  }

  @ApiOperation({ title: 'Send deposit' })
  @ApiResponse({ status: 204, description: 'Send deposit.' })
  @ApiResponse({ status: 404, description: 'Account not found.' })
  @Put(':id/deposit')
  async deposit(@Body() amountDto: AmountDto, @Query('id') id: string) {
    await this.accountService.depositAmount(id, amountDto.amount);
  }

  @ApiOperation({ title: 'Send withdraw' })
  @ApiResponse({ status: 204, description: 'Send withdraw.' })
  @ApiResponse({ status: 404, description: 'Account not found.' })
  @Put(':id/withdraw')
  async withdraw(@Body() amountDto: AmountDto, @Query('id') id: string) {
    await this.accountService.withdrawAmount(id, amountDto.amount);
  }
}
