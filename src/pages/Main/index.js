import React, { useState, useEffect } from "react";

import api from "../../services/api";

import {
  Wrapper,
  Container,
  Header,
  Description,
  Feature,
} from "./styles";

import logo from '../../assets/images/logo.png'

export default function Main() {
  const [planet, setPlanet] = useState({});
  const [nFilms, setNfilms] = useState(0);

  useEffect(() => {
    async function getPlanets() {
      const planetNumber = Math.ceil(Math.random() * 61);
      const response = await api.get(`planets/${planetNumber}/`);
      const data = response.data;

      setNfilms(data.films.length);
      setPlanet(data);
    }
    getPlanets();
  }, []);

  async function rollPlanet() {
    const planetNumber = Math.ceil(Math.random() * 61);
    const response = await api.get(`planets/${planetNumber}/`);
    const data = response.data;

    setNfilms(data.films.length);
    setPlanet(data);
    console.log(planet);
  }

  return (
    <Wrapper>
      <img src={logo} alt=""/>
      <Container>
        <Header>
          <span>{planet.name}</span>
        </Header>
        <Description>
          <div className="griDiv">
            <span className="title">Population:</span> <span>{planet.population}</span>
            <span className="title">Climate:</span> <span>{planet.climate}</span>
            <span className="title">Terrain:</span>
            <span> {planet.terrain}</span>
          </div>
        </Description>
        <Feature>
          <span>
            {nFilms > 1
              ? `featured in: ${nFilms} films`
              : `featured in: ${nFilms} film`}
          </span>
        </Feature>
      </Container>
      <button type="button" onClick={rollPlanet}>
        Next
      </button>
    </Wrapper>
  );
}

/*
<div>
          <span>Population: {planet.population}</span>
          <span>Climate: {planet.climate}</span>
          <span>Terrain: {planet.terrain}</span>
        </div>
        <div>
          <span>Featured in nFilms</span>
        </div>

        <button type="button" onClick={rollPlanet}>
          Next
        </button>*/
