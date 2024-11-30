// components/ChildComponent.tsx
import React from "react";
interface Props {
  fullname: string;
  favoriteplace: string;
  favoritedesh: string;
}

const Childcomponent: React.FC<Props> = ({
  fullname,
  favoritedesh,
  favoriteplace,
}) => {
  console.log(fullname);

  return (
    <div className="bg-blue-700 h-96 text-2xl flex  flex-col justify-center items-center ">
      <h1>Child Component</h1>
      <ul>
        <li className="p-2">Full Name:{fullname}</li>
        <li className="p-2">Favorite Place:{favoriteplace}</li>
        <li className="p-2">Favorite Desh:{favoritedesh}</li>
      </ul>
    </div>
  );
};

export default Childcomponent;
