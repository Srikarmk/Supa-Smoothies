import SmoothieCard from "../components/SmoothieCard";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [error, setError] = useState(null);
  const [smoothies, setsmoothies] = useState(null);
  const [orderBy,setOrderBy]=useState('created_at')

  const handleDelete = (id) => {
    setsmoothies((prevSmoothies) => {
      return prevSmoothies.filter((sm) => sm.id !== id);
    });
  };
  useEffect(() => {
    const fetchsmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select().order(orderBy,{ascending:false});

      if (error) {
        setError("Could not fetch smoothies");
        setsmoothies(null);
        console.log(error);
      }
      if (data) {
        setsmoothies(data);
        setError(null);
      }
    };
    fetchsmoothies();
  }, [orderBy]);
  return (
    <div className="page home">
      {error && <p>{error}</p>}
      {smoothies && (
        <div className="smoothies">
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Created</button>
            <button onClick={() => setOrderBy('title')}>Title</button>
            <button onClick={() => setOrderBy('rating')}>Rating</button>
          </div>
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} onDelete={handleDelete}>
                {" "}
                
              </SmoothieCard>
              
            ))}
            
          </div>
          <h3 className="footer">Project based on Supabase and React created by <Link to='https://github.com/Srikarmk'>SrikarMk</Link> ; <Link to='https://twitter.com/Srikarismad'>Twitter</Link></h3>
        </div>
      )}
    </div>
  );
};

export default Home;
