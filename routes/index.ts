import express, { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma: PrismaClient = new PrismaClient();


export const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) =>{
    res.send('Welcome to Fresh Kicks API!')

    // try{
    //     await prisma.shoes.update({
    //         where: {
    //             id: 20
    //         },
    //         data: {
    //             category: {
    //                 update: {
    //                     women: true
    //                 }
    //             }
    //         }
    //     })
    // }catch(error){
    //     if (error instanceof Error){
    //         res.send(error.message)
    //     }else{
    //         res.send('This is a user-generated error: There is an error occured somewhere')
    //     }
    // }
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
            },
            orderBy: {
                id: 'desc'
            }
        })
        return res.json(allShoes)
    }catch(error){
        if (error instanceof Error){
            res.send(error.message)
        }else{
            res.send('This is a user-generated error: There is an error occured somewhere')
        }
    }
})


/* CUE FOR CREATING A SHOE PROFILE*/

// await prisma.shoes.create({
//     data: {
//         name: "AIR MAX 1 BOYS' GRADE SCHOOL SNEAKERS SHOES - WHITE",
//         name_id: 'air-max-1-boys-grade-school-sneakers-shoes-white',
//         brand: 'Nike',
//         price: 4695,
//         discount: 0.40,
//         img_URL: "https://www.footlocker.ph/media/catalog/product/cache/1384ea813c36abc3a773dd6494b9b881/0/8/0803-NIKDZ330710700W07Y-2.jpg",
//         category: {
//             create: {
//                 new_arrival: false,
//                 hot_item: false,
//                 men: true,
//                 menShoeSize:{
//                     create: {
//                         eur_39: true,
//                         eur_40: true,
//                         eur_41: true,
//                         eur_42: false,
//                         eur_43: false,
//                         eur_44: false,
//                         eur_45: false,
//                         eur_46: false,
//                         eur_47: true,
//                         eur_48: true,
//                         eur_49: true,
//                     }
//                 },
//                 women: true,
//                 womenShoeSize:{
//                     create: {
//                         eur_33: true,
//                         eur_34: true,
//                         eur_35: true,
//                         eur_36: false,
//                         eur_37: false,
//                         eur_38: false,
//                         eur_39: false,
//                         eur_40: false,
//                         eur_41: true,
//                     }
//                 },
//                 kids: true,
//                 kidsShoeSize: {
//                     create: {
//                         eur_30: true,
//                         eur_31: true,
//                         eur_32: false,
//                         eur_33: false,
//                         eur_34: false,
//                         eur_35: true,
//                         eur_36: false,
//                         eur_37: true,
//                         eur_38: true
//                     }
//                 }
//             }
//         }
//     }
// })



/* CUE FOR UPDATING A SHOE PROFILE (NESTED) */

// await prisma.shoes.update({
//     where: {
//         id: 10
//     },
//     data: {
//         category: {
//             update: {
//                 kids: true
//             }
//         }
//     }
// })
