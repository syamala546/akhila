import express from 'express';
import cors from 'cors';
const app=express();
const PORT=process.env.PORT||5000;
app.use(cors());
app.use(express.json());
app.get('/',(_req,res)=>res.json({message:'TripWise backend is running'}));
app.get('/api/health',(_req,res)=>res.json({ok:true}));
app.listen(PORT,()=>console.log(`TripWise server running on ${PORT}`));
