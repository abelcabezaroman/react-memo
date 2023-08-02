import {  useState } from "react";
import "./Memo.css"

const suffle = (array) => array.sort(() => .5 - Math.random())

let defaultPlanets = suffle([
    {
        id: 1,
        name: 'earth',
        img: 'images/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'images/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'images/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: 'images/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: 'images/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: 'images/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'images/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'images/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'images/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: 'images/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: 'images/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: 'images/uranus.svg'
    }
])
let count = 0;

export default function Memo() {
    const [planets, setPlanets] = useState(defaultPlanets)
    const [planetOne, setPlanetOne] = useState({});
    const [planetTwo, setPlanetTwo] = useState({});

    const selectAndCheckPlanet = (planet) => {
        if (planetOne.id) {
            setPlanetTwo(planet)
            checkPlanet(planetOne, planet)
        } else {
            setPlanetOne(planet)
        }
    }

    const checkPlanet = (planetOne, planetTwo) => {
        setTimeout(() => {
            if (planetOne.img === planetTwo.img) {
                count++
                const modifiedPlanets = planets.map((planet) => planet.img === planetOne.img ? { ...planet, matched: true } : planet)
                setPlanets(modifiedPlanets)

            }

            setPlanetOne({})
            setPlanetTwo({})
        }, 500)
    }

    const resetGame = () => {
        setPlanets(suffle(defaultPlanets))
        setPlanetOne({})
        setPlanetTwo({})
        count = 0;
    }
    return <div className="c-memo">
        {planets.map((planet) => <div key={planet.id} >
            {(planetOne.id === planet.id || planetTwo.id === planet.id) && <img src={planet.img} alt={planet.name} />}
            {planet.matched && <img src="images/tick.svg" alt={"Tick " + planet.name} />}
            {!((planetOne.id === planet.id || planetTwo.id === planet.id) || planet.matched) && <img onClick={() => selectAndCheckPlanet(planet)} src="images/universe.svg" alt={"Universe " + planet.name} />}
        </div>)}
        {(planets.length / 2) === count && <div>
            <h2>Eres la ostia, lo has conseguido</h2>
            <button onClick={resetGame}>Vamos otra vez</button>
        </div>}
    </div>
}