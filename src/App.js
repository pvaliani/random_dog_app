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


  const handleDog = () => {
    setDogs(fetchDogs);
    
  }

  // We need this statement to say if there are no dogs initially then return null otherwise will receive an error after the first fetch 

  if(!dogs) return null;

  // dogs.message is assigned to the dog prop on the left and contains the url from the object 

  return (
   <>
      <h1>Random Woofer Generator: Here's yer dug</h1>
      <Dog dog={dogs.message} />
      <button onClick={handleDog}> Another Dug </button>
   
   </>
  );
}

export default App;
