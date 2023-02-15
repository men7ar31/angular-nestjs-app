import { Controller , Get, Post, Put, Delete, Body} from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CreateProductDTO } from "./dto/product.dto";

import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/create')
    createProduct(@Body() createProductDTO: CreateProductDTO){
     return this.productService.createProduct(createProductDTO)
    }

    @Get()
    getProducts(){
        return this.productService.getProducts()
    }

    @Get('/:productID')
    async getProduct(@Param('productID')productID){
        return  this.productService.getProduct(productID)
    }

    @Put('/update/:productID')
    async updateProduct(@Param('productID')productID, @Body() createproductDTO : CreateProductDTO){
        return this.productService.updateProduct(productID, createproductDTO)
    }

    @Delete('/delete/:productID')
    deleteProduct(@Param('productID') productID){
        return this.productService.deleteProduct(productID)
    }
}
