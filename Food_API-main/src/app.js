const express = require('express')
const app=express();
const cors=require('cors')
const port=3700;
app.use(cors());
const FoodItems = require('./models/foodinfo');
require('./db/conn');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to FoodAPI</h1>')
});

app.get('/getfooditemsdata',async (req,res)=>{
    try{
        const getfood=await FoodItems.find({});
        res.status(201).send(getfood)
    }
    catch(e){
        console.log(e);
    }
});

app.get('/getfooditemsdata/:food_item_name',async (req,res)=>{
    const food_item_name= req.params.food_item_name;
    try{
        const foodData=await FoodItems.findOne({food_item_name:food_item_name});
        if(!foodData){
            return res.status(400).json({error:'FoodItem Not found'});

        }
        res.status(200).json(foodData)
    }
    catch(e){
        console.log(e);
    }
    
})

//adding new fooditem recoed

app.post('/fooditems',async (req,res)=>{
    try{
        const newRecord = await FoodItems.create(req.body);
        res.status(201).json(newRecord);

    }
    catch(e){
        console.log(e);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.delete('/fooditems/:food_item_name',async(req,res)=>{
    const food_item_name=req.params.food_item_name;
    try{
        const deletedRecord=await FoodItems.findOneAndDelete({food_item_name});
        if(!deletedRecord){
            return res.status(400).json({error:'FoodItem Not Found'});
        }
        res.status(200).json(deletedRecord);

    }
    catch(e){
        console.log(e);
    }

})


app.listen(port,()=>{
    console.log(`server is listening at port number ${port}`);
})