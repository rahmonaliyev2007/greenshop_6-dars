export async function GET() {
    const flowers = [
        {
            id: 1,
            name: "Daisy",
            price: 50,
            salePrice: 0 ,
            description: "Small, low-growing plant with signature white petals and a yellow center. Blooms from spring to late summer.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509675/epvsf1qssg76utozbafn.jpg"
        },
        {
            id: 2,
            name: "Pansy",
            price: 60,
            salePrice: 0 ,
            description: "Small, colorful flower with velvety petals in shades of purple, blue, yellow, and white. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 13,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509997/zyozcmd3dwbhfgxd9vly.jpg"
        },
        {
            id: 3,
            name: "Marigold",
            price: 75,
            salePrice: 0 ,
            description: "Small, bushy plant with gold, orange, or yellow flowers that attract butterflies and bees. Blooms from summer to fall.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510339/njtbsczrcm8cs4pnuftr.jpg"
        },
        {
            id: 4,
            name: "Viola",
            price: 80,
            salePrice: 0 ,
            description: "Small, delicate flowers with a range of colors including purple, white, yellow, and blue. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 40,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510624/dxsq041t63mkhl8mm2pr.jpg"
        },
        {
            id: 5,
            name: "Daisy",
            price: 50,
            salePrice: 0 ,
            description: "Small, low-growing plant with signature white petals and a yellow center. Blooms from spring to late summer.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509675/epvsf1qssg76utozbafn.jpg"
        },
        {
            id: 6,
            name: "Pansy",
            price: 60,
            salePrice: 0 ,
            description: "Small, colorful flower with velvety petals in shades of purple, blue, yellow, and white. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 13,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509997/zyozcmd3dwbhfgxd9vly.jpg"
        },
        {
            id: 7,
            name: "Marigold",
            price: 75,
            salePrice: 0 ,
            description: "Small, bushy plant with gold, orange, or yellow flowers that attract butterflies and bees. Blooms from summer to fall.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510339/njtbsczrcm8cs4pnuftr.jpg"
        },
        {
            id: 8,
            name: "Viola",
            price: 80,
            salePrice: 0 ,
            description: "Small, delicate flowers with a range of colors including purple, white, yellow, and blue. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 40,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510624/dxsq041t63mkhl8mm2pr.jpg"
        },
        {
            id: 9,
            name: "Daisy",
            price: 50,
            salePrice: 0 ,
            description: "Small, low-growing plant with signature white petals and a yellow center. Blooms from spring to late summer.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509675/epvsf1qssg76utozbafn.jpg"
        },
        {
            id: 10,
            name: "Pansy",
            price: 60,
            salePrice: 0 ,
            description: "Small, colorful flower with velvety petals in shades of purple, blue, yellow, and white. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 13,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509997/zyozcmd3dwbhfgxd9vly.jpg"
        },
        {
            id: 11,
            name: "Marigold",
            price: 75,
            salePrice: 0 ,
            description: "Small, bushy plant with gold, orange, or yellow flowers that attract butterflies and bees. Blooms from summer to fall.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510339/njtbsczrcm8cs4pnuftr.jpg"
        },
        {
            id: 12,
            name: "Viola",
            price: 80,
            salePrice: 0 ,
            description: "Small, delicate flowers with a range of colors including purple, white, yellow, and blue. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 40,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510624/dxsq041t63mkhl8mm2pr.jpg"
        },
        {
            id: 13,
            name: "Daisy",
            price: 50,
            salePrice: 0 ,
            description: "Small, low-growing plant with signature white petals and a yellow center. Blooms from spring to late summer.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509675/epvsf1qssg76utozbafn.jpg"
        },
        {
            id: 14,
            name: "Pansy",
            price: 60,
            salePrice: 0 ,
            description: "Small, colorful flower with velvety petals in shades of purple, blue, yellow, and white. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 13,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693509997/zyozcmd3dwbhfgxd9vly.jpg"
        },
        {
            id: 15,
            name: "Marigold",
            price: 75,
            salePrice: 0 ,
            description: "Small, bushy plant with gold, orange, or yellow flowers that attract butterflies and bees. Blooms from summer to fall.",
            isSale: false,
            saleDiscount : 0,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510339/njtbsczrcm8cs4pnuftr.jpg"
        },
        {
            id: 16,
            name: "Viola",
            price: 80,
            salePrice: 0 ,
            description: "Small, delicate flowers with a range of colors including purple, white, yellow, and blue. Blooms during cool weather seasons.",
            isSale: true,
            saleDiscount : 40,
            type: "smallPlants",
            img1 : "http://res.cloudinary.com/dj28bsagl/image/upload/v1693510624/dxsq041t63mkhl8mm2pr.jpg"
        },
    ];

    return Response.json(flowers);
}