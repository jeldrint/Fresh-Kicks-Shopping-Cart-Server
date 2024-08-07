"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Welcome to Fresh Kicks API!');
    // try{
    //     await prisma.shoes.update({
    //         where: {
    //             id: 8,
    //             category: {
    //                 men: false
    //             }
    //         },
    //         data: {
    //             category: {
    //                 update: {
    //                     menShoeSize:{
    //                         create: {
    //                             eur_39: false,
    //                             eur_40: false,
    //                             eur_41: false,
    //                             eur_42: false,
    //                             eur_43: false,
    //                             eur_44: false,
    //                             eur_45: false,
    //                             eur_46: false,
    //                             eur_47: false,
    //                             eur_48: false,
    //                             eur_49: false,
    //                         }
    //                     },
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
}));
exports.router.get('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allShoes = yield prisma.shoes.findMany({
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
        });
        return res.json(allShoes);
    }
    catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
        }
        else {
            res.send('This is a user-generated error: There is an error occured somewhere');
        }
    }
}));
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
