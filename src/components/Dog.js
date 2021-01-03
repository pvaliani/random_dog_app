// Here we pass the dog as props to Dog from the App container which is where the dogs state is stored. Once the prop is passed to Dog here we can return it. In App.js we pass a dog as {dog.message} i.e the url of the random dog stored in state from the fetch. This is then reproduced on screen using an img tag


const Dog = ({dog}) => {


        return (

            <>
            
          {/* the dog prop containing dog.message is passed here */}
            <img src={dog}></img>
            <h1>Hiya dog</h1>
            
            
            </>


        );


};

export default Dog;