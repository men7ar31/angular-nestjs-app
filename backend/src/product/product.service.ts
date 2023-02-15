import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interfaces";
import { CreateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private productModel: Model<Product>){}

    async getProducts():Promise<Product[]>{
        return this.productModel.find();
    }

    async getProduct(productID: string):Promise<Product[]>{
        return this.productModel.findById(productID);
    }
    
    async createProduct(createproductDTO: CreateProductDTO):Promise<Product>{
        const product = new this.productModel(createproductDTO)
       return await product.save()
    }

    async updateProduct(productID: string, createproductDTO: CreateProductDTO):Promise<Product>{
        return this.productModel.findByIdAndUpdate(productID, createproductDTO, {new: true})
    }

    async deleteProduct(productID: string):Promise<Product>{
        return await this.productModel.findByIdAndDelete(productID)
    }
}
