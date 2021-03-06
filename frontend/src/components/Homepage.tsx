import "./Homepage.css";
import gottaCleanItAll2 from "../assets/gottaCleanItAll2.png";
import pokemon from '../assets/pokemon.jpg';

function Homepage() {

  return (
    <div className="Homepage">

      <div className="topSide">
        <p>**If you would like to test our site without creating a new account, feel free to use the 
        following information and have fun!**</p>
        <p>Admin Name: Ash | Admin Password: 123</p>
        <p>Gym Name: Cerulean Gym | Gym Password: 123</p>
        <p>Trainer Name: Jimmy</p>
      </div>

      <div className="container">
      <div className="leftSide">
        <h3 className="Welcome">welcome!</h3>
        <h4 className="About">how difficult is it sometimes to offer children incentive to do basic, 
          everyday chores/tasks around the house without always offering them money 
          to do so? do you live with multiple roommates and have a tough time trying 
          to divvy up the tasks between yourselves? with this application you will be 
          able to create a task calendar that tracks each users progress and completion 
          from their list of chores, organized by the day, and once 
          a task is completed the user will be rewarded a pokemon based on the level of 
          difficulty of the chore. collect as many as you can and view them on your very 
          own choredex!</h4>
        </div>

        <div className="rightSide">
          <div className="rightFrame">
            <img className="pokeText" src={gottaCleanItAll2} alt="gotta clean it all" />
            <img className="pokemon" src={pokemon} alt="starter pokemon" />
          </div>
        </div>
        </div>

    </div>
  );

}

export default Homepage;