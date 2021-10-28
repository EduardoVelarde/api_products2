const express=require('express')
const {Router}= express;
const Container=require('../src/Container')
const router = new Router();
const colors=require('colors')


let product_list=[
    {
        name:'chocolates',
        price:25,
        date:"20/10/2021",
        id:1
    },
    {
        name:'manzanas',
        price:17,
        date:"10/10/2021",
        id:2
    },
    {
        name:'peras',
        price:29,
        date:"30/10/2021",
        id:3
    }
]
const p1= new Container(product_list)
router.get("/products",(req,res)=>{
    res.json({message:"Working properly",
                products:p1.get()})
})

router.get("/products/:id",(req,res)=>{
    let {id}=req.params
    res.json({message:"we found this result for the given id",
                products:p1.getById(id)})
})

router.post("/products",(req,res)=>{
    console.log(colors.blue(`this product has been added correctly!!!`))
    let new_product=p1.setProduct(req.body)
    res.json({product:new_product})
})
router.put("/products/:id",(req,res)=>{
    let {id}= req.params
    let {name,price}=req.body
    console.log(id)
    let new_product=p1.updateProduct(id,name,price)
    res.json({message:'data has been send!',
                        product:new_product})
})
router.delete("/products/:id",(req,res)=>{
    let {id}= req.params
    console.log(id)
    let new_product=p1.deleteById(id)
    res.json({message:'data has been send!',
                        product:new_product})
})
module.exports=router;