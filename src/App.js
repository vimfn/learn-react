import DirectoryItem from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://source.unsplash.com/random/?hats,fashion",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://source.unsplash.com/random/?jackets,fashion",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://source.unsplash.com/random/?sneakers,fashion",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://source.unsplash.com/random/?women,fashion",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://source.unsplash.com/random/?men,fashion",
    },
  ];

  return <DirectoryItem categories={categories} />;
};

export default App;
