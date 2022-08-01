import { actors } from "../data";

function Actors() {
  return  <div>
  <h1>Actors Page</h1>
  {actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h3>Name: {actor.name}</h3>
        <p>Movies: </p>
        <ul>
          {actor.movies.map((movie, i) => (
            <li key={movie + i}> {movie}</li>
          ))}
        </ul>
      </div>
    );
  })}
</div>;
}

export default Actors;