const App = () => {
  const categories = [
    {
      id: 0,
      title: "Hats",
      image: "",
    },
    {
      id: 1,
      title: "Shoes",
      image: "",
    },
    {
      id: 2,
      title: "Pants",
      image: "",
    },
    {
      id: 3,
      title: "Womens",
      image: "",
    },
    {
      id: 4,
      title: "Mens",
      image: "",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ id, title, image }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
