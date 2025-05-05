import { useParams } from "react-router-dom"
export default function Order(props:any){
    console.log(useParams(),props)
    return (
        <div>
            Order
        </div>
    )
}