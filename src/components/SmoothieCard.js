import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient"
const SmoothieCard =({smoothie,onDelete})=>{
    const handleDelete=async (e)=>{
        const {data,error}=await supabase
        .from('smoothies')
        .delete()
        .eq('id',smoothie.id)

        if (error){
            console.log(error)
        }
        else{
            onDelete(smoothie.id)
        }
        if(data){
            console.log(data)
            
        }

    }
    return(
        <div className="smoothie-card">
            <h3>{smoothie.title}</h3>
            <p>{smoothie.method}</p>
            <img src ={smoothie.image} alt={smoothie.title} height={200} className="center-img"></img>
            <div className="rating">{smoothie.rating}</div>
            <div className="buttons">
                <Link to={"/"+smoothie.id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>
    )
}

export default SmoothieCard;