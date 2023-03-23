import Image from "next/image";

import styles from "../../styles/pokemon.module.css"


export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((item, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  };

};

export const getStaticProps = async (context) => {

  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json();

  return {
    props: { pokemon: data }
  }

};

const Pokemon = ({ pokemon }) => {

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        width="200"
        height="200"
        alt={pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>

      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item) => (
            <span
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
              key={item.id}
            > {item.type.name} </span>
          ))}</div>
      </div>

      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>

        <div >
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>

  );
}

export default Pokemon