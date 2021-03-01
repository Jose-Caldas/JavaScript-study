// Evite

const createBook = (name) => {
  const bookName = name || "Jurassik Park";
};

//prefira

const createBook = (name = "Jurassic Park") => {};
