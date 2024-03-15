//models/productModel.js
//creacion modelo producto

import {dbconfig} from '../config/db.config.js';
import mysql from 'mysql2';

const db = mysql.createPool(dbconfig);

//creacion obtener todos los productos

// getAll
export const getProducts = async() => {
    const [rows ] = await pool.query('SElECT * from products');
    return rows;
};

//obtener producto por id
//getById
export const getProductById = async (productId) =>{
    const [rows ] = await pool.query('SElECT * from products WHERE id=?',productId);
    return rows[0];
}

//agregar nuevo producto
export const createProduct = async (productData) =>{
    const {name,price,description} = productData;
    const [result] = await pool.query('INSERT INTO products(name,price,description) VALUES(?,?,?)',[name,price,description]);
    return result.insertId;
}
//actualizar producto existente
export const updateProduct = async(productId,productData)=>{
    const {name,price,description} = productData;
    const [result] = await pool.query('UPDATE products SET name=?,price=?,description=? WHERE id=?',
    [name,price,description,productId]);
};
//eliminar producto
//delete
export const deleteProduct = async(productId)=>{
    await pool.query('DELETE FROM products WHERE id=?',productId);
}
