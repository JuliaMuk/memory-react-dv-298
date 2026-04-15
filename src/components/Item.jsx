
import images from "../data.json"
import { useParams, Navigate } from "react-router-dom";

export default function Item() {
    const param = useParams()

     const image = images.find((item) => (item.id == param.id))
    // if (!image) {
    //    return <Navigate to="/404" replace={true} />;
    // }
    return (
        <>
            <img className="item" src={image.url} alt="" />
        </>
    )
}