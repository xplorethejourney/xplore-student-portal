import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import "./src/config/db"
import authRouter from "./src/routes/authRoutes"
dotenv.config()

const PORT = process.env.PORT || 8989

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(cors())

app.use("/api/auth",authRouter)


app.listen(PORT,()=>{
    console.log(`SERVER RUNNING AT ${PORT}`)    
})