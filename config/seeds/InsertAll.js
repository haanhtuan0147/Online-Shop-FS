/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 const { UCS2_UNICODE_520_CI } = require("mysql/lib/protocol/constants/charsets");
const {v4} = require('uuid');
 exports.seed=async (knex)=> {
     var user1=v4();
     var user2=v4();
     var user3=v4();
     await knex('User').insert([
         {
             id:v4(),
             Email:"haanhtuan0147@gmail.com",
             Password:"a1234567",
             UserName:"Hà Anh Tuấn",
             PhoneNumber:"0358970771",
             Identitycard:"068200009380",
             Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
             AccountRights:"Root",
             Avatar:"1653388616406-306847562-ei.png"
         },
         {
            id:v4(),
            Email:"haanhtuantube0147@gmail.com",
            Password:"a1234567",
            UserName:"Hà Anh Tuấn",
            PhoneNumber:"0358970771",
            Identitycard:"068200009380",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            AccountRights:"Admin",
            Avatar:"1653388616406-306847562-ei.png"
        },
        {
            id:user1,
            Email:"haanhtuantub0147@gmail.com",
            Password:"a1234567",
            UserName:"Nguyễn Minh Nhật",
            PhoneNumber:"0358970771",
            Identitycard:"068200009380",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            AccountRights:"User",
            Avatar:"1653388616406-306847562-ei.png"

        },
        {
            id:user2,
            Email:"haanhtuantu0147@gmail.com",
            Password:"a1234567",
            UserName:"Phạm Minh Tiến Phước",
            PhoneNumber:"0358970771",
            Identitycard:"068200009380",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            AccountRights:"User",
            Avatar:"1653388616406-306847562-ei.png"

        },
        {
            id:user3,
            Email:"haanhtuant0147@gmail.com",
            Password:"a1234567",
            UserName:"Hà Anh Tuấn",
            PhoneNumber:"0358970771",
            Identitycard:"068200009380",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            AccountRights:"User",
            Avatar:"1653388616406-306847562-ei.png"

        }
     ])
     var Field1=v4()
     var Field2=v4()
     await knex('Field').insert([
        {
            id:Field1,
            FieldName:"LapTop",
       },
       {
            id:Field2,
            FieldName:"Bookstore",
        }
    ])
    var category1=v4()
    var category2=v4()
    var category3=v4()
    var category4=v4()
    var category5=v4()
    var category6=v4()
    await knex("Product_Category").insert([
        {
            id:category1,
            CategoryName:"Wifi",
            fieldId:Field1,
        },
        {
            id:category2,
            CategoryName:"Ram",
            fieldId:Field1,
        },
        {
            id:category3,
            CategoryName:"laptop",
            fieldId:Field1,
        },
        {
            id:category4,
            CategoryName:"Comedy",
            fieldId:Field2,
        },
        {
            id:category5,
            CategoryName:"Adventure",
            fieldId:Field2,
        }
        ,
        {
            id:category6,
            CategoryName:"Science Fiction",
            fieldId:Field2,
        }
    ])
    var Product=[]
    for (var i=0;i<18;i++){
        Product.push(v4())
    }
    await knex("Product").insert([
        {
            id:Product[0],
            ProductName:"Apple MacBook Air M1 2020 - 13 Inchs (8GB / 16GB - 256GB / 512GB) - Hàng Chính Hãng",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:10000,
            categoryId:`["${category3}"]`,
            DetailsProduct:`{"Cpu":"i3-9100F","Ram":"8GB","Hard Drive":"256GB SSD"}`
        },
        {
            id:Product[1],
            ProductName:"Apple MacBook Pro M1 PRO 2021 - 16 Inchs (M1 PRO - 16GB / 32GB - 512GB / 1TB) - Hàng Chính Hãng",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:15000,
            categoryId:`["${category3}"]`,
            DetailsProduct:`{"Cpu":"i3-9100F","Ram":"8GB","Hard Drive":"256GB SSD"}`
        },
        {
            id:Product[2],
            ProductName:"Apple MacBook Pro M1 PRO 2021 - 16 Inchs (M1 PRO - 16GB / 32GB - 512GB / 1TB) - Hàng Chính Hãng",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:20000,
            categoryId:`["${category3}"]`,
            DetailsProduct:`{"Cpu":"i3-9101F","Ram":"16GB","Hard Drive":"200GB SSD"}`
        },
        {
            id:Product[3],
            ProductName:"USB Wi-Fi chuẩn N tốc độ 300Mbps N300UM-TG - Hàng chính hãng",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:10000,
            categoryId:`["${category1}"]`,
            DetailsProduct:`{"Model":"N300UM"}`
        },
        {
            id:Product[4],
            ProductName:"USB Wi-Fi chuẩn N tốc độ 300Mbps N300UM-TG - Hàng chính hãng",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:15000,
            categoryId:`["${category1}"]`,
            DetailsProduct:`{"Model":"N300UM"}`
        },
        {
            id:Product[5],
            ProductName:"Bộ Phát Wifi TP-Link Archer C54 Băng Tần Kép Chuẩn AC1200 - Hàng Chính Hãng",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:20000,
            categoryId:`["${category1}"]`,
            DetailsProduct:`{"Model":"Archer C54"}`
        },
        {
            id:Product[6],
            ProductName:"RAM PC DDR3L Samsung 4GB Bus 1600 – Hàng Nhập Khẩu",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:10000,
            categoryId:`["${category2}"]`,
            DetailsProduct:`{"RAM":"4GB"}`
        },
        {
            id:Product[7],
            ProductName:"RAM PC DDR3L Samsung 8GB Bus 1600 – Hàng Nhập Khẩu",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:15000,
            categoryId:`["${category2}"]`,
            DetailsProduct:`{"RAM":"8GB"}`
        },
        {
            id:Product[8],
            ProductName:"Bộ Phát Wifi TP-Link Archer C54 Băng Tần Kép Chuẩn AC1200 - Hàng Chính Hãng",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:20000,
            categoryId:`["${category2}"]`,
            DetailsProduct:`{"RAM":"16GB"}`
        },
        {
            id:Product[9],
            ProductName:"Yêu Thầm Tập 1",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:10000,
            categoryId:`["${category4}","${category5}"]`,
            DetailsProduct:`{"Page":"260"}`
        },
        {
            id:Product[10],
            ProductName:"Death Note Short Stories (Tặng Kèm Postcard Gập Cho 100% Phiên Bản Việt Nam)",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:10000,
            categoryId:`["${category4}","${category5}","${category6}"]`,
            DetailsProduct:`{"Page":"260"}`
        },
        {
            id:Product[11],
            ProductName:"Chú Thuật Hồi Chiến Tập 1",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:10000,
            categoryId:`["${category5}","${category6}"]`,
            DetailsProduct:`{"Page":"270"}`
        },
        {
            id:Product[12],
            ProductName:"Thám tử lừng danh Conan Tập 99",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:15000,
            categoryId:`["${category4}","${category5}"]`,
            DetailsProduct:`{"Page":"260"}`
        },
        {
            id:Product[13],
            ProductName:"Thám tử lừng danh Conan Tập 1",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:15000,
            categoryId:`["${category4}","${category5}","${category6}"]`,
            DetailsProduct:`{"Page":"260"}`
        },
        {
            id:Product[14],
            ProductName:"Thám tử lừng danh Conan Tập 2",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:15000,
            categoryId:`["${category5}","${category6}"]`,
            DetailsProduct:`{"Page":"270"}`
        },
        {
            id:Product[15],
            ProductName:"Thám tử lừng danh Conan Tập 3",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:20000,
            categoryId:`["${category4}","${category5}"]`,
            DetailsProduct:`{"Page":"260"}`
        },
        {
            id:Product[16],
            ProductName:"Thám tử lừng danh Conan Tập 4",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:20000,
            categoryId:`["${category4}","${category5}","${category6}"]`,
            DetailsProduct:`{"Page":"260"}`
        },
        {
            id:Product[17],
            ProductName:"Thám tử lừng danh Conan Tập 5",
            DescribeProduct:"MacBook Air là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi ngoạn mục với chip Apple M1 mạnh mẽ.\n Tạo ra một cú nhảy vọt về hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ. (1)",
            Image:'["1653388616406-306847562-ei.png"]',
            Money:20000,
            categoryId:`["${category5}","${category6}"]`,
            DetailsProduct:`{"Page":"270"}`
        },

    ])
    var Shopping_Cart=[]
    for(var i=0;i<9;i++)
    {
        Shopping_Cart.push(v4())
    }
    await knex("Shopping_Cart").insert([
        {
            id:Shopping_Cart[0],
            userId:user1,
            Status:"Success",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(),
        },
        {
            id:Shopping_Cart[1],
            userId:user1,
            Status:"Success",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(),
        },
        {
            id:Shopping_Cart[2],
            userId:user1,
            Status:"Success",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(new Date().getTime()+86400000),
        },
        {
            id:Shopping_Cart[3],
            userId:user2,
            Status:"Success",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(),
        },
        {
            id:Shopping_Cart[4],
            userId:user2,
            Status:"Cancel",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(),
        },
        {
            id:Shopping_Cart[5],
            userId:user2,
            Status:"Success",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(new Date().getTime()+86400000),
        },
        {
            id:Shopping_Cart[6],
            userId:user3,
            Status:"Success",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(),
        },
        {
            id:Shopping_Cart[7],
            userId:user3,
            Status:"Cancel",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(),
        },
        {
            id:Shopping_Cart[8],
            userId:user3,
            Status:"Cancel",
            Address:"70/5/13 Quang Trung Tổ 11 Thị Trấn Liên Nghĩa Huyện Đức Trọng Tỉnh Lâm Đồng",
            IntendTime:new Date(),
            CompletionTime:new Date(),
        }
    ])
    await knex("Order_Product").insert([
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[0],
            productId:Product[0],
            numberProduct:5
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[0],
            productId:Product[1],
            numberProduct:6
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[0],
            productId:Product[2],
            numberProduct:7
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[1],
            productId:Product[3],
            numberProduct:8
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[1],
            productId:Product[4],
            numberProduct:9
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[1],
            productId:Product[5],
            numberProduct:10
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[2],
            productId:Product[6],
            numberProduct:11
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[2],
            productId:Product[7],
            numberProduct:12
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[2],
            productId:Product[8],
            numberProduct:12
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[3],
            productId:Product[9],
            numberProduct:14
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[3],
            productId:Product[10],
            numberProduct:15
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[3],
            productId:Product[11],
            numberProduct:16
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[4],
            productId:Product[12],
            numberProduct:17
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[4],
            productId:Product[13],
            numberProduct:18
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[4],
            productId:Product[14],
            numberProduct:19
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[5],
            productId:Product[15],
            numberProduct:20
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[5],
            productId:Product[16],
            numberProduct:21
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[5],
            productId:Product[17],
            numberProduct:22
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[6],
            productId:Product[0],
            numberProduct:23
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[6],
            productId:Product[1],
            numberProduct:24
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[6],
            productId:Product[2],
            numberProduct:25
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[7],
            productId:Product[3],
            numberProduct:26
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[7],
            productId:Product[4],
            numberProduct:27
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[7],
            productId:Product[5],
            numberProduct:28
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[8],
            productId:Product[6],
            numberProduct:29
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[8],
            productId:Product[7],
            numberProduct:30
        },
        {
            id:v4(),
            shoppingcartId:Shopping_Cart[8],
            productId:Product[8],
            numberProduct:31
        },

    ])
    const Product_Reviews=[];
    for (let i = 0; i < 18; i++) {
        Product_Reviews.push(
            {
                id:v4(),
                userId:user1,
                productId:Product[i],
                NumberStar:Math.floor((Math.random() * 10)+1)
            },
            {
                id:v4(),
                userId:user2,
                productId:Product[i],
                NumberStar:Math.floor((Math.random() * 10)+1)
            },
            {
                id:v4(),
                userId:user3,
                productId:Product[i],
                NumberStar:Math.floor((Math.random() * 10)+1)
            }
            )
    }
    await knex("Product_Reviews").insert(Product_Reviews)
    await knex("Image_Reviews").insert([
        {
            id:v4(),
            productReviewsId:Product_Reviews[0].id,
            Image:'["1653388616406-306847562-ei.png"]'
        },
        {
            id:v4(),
            productReviewsId:Product_Reviews[1].id,
            Image:'["1653388616406-306847562-ei.png"]'
        },
        {
            id:v4(),
            productReviewsId:Product_Reviews[2].id,
            Image:'["1653388616406-306847562-ei.png"]'
        }
    ])
 }