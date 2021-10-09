import Head from 'next/head'

import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'
import Image from 'next/image'


const Product = ({product}) => {

    return (
        
        <div className="contentContainer">
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                    
                }
                {product.meta_description &&
                    <meta name="description" content={product.meta_description}/>
                    
                }


            </Head>
            <h3>{product.name}</h3>
            <Image layout="responsive" width="100vw" height="100vh" src={fromImageToUrl(product.image)}/>
            <h3>{product.name}</h3>
            <p>${twoDecimals(product.price)}</p>
            
            <p>
                {product.content}
            </p>
        </div>

    )


}

export async function getStaticProps({params:{slug}}){
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
  const found = await product_res.json()
  
  return {
      props:{
          product: found[0]
      }
  }
}


export async function getStaticPaths(){
    //Retrieve all possible paths

    const products_res = await fetch(`${API_URL}/products/`)
    const products = await products_res.json()

    //Return them to NextJS context

    return {
        paths: products.map(product=>({
            params: { slug: String(product.slug)}

        })),
        fallback: false
    }


}


export default Product