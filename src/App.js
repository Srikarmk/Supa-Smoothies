import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// Database Pass : UhtI4Ret2GTba5Pk

// URl  :  https://jdmoukinlgnhoztgyisa.supabase.co

// public key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkbW91a2lubGduaG96dGd5aXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4ODkxNDcsImV4cCI6MTk5OTQ2NTE0N30.Ozf53-IKfjZN3FliqdYG6X35Rwkc_tm1wshv36RKiGU