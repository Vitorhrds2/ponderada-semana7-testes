import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PartnerDto } from 'src/business/dtos/partner.dto';
import { PartnerEntity } from 'src/business/entities/partner.entity';
import { PartnerService } from 'src/data/services/partner.service';
@Controller()
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get('/partners')
  public async getAllPartners(): Promise<PartnerEntity[]> {
    return await this.partnerService.getAllPartners();
  }

  @Post('/partner')
  public async createPartner(@Body() partnerDto: PartnerDto) {
    return await this.partnerService.createPartner(partnerDto);
  }

  @Put('/partner/:id')
  public async updatePartner(
    @Body() partnerDto: PartnerDto,
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<PartnerEntity> {
    return await this.partnerService.updatePartner(partnerDto, id);
  }

  @Delete('/partner/:id')
  public async deletePartner(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<PartnerEntity> {
    return await this.partnerService.deletePartner(id);
  }


  @Post()
  public async createFeedbackByPartner(){
    return;
  }
}
