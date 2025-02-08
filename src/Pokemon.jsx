import { useEffect, useState } from "react";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [pokId, setPokId] = useState(1);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokId}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.error("Error fetching Pokémon:", error));
    }, [pokId]);

    return (
        <>
            <input
                type="number"
                onChange={(e) => setPokId(e.target.value)}
                value={pokId}
            />
            {pokemon ? (
                <div>
                    <h3>Name: {pokemon.name} </h3>
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </>
    );
};
export default Pokemon;
