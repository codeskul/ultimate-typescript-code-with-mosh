let employee0: { id: number; name: string } = { id: 1, name: "Sanjay" };

// readonly
let employee1: { readonly id: number; name: string } = {
  id: 1,
  name: "Sanjay",
};

// function as object property
let employee2: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Sanjay",
  retire: (date: Date) => {
    console.log(date);
  },
};
