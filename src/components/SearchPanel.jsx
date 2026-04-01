export default function SearchPanel({value, onChange, select, onSelect}) {

  return (
    <section>
      <input type="text" placeholder="Search for a country..." value={value} onChange={(e) => onChange(e.target.value)}/>
      <select value={select} onChange={(e) => onSelect(e.target.value)}>
        <option value="All">All</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </section>
  );
}