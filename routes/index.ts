import express, { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma: PrismaClient = new PrismaClient();


export const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) =>{
    res.send('Welcome to Fresh Kicks API!')

    try{
        await prisma.shoes.update({
            where: {
                id: 10
            },
            data: {
                category: {
                    update: {
                        kids: true
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


// data: {
//     name: "NIKE AIR FORCE 1 '07 LV8 SNEAKERS - BABY BLUE",
//     name_id: 'nike-air-force-lv-sneakers-shoes-baby-blue',
//     brand: 'Nike',
//     price: 6895,
//     discount: 0.15,
//     img_URL: "https://www.footlocker.ph/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0803-NIKDZ252210000W10H-1.jpg",
//     category: {
//         create: {
//             new_arrival: false,
//             hot_item: false,
//             men: true,
//             menShoeSize:{
//                 create: {
//                     eur_39: true,
//                     eur_40: true,
//                     eur_41: true,
//                     eur_42: false,
//                     eur_43: false,
//                     eur_44: false,
//                     eur_45: false,
//                     eur_46: false,
//                     eur_47: true,
//                     eur_48: true,
//                     eur_49: true,
//                 }
//             },
//             women: true,
//             womenShoeSize:{
//                 create: {
//                     eur_33: true,
//                     eur_34: true,
//                     eur_35: true,
//                     eur_36: false,
//                     eur_37: false,
//                     eur_38: false,
//                     eur_39: false,
//                     eur_40: false,
//                     eur_41: true,
//                 }
//             },
//             kids: false,
//             kidsShoeSize: {
//                 create: {
//                     eur_30: true,
//                     eur_31: true,
//                     eur_32: false,
//                     eur_33: false,
//                     eur_34: false,
//                     eur_35: true,
//                     eur_36: false,
//                     eur_37: true,
//                     eur_38: true
//                 }
//             }
//         }
//     }
// }
