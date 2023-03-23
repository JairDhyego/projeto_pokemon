import Image from "next/image";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre</h1>
      <p>Projeto feito por <span>Jair Dhyego</span> mostrando os pokemons da temporada principal do Anime POKEMON!</p>


      <p>
        É uma franquia de mídia que pertence a The Pokémon Company, tendo sido criada por Satoshi Tajiri em 1995. Ela é centrada em criaturas ficcionais chamadas "Pokémon", que os seres humanos capturam e os treinam para lutarem entre si.
      </p>
      <Image
        src="/img/charizard.png"
        width={300}
        height={300}
        alt="Imagem do Charizard"
      />
    </div>
  )
}

export default About;