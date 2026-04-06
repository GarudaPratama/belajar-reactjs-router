import { useParams } from "react-router-dom";



export default function ProductDetail() {
    const params = useParams();

    return (
        <>
            <h1>Product Details {params.userId}</h1>
            <p>Product detail page {params.addresId}</p>
        </>
    )
}