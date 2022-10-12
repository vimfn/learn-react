const categories = [
  {
    id: 1,
    title: 'Jackets',
  },
  {
    id: 2,
    title: 'Hats',
  },
  {
    id: 3,
    title: 'Sneakers',
  },
  {
    id: 4,
    title: 'Men',
  },
  {
    id: 5,
    title: 'Women',
  },
];


const App = () => {
  return (
  
  <div className="categories-container">
    {categories.map(({title}) => (
       <div className="category-container">
        <div className="background-image"/>
       <div className="category-body-container">
         <h2>{title}</h2>
         <p>Shop Now</p>
       </div>
     </div>
    ))}
  </div>
  );
}

export default App;
