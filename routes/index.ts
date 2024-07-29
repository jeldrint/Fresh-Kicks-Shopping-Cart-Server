import express, { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma: PrismaClient = new PrismaClient();


export const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) =>{
    res.send('Welcome to Fresh Kicks API!')

    try{
        await prisma.shoes.create({
            data: {
                name: 'NIKE AIR JORDAN 5 RETRO BASKETBALL SHOES - BLACK',
                name_id: 'nike-air-jordan-retro-basketball-shoes-black',
                brand: 'Jordan',
                price: 8716,
                img_URL: "https://www.footlocker.ph/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0803-NIKDD0587047005008-1.jpg",
                category: {
                    create: {
                        new_arrival: false,
                        hot_item: true,
                        men: true,
                        menShoeSize:{
                            create: {
                                eur_39: true,
                                eur_40: false,
                                eur_41: true,
                                eur_42: false,
                                eur_43: true,
                                eur_44: false,
                                eur_45: true,
                                eur_46: true,
                                eur_47: true,
                                eur_48: true,
                                eur_49: true
                            }
                        },
                        women: false,
                        kids: true,
                        kidsShoeSize:{
                            create: {
                                eur_30: false,
                                eur_31: false,
                                eur_32: false,
                                eur_33: true,
                                eur_34: false,
                                eur_35: true,
                                eur_36: false,
                                eur_37: true,
                                eur_38: true
                            }
                        }
                    }
                }
            }
        })
    }catch(error){
        if (error instanceof Error){
            res.send(error.message)
        }else{
            res.send('This is a user-generated error: There is an error occured somewhere')
        }
    }
});

router.get('/api', async (req: Request, res: Response) => {
    try{
        const allShoes = await prisma.shoes.findMany({
            include: {
                category: {
                    include: {
                        menShoeSize: true,
                        womenShoeSize: true,
                        kidsShoeSize: true
                    }
                }
            }
        })
        res.json(allShoes)
    }catch(error){
        if (error instanceof Error){
            res.send(error.message)
        }else{
            res.send('This is a user-generated error: There is an error occured somewhere')
        }
    }
})