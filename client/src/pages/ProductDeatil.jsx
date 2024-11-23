import { useParams } from "react-router-dom";
const ProductDeatil = () => {
    const { proid } = useParams();
  return (
    <>
    <center>
        <h1> Welcom to Product Detail Page:{proid}</h1>
    </center>
    </>
  )
}

export default ProductDeatil;