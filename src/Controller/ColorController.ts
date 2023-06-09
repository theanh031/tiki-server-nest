import { Body, Controller, Post, Get, Patch } from '@nestjs/common';
import { BaseController } from './BaseController';
import { ColorService } from 'src/Services/ColorService';
import { Color } from 'src/Models/Entitys/Selection/Color';
import { Query } from 'mongoose';

@Controller('color')
export class ColorController extends BaseController<ColorService, Color> {
    constructor(ColorService: ColorService) {
        super(ColorService);
    }
}
