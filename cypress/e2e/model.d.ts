export interface twoProductSale {
    products : [
        {
            title: string,
            priceComplete: string,
            price: string,
            description: string,
            image: string
        }
    ],
    totalPrice: string,
    name: string,
    country: string,
    city: string,
    card: string,
    month: string,
    year: string
}

export interface postUser {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    userStatus: 0
}

export interface updateUser {
    body: {
        id: string,
        firstName: string,
        email: string
    },
    username: string
}

export interface getUser {
    id: 0,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    userStatus: 0
  }

export interface deleteUser {
    username: string
}