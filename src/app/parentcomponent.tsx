import React from "react";
import Childcomponent from "./childcomponent";
const Parentcomponent = () => {
  let Fullname: string = "My Name is Syed Anees";
  let Favoriteplace: string = "my Favorite place is my House";
  let Favoritedesh: string = "my Favorite Desh Biryani";
  return (
    <main>
      <Childcomponent
        fullname={Fullname}
        favoriteplace={Favoriteplace}
        favoritedesh={Favoritedesh}
      />
    </main>
  );
};

export default Parentcomponent;
