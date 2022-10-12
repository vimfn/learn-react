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
      title: "men fashion",
      imageUrl: "https://source.unsplash.com/random/?man,fashion",
    },
    {
      id: 5,
      title: "women fashion",
      imageUrl: "https://source.unsplash.com/random/?woman,fashion",
    },
  ];

  return <DirectoryItem categories={categories} />;
};

export default App;
