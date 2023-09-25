// import express from 'express';
// import { RequestHandler } from 'express';
// import asyncHandler from 'express-async-handler';
// import knex from '../database/db';
// // import { CreateProductParams } from '../interfaces/ProductInterfaces';
// // import ProductModel from '../models/productModel';
// // import * as productController from '../controllers/productController';
// // import {
// //   getProducts,
// //   getProductById,
// //   createProduct,
// //   updateProduct,
// //   deleteProduct,
// // } from '../controllers/productController';
// import { Knex } from 'knex';

// const router = express.Router();
// // export const productsRouter = Router();

// /* GET /api/products - Get all Products (Public) */
// export const getProducts: RequestHandler = asyncHandler(async (req, res) => {
//   // const products = await ProductModel.getProducts();

//   const qs = `SELECT * FROM products;`;
//   const products_raw: Knex.Raw = await knex.raw(qs);
//   // @ts-ignore
//   const products = products_raw.rows;

//   // @ts-ignore
//   // return (products as unknown as RawResult).rows;

//   // TODO: Input validation can be added here

//   if (products) {
//     res.status(200).json({
//       products,
//       message: 'Products retrieved successfully',
//     });
//   } else {
//     res.status(404).json({ message: 'Products not found' });
//   }
// });

// // router.get('/', productController.getProducts);
// router.get('/', getProducts);
// // router.post('/', createProduct);

// // router.get('/:id', getProductById);
// // router.put('/:id', updateProduct);
// // router.delete('/:id', deleteProduct);

// export default router;
