import { Controller, Get,Res, Req, UseGuards, Query, UsePipes, Param } from '@nestjs/common';
import { VideosService } from './videos.service';
import { FilterVideoDTO } from './videos.dto';
import { FilterVideosDtoMaping } from './videos.validation.pipe'
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger'
import { Cron, CronExpression } from '@nestjs/schedule';
import { VideoCategoryEnum } from '../videos/videos.enum';

@ApiTags('videos')
@Controller('videos')
export class VideosController{
    constructor(private videosService: VideosService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(new FilterVideosDtoMaping())
    showAllVideos(@Query() param:FilterVideoDTO){
        return this.videosService.getAll(param);
    }

    @ApiQuery({name:"categoryOptions", enum:["only",""], required:false })
    @Get("category")
    getAllCategoryList(@Query() param:{categoryOptions: VideoCategoryEnum}) {
        return this.videosService.getAllCategoryList(param.categoryOptions === VideoCategoryEnum.OnlyCategory);
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    addNewVideoFromFiles() {
        this.videosService.addNewVideoFromFiles();
    }
}