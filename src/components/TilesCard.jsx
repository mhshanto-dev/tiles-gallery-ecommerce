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

import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ tile }) => {
  return (
    <Card className="border">
      <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-gray-200">
      <Image
        src={tile.image}
        alt={tile.title}
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true} 
        className="object-cover"
      />
      <Chip size="large" className="absolute right-2 top-2 text-xl bg-amber-100">{tile.category}</Chip>
    </div>
    <div>
      <h2 className="font-semibold text-xl">{tile.title}</h2>
    </div>
   <div className="flex items-center justify-between">
     <div>
      <p className="font-bold text-gray-700">${tile.price}</p>
    </div>

    <div>
      <Link href={`/all-tiles/${tile.id}`}><Button className="font-bold bg-amber-700">View Details</Button></Link>
    </div>
   </div>

    </Card>
  );
};

export default TilesCard;







//  "id": "tile_001",
//       "title": "Oida Ceramic Blue",
//       "description": "Premium glossy blue ceramic tile with authentic texture",
//       "image":"https://images.unsplash.com/photo-1708540084677-dc5838b37627",
//       "category": "ceramic",
//       "price": 45.99,
//       "currency": "USD",
//       "dimensions": "60x60 cm",
//       "material": "Ceramic",
//       "inStock": true