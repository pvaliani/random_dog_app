import { useState, useEffect } from 'react';
import Dog from './components/Dog';
import './App.css';

function App() {

  // Create Dog state variable
  const [dogs, setDogs] = useState(null);

  // Fetch the dogs

  const fetchDogs = () => {

    const url = 'https://dog.ceo/api/breeds/image/random'

    fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {

      setDogs(jsonData);

    })

    


  };


  // The useEffect is actually performing the fetchDogs method and returning it to the state of dogs

  useEffect(() => {
    fetchDogs();
  }, []);


  if(!dogs) return null;

  return (
   <>
      <h1>Random Woofer Generator: Here's yer dug</h1>
      <Dog dog={dogs.message} />
   
   </>
  );
}

export default App;
