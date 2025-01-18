import CharacterList from '../components/characterList'

const Home = () => {
    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <p>Welcome to the Rick and Morty character database. Here you can find information about all the characters from the show.</p>
            <CharacterList />
        </div>
    )
}

export default Home