export async function GET() {
    const banners = [
        {
            id: 1,
            suptitle: "Welcome to GreenShop",
            title: "LET'S MAKE A BETTER PLANET",
            description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
            btn: "Shop now",
            img: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
        },
        {
            id: 3,
            suptitle: "Welcome to GreenShop",
            title: "LET'S LIVE IN A BETTER PLANET",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eos aut vitae, exercitationem voluptatum porro veniam animi sit voluptatibus, asperiores esse suscipit accusamus ipsum iusto odio fugiat placeat consequuntur alias?",
            btn: "Let's Start",
            img: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
        },
        {
            id: 3,
            suptitle: "Welcome to GreenShop",
            title: "LET'S OBSERVE A BETTER PLANET",
            description: "Nmadur Nmadur Lalala Balo battar auo io maooo gul! Atirgul lolagul kokgul qoragul jigarrang gul naushnik telefon microsoft chelavek pauk ",
            btn: "Get Credits",
            img: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
        },
    ];

    return Response.json(banners);
}