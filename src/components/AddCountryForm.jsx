import { useState } from 'react';

export default function AddCountryForm({ addCountry }) {
  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [region, setRegion] = useState('');
  const [capital, setCapital] = useState('');
  const [area, setArea] = useState('');

  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const nameTrim = name.trim();
    const regionTrim = region.trim();
    const capitalTrim = capital.trim();
    if (!nameTrim || !population || !capitalTrim || !area) {
      setError('Please fill in the required fields');
      return;
    }

    const populationNumber = parseFloat(population);
    const areaNumber = parseFloat(area);
    if (
      Number.isNaN(populationNumber) ||
      Number.isNaN(areaNumber) ||
      populationNumber <= 0 ||
      areaNumber <= 0
    ) {
      setError('Enter numbers greater than zero');
      return;
    }

    if (
      addCountry(
        nameTrim,
        populationNumber,
        regionTrim || undefined,
        capitalTrim,
        areaNumber,
      )
    ) {
      setError('');
      setName('');
      setPopulation('');
      setRegion('');
      setCapital('');
      setArea('');
    } else {
      setError('This country is already on the list');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Country name"
        />
        <input
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          type="number"
          placeholder="Population"
        />
        <input
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          type="text"
          placeholder="Region"
        />
        <input
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          type="text"
          placeholder="Capital"
        />
        <input
          value={area}
          onChange={(e) => setArea(e.target.value)}
          type="number"
          placeholder="Area"
        />
        <button type="submit">Add country</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
