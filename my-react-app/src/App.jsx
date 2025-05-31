import { useEffect, useState } from 'react';

function APP() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/pokemons')
            .then((res) => res.json())
            .then((data) => setPokemons(data));
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {pokemons.map((poke) => (
                <div
                    key={poke.id}
                    style={{
                        border: '1px solid gray',
                        padding: '10px',
                        width: '150px',
                    }}
                >
                    <img
                        src={poke.image}
                        alt={poke.name}
                        style={{ width: '100%' }}
                    />
                    <h4>{poke.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default APP;
