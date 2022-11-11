import { IProduct } from './src/interfaces/IProducts';
import mongoose from 'mongoose';
import ProductModel from './src/models/Produto';
import UserModel from './src/models/UserModel';

const MONGO_DB_URL = 'mongodb://localhost:27017/radarFit-BackEnd-App';

mongoose.connect(MONGO_DB_URL).then(() => {
    console.log("mongou-se");
}).catch((err) => {
    console.log(err);
    
})

const seedProducts: IProduct[] = [
    {
        created: new Date(),
        updated: new Date(),
        produto: 'I14Pro Max',
        valor: 700.00,
        url_image: 'https://m.media-amazon.com/images/I/51Qw3q+aeXL._AC_SY300_SX300_.jpg',
        descricao:'Adotada tela IPS HD de 6,1 polegadas, o smartphone de 6,1 polegadas traz uma experiência visual mais ampla e cores e nitidez extraordinárias, permitindo que você explore todos os detalhes e maximize sua experiência visual.',
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'iPhone X Prata',
        valor: 1850.00,
        url_image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnplrVZyb67Z3iA8nGTMlUMsV-yfWETV3kHsGkmDvVNZgTIiaROmNgMb6ynO2YXLoEiy5NjjgtyIK3lj-DHxk2srm1GWdVt_SZwZYnMRINyPDaM0WDGUp6-g',
        descricao:'O novo smartphone da Apple, o iPhone X, traz tantas novidades incríveis que vai fazer você repensar o modo como você usa o seu smartphone. Seu novo design, ainda mais bonito, foi construído com um resistente vidro na frente e atrás. '
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Samsung Galaxy M13',
        valor: 850.00,
        url_image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnplrVZyb67Z3iA8nGTMlUMsV-yfWETV3kHsGkmDvVNZgTIiaROmNgMb6ynO2YXLoEiy5NjjgtyIK3lj-DHxk2srm1GWdVt_SZwZYnMRINyPDaM0WDGUp6-g',
        descricao:'O Galaxy A13 combina cores elegantes e suavidade ao toque. As curvas refinadas o tornam confortável para segurar e facilitam a navegação na tela. Escolha entre as cores Preta, Branca, Azul e Rose.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Smartphone Infinix Note 10 Pro',
        valor: 1550.00,
        url_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHB5HyBbNP_g-STqhGU_0veNczKqUhMnm1NR2uTD7hd2aHtd8G3dJkGc2ix4Ci0v6o8cUQOgGAaxjPHOYjAzsEHJBr2DxESBdvH2nCqnR3DrlbByTbU8falA',
        descricao:'O melhor modelo Note da Infinix, sexta maior fabricante de Smartphones do mundo, o Infinix Note 10 Pro chega oficialmente ao Brasil. Poderoso, o Infinix Note 10 Pro traz a maior memória da categoria, com 256 GB de armazenamento e 8 GB de RAM.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Motorola Moto G7',
        valor: 450.00,
        url_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqZpA7H9ZViAM3q45lMO9IQDn6lMyMO3oWrvjqYMkI-1eJI8K-Bq7eML859Rn4HNnxR6mVyhpjAFZU1mXVtK4bSK-tEKE3Hg&usqp=CAY',
        descricao:'Inteligente e preditivo O Motorola G7 Plus Dual SIM tem o sistema operacional avançado Android 9.0 Pie que aprende seus hábitos para se adaptar à sua rotina e alcançar a máxima eficiência de sua equipe.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Motorola Moto G22',
        valor: 800.00,
        url_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJNBApeDY9Iud150WZEx1NySM2rf4r9RcuE_tF9yha62BuB2yhnTwZLOWkGkR8YpoG-8tN-ZMjdrHvjRHXVbqKm80Sgyi8IX_Yldsb0E57SB4qYVkas8PxGA&usqp=CAE',
        descricao:'Tire fotos surreais com o Moto G22. O sistema Quad Câmeras com sensor de 50MP e câmera de selfie de 16MP captura fotos perfeitas de todos os ângulos a qualquer hora do dia. Tire fotos mais claras e nítidas até no escuro com a tecnologia Quad Pixels.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Positivo Dual Chip p26',
        valor: 160.90,
        url_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNNimAoVgnuWw58dSjDqQq7ferIn2F6FM4gPg356MOl-m2RP1PwcBOqgqEORXmXOoOvAn_ubfulvw23UPT6ECFJW-tv9DykDOvzJuEZMmxVwTV110xLGLGYA&usqp=CAE',
        descricao:'O Celular Positivo P26 32 MB 2G traz recursos funcionais para o seu dia a dia. Conte com Rádio FM e com a versatilidade de salvar arquivos em MP3. O dispositivo permite que o usuário escute rádio sem a necessidade de um fone de ouvido.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Samsung Galaxy A03s',
        valor: 473.10,
        url_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkZQg364YyG5UzBZ_q8P8bJ08hrcrdLoqwUEZDw2pQoE5xqH-4qwt87tZkQH2lSPM3Mia5s6W_ISYu7ibv9qYRLgIW9kF9i6PdpuB53-o04zXcM5jvqmdD',
        descricao:'Tenha uma solução para o seu dia a dia sem deixar nada para trás com o Galaxy A03s da Samsung. Realize fotos especiais e únicas com o conjunto de 3 câmeras na parte de trás do aparelho'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Samsung Galaxy A03s',
        valor: 473.10,
        url_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkZQg364YyG5UzBZ_q8P8bJ08hrcrdLoqwUEZDw2pQoE5xqH-4qwt87tZkQH2lSPM3Mia5s6W_ISYu7ibv9qYRLgIW9kF9i6PdpuB53-o04zXcM5jvqmdD',
        descricao:'Tenha uma solução para o seu dia a dia sem deixar nada para trás com o Galaxy A03s da Samsung. Realize fotos especiais e únicas com o conjunto de 3 câmeras na parte de trás do aparelho.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'Smartphone Samsung Galaxy A03S',
        valor: 490.10,
        url_image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkJZKFhfX-_WkSFOSO6gSfy0BbcMbu876e_XzJQ3Pf8yGEg0K98l5Kik65yodPZHj0yGVxhZT6ZhwAo7Xj4_9PRU7OxSpLGSaQF9tCHS4a5x0lq1YLljOy',
        descricao:'Tenha uma solução para o seu dia a dia sem deixar nada para trás com o Galaxy A03s da Samsung. Realize fotos especiais e únicas com o conjunto de 3 câmeras na parte de trás do aparelho.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: ' Motorola Moto G31',
        valor: 670.00,
        url_image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkVoTihtUhrZNcuMSXFENJRmxoHKg1otVI7yAFDWFG61Le4Hlb68INq_7FxZ4yHhUf58EiDeh4o0BiCGIfDqOGGFGokmdQdILLFKl2yYEGgGW6tP-W184rtA',
        descricao:'Você precisa ter um smartphone inovador e pronto para o uso nas atividades do dia a dia! O Smartphone Moto G31 da Motorola é a melhor opção de alta qualidade.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: ' Philco Hit P12 128GB Rose Gold',
        valor: 1070.00,
        url_image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZnPMlrybiBTRiDkF3uY8oBtHTL1cvEEmD5gdc3AyaPMsXY6r1rZl-lbzXxEeB2HU_SzIyNNdhHtgL6kL5nLA399Xu35a7Arx56S0Det5bTlIiOBTbddW98w',
        descricao:'Você precisa ter um smartphone inovador e pronto para o uso nas atividades do dia a dia! O Smartphone Moto G31 da Motorola é a melhor opção de alta qualidade.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: ' LG K41S 32GB - Preto',
        valor: 600.00,
        url_image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7Ki-CPH5s43ikBqueWhNOWLIACfQRFlqS6fjtHTrdNAIMzR35pECWYLsJSzs4f1TOmZy5QidIrMuRPOutT1MKxjb6ckpFJqME2-EBlOea2vQqpGYarLIkTA',
        descricao:'Descubra o seu jeito favorito de fotografar O novo K41S possui 4 câmeras, cada uma com sua particularidade, para que você tire fotos incríveis quando, onde e como quiser. Tire as melhores fotos com a Inteligência Artificial Extraia o melhor de cada cena.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: ' Samsung Galaxy A73 5G - Cinza',
        valor: 1100.00,
        url_image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTb_09Im77P1wJ78Riyy1CCd32OZbPrMDQSG0aOiO07F7a6ZgpKSOylo6PW7eYjP-qWcwgmpwI406vXEwu2FvU0KpegjwnZJ-6WdE6ronVEgFSpggfDi-l5pA&usqp=CAE',
        descricao:'É hora de entrar no próximo capítulo. A conexão 5G super rápida eleva suas experiências diárias e as aprimora muito com uma a velocidade de outro nível.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: ' Moto G200 5G - Verde',
        valor: 1100.00,
        url_image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAn1kFLS6yoqZhiys3S07riEQZxdLJNAB3xmBn39SOk33lw_V2IGtFVJ_Adv62CQdA-Ll8iPcPNuRPKOgrJ3llDbgwNNckVKe-MakWRSwye-VqgpyQ9VVSdw',
        descricao:'Chegou a hora ter um smartphone de alta qualidade e design ultramoderno! O Smartphone Moto G200 da Motorola é a melhor opção para quem precisa de um item inovador e com o design incrível.'
    },
    {
        created: new Date(),
        updated: new Date(),
        produto: 'M12Pro Smart Phones 1 ',
        valor: 1300.00,
        url_image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaqovIY2l65IcOllNqwXlGMGRR1eeaokIXKpYkt-x_Qke3b-XFEy2tHdo5IaeQCOh4jhfl7LOM3CD1SMwyVHjg_bsZVSLBXD3tEDimYDU',
        descricao:'Mesmo na luz mais escura, sempre que você precisar, seu M12Pro está ali com você, capturando cada momento com precisão cristalina, transforme suas selfies em obras-primas e brilhe em todas as fotos.'
    },
]

const seedUsers = [
    {
        nome: "Alberto Justus",
        email: "admin@gmail.com",
        senha: "queijo_suiço",
        role: "Administrador"
    },
    {
        nome: "Alehandro Pietro",
        email: "user@gmail.com",
        senha: "perna_de_grilo",
        role: "Usuário"
    }
]

const Prod = new ProductModel()
const User = new UserModel
const seedDB = async () => {
    await Prod.deleteMany({})
    await User.deleteMany({})
    await Prod.insertMany(seedProducts)
    await User.insertMany(seedUsers)
}

seedDB().then(() => {
    mongoose.connection.close()
});