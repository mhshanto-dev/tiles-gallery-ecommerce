// import Image from "next/image";

// const TilesCard = ({ tile }) => {
//   return (
//     <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-gray-200">
//       <Image
//         src={tile.image}
//         alt={tile.title}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         priority={true} 
//         className="object-cover"
//       />
//     </div>
//   );
// };

// export default TilesCard;

import Image from "next/image";

const TilesCard = ({ tile }) => {
  return (
    <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-gray-200">
      <Image
        src={tile.image}
        alt={tile.title}
        fill // 👈 Add this property
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true} 
        className="object-cover"
      />
    </div>
  );
};

export default TilesCard;