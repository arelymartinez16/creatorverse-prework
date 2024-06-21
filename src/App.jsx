import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from "./client"
import { Route, Routes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import Navbar from './components/Navbar'

function App() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .order("created_at", { ascending: false })
      
      if (error) {
        throw new Error(`Error fetching creators: ${error.message}`);
      }
      else {
        setCreators(data)
      }
    }

    fetchCreators()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ShowCreators creators={creators}/>}></Route>
        <Route path='/add' element={<AddCreator />}></Route>
        <Route path='/post/:id' element={<ViewCreator />}></Route>
        <Route path='/edit/:id' element={<EditCreator />}></Route>
      </Routes>
    </>
  )
}

export default App
