import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi";

export default function ProductDetail({ product}){
    console.log("-product-",product)
    return(<>
        <Head>
            <title>Product Detail Page</title>
        </Head>
        <div
            style ={{background:"linear-gradient(90deg, rgb(186 190 235) 0%, rgb(171 239 230) 100%);"}}
            className="min-h-screen justify-items-center p-20"
        
       
        >
            <link href="/products"className="flex justify-self-start mb-10">
                <HiArrowSmRight />
            </link>
            <div className="w-full md:w-1/2">
                <p className="text-4xl text-center font-bold">{product.title}</p>
                <Image 
                src={product.image} 
                alt={product.title}
                className ="w-[180px] h-[220px] mix-blend-multiply justify-self-center my-5" 
                width={180}
                height={220}
                ></Image>
            </div>
            <div className="text-lg">
                <p>
                    <b>Category</b> {product.category}
                </p>
                <p>
                    <b>Description</b> {product.description}
                </p>
                <p>
                    <b>Price</b> {product.price}
                </p>
                <p>
                    <b>Rating</b> {product.rating.rate}
                </p>
                <p>
                    <b>Count</b> {product.rating.count}
                </p>
            </div>
           
        </div>
    </>)
}


export async function getServerSideProps(context) {
    const resp =await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product =await resp.json();
    return{
        props: { product }
    }
}