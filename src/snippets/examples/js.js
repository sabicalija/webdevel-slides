const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const processData = (data) => {
  const { items } = data;
  return items.map((item) => item.name.toUpperCase());
};

fetchData("https://api.example.com/items").then(processData).then(console.log);
