export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            }
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Categories",
                url: "/categories",
                icon: "element.svg",
            },
            {
                id: 3,
                title: "Services",
                url: "/services",
                icon: "product.svg",
            },
            {
                id: 4,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 5,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],
    },

    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Calender",
                url: "/",
                icon: "calender.svg",
            },
        ],
    },

    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "settings.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "buckup.svg",
            },

        ],
    },

    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "logs",
                url: "/",
                icon: "log.svg",
            },

        ],
    },
]



export const topDealUsers = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256"
    },

    {
        id: 3,
        img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.998"
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.998"
    },
]



export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}


export const chartBoxService = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Services",
    number: "238",
    dataKey: "services",
    percentage: 21,
    chartData: [
        { name: "Sun", services: 400 },
        { name: "Mon", services: 600 },
        { name: "Tue", services: 500 },
        { name: "Wed", services: 700 },
        { name: "Thu", services: 400 },
        { name: "Fri", services: 500 },
        { name: "Sat", services: 450 },
    ],
}

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.238",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
    ],
}


export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
    ],
}



export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000
        },
        {
            name: "Mon",
            profit: 3000
        },
        {
            name: "Tue",
            profit: 5000
        },
        {
            name: "Wed",
            profit: 2000
        },
        {
            name: "Thu",
            profit: 3500
        },
        {
            name: "Fri",
            profit: 2500
        },
        {
            name: "Sat",
            profit: 5000
        },
    ]
}


export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 6000
        },
        {
            name: "Mon",
            visit: 3000
        },
        {
            name: "Tue",
            visit: 5000
        },
        {
            name: "Wed",
            visit: 2000
        },
        {
            name: "Thu",
            visit: 3500
        },
        {
            name: "Fri",
            visit: 2500
        },
        {
            name: "Sat",
            visit: 5000
        },
    ]
}



export const userRows = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        lastName: 'Snow',
        firstName: 'Jon',
        email: "snow@gmail.com",
        phone: "0123456789",
        createdAt: "01.02.2023",
        verfied: true
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        lastName: 'Lannister',
        firstName: 'Cersei',
        email: "Lannister@gmail.com",
        phone: "0123456789",
        createdAt: "01.02.2023",
        verfied: false
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        lastName: 'Stark',
        firstName: 'Arya',
        email: "Arya@gmail.com",
        phone: "0123456789",
        createdAt: "01.02.2023",
        verfied: true
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        email: "Daenerys@gmail.com",
        phone: "0123456789",
        createdAt: "01.02.2023",
        verfied: true
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        lastName: 'Frances',
        firstName: 'Rossini',
        email: "Rossini@gmail.com",
        phone: "0123456789",
        createdAt: "01.02.2023",
        verfied: true
    },

];



export const serviceRows = [
    {
        id: 1,
        img: "https://totallytransformed.co.uk/wp-content/uploads/2024/03/2-1080x675.png",
        title: '2D Ultrasound Cavitation + RF + Vacu Slimming Treatment',
        price: '700',
        createdAt: "01.02.2023",

    },
    {
        id: 2,
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        title: 'Emerald Lipo Laser',
        price: '1200',
        createdAt: "01.02.2023",

    },
    {
        id: 3,
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        title: 'Emerald Lipo Laser',
        price: '1200',
        createdAt: "01.02.2023",

    },
    {
        id: 4,
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        title: 'Emerald Lipo Laser',
        price: '1200',
        createdAt: "01.02.2023",

    },
    {
        id: 5,
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        title: 'Emerald Lipo Laser',
        price: '1200',
        createdAt: "01.02.2023",

    },

];


export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    info: {
        username: "Johndoe99",
        fullname: "John Doe",
        email: "johndoe@gmail.com",
        phone: "123 456 789",
        status: "verified",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 6000,
                clicks: 4300,
            },
            {
                name: "Mon",
                visits: 3000,
                clicks: 1800,
            },
            {
                name: "Tue",
                visits: 5000,
                clicks: 2200,
            },
            {
                name: "Wed",
                visits: 2000,
                clicks: 1200,
            },
            {
                name: "Thu",
                visits: 3500,
                clicks: 2000,
            },
            {
                name: "Fri",
                visits: 2500,
                clicks: 1500,
            },
            {
                name: "Sat",
                visits: 5000,
                clicks: 2500,
            },
        ]
    },

    activities: [
        {
            text: "John Doe purchased Emerald Lipo Laser service",
            time: "3 days ago",
        },
        {
            text: "John Doe add 2 services into their wishlist",
            time: "1 week ago",
        },
        {
            text: "John Doe reviewed a service",
            time: "2 days ago",
        },

    ]
}


export const singleService = {
    id: 1,
    title: "Emerald Lipo Laser",
    img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
    info: {
        serviceId: "Ps55DF1156d",
        price: "1,200 AED",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 6000,
                orders: 2200,
            },
            {
                name: "Mon",
                visits: 3000,
                orders: 1200,
            },
            {
                name: "Tue",
                visits: 5000,
                orders: 2500,
            },
            {
                name: "Wed",
                visits: 2000,
                orders: 1100,
            },
            {
                name: "Thu",
                visits: 3500,
                orders: 1800,
            },
            {
                name: "Fri",
                visits: 2500,
                orders: 1200,
            },
            {
                name: "Sat",
                visits: 5000,
                orders: 2200,
            },
        ]
    },
    activities: [
        {
            text: "John Doe purchased Emerald Lipo Laser service",
            time: "3 days ago",
        },
        {
            text: "Mike watson add 2 services into their wishlist",
            time: "1 week ago",
        },
        {
            text: "Halen Gorg reviewed a service",
            time: "2 days ago",
        },

    ]
}
