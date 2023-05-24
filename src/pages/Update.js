import { useNavigate, useParams ,Link} from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !method || !rating || !image) {
      setFormError("Please fill in all the fields correctly!");
      return;
    }
    const {data,error}=await supabase
    .from('smoothies')
    .update({title,image,method,rating})
    .eq('id',id)

    if (error){
      console.log(error)
      setFormError("Please fill in all the fields correctly")
    }
    else{
      console.log('here')
      navigate("/", { replace: true });
      
    }
    if(data){
      setFormError(null);
    }
  };

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
        setImage(data.image);
        console.log(data);
      }
    };
    fetchSmoothies();
  }, [id, navigate]);
  return (
    <div className="page update">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Update Smoothie Recipe</button>
        {formError && <p className="error">{formError}</p>}
      </form>
      <h3 className="footer">Project based on Supabase and React created by <Link to='https://github.com/Srikarmk'>SrikarMk</Link> ; <Link to='https://twitter.com/Srikarismad'>Twitter</Link></h3>
    </div>
  );
};

export default Update;
