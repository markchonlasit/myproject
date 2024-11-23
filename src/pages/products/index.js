import Head from "next/head";
import product1 from"../../../public/assets/image/1111.jpg"
import product2 from"../../../public/assets/image/2222.jpg"
import Image from "next/image";
import Link from "next/link";
 
export default function Product({product}){
    console.log(`-product`,product)
    return(<>
        <Head>
            <title>Product</title>
        </Head>
        <div
            style ={{background:"linear-gradient(90deg, rgb(186 190 235) 0%, rgb(171 239 230) 100%);"}}
            className="min-h-screen justify-items-center p-20"
           
        >
            <p className="text-5xl font-semibold mb-20" >Products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
                {product.map((item) =>(
                    <Link
                        key={item.id}
                        href={`/products/${item.id}`}
                        className = "mix-blend-multiply"
                    >
                        <div className="justify-self-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-[180px] h-[220px]justify-self-center hover:scale-105"
                />
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm">{item.price}</p>
                        </div>
                    </Link>
            ))}
            {/*<div>
                <Image
                    src={product2}
                    alt="TeslaModel S"
                    className="w-[180px] h-[220]"
                />
                    <p className="font-semibold">TeslaModel S</p>
                    <p className="text-sm">39999$</p>
            </div>
            <div>
                <Image
                    src={product1}
                    alt="product 1"
                    className="w-[180px] h-[220]"
                />
                    <p className="font-semibold">product1</p>
                    <p className="text-sm">39999$</p>
            </div>
            <div>
                <Image
                    src={product1}
                    alt="product 1"
                    className="w-[180px] h-[220]"
                />
                    <p className="font-semibold">product1</p>
                    <p className="text-sm">39999$</p>
            </div>*/}
        </div>
    </div>
    </>)
 
}
 
export async function getServerSideProps() {
    const resp =await fetch(`https://fakestoreapi.com/products`);
    const product =await resp.json();
    return{
        props: { product }
    }
}