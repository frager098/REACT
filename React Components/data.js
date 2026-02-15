const productsList = []
export default async function getProducts() {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data)
    productsList.push(data.products.map(product => {
        return ({
            key: product.id,
            title: product.title,
            image: product.thumbnail,
            description: product.description,
            category: product.category,
            price: product.price,
            rating: product.rating
        }
        )
    })
    )
    return productsList
}


