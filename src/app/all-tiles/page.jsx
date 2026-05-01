import TilesCard from "@/components/TilesCard";


const AllTilesPage = async () => {
  const res = await fetch(
    "https://tiles-gallery-ecommerce.vercel.app/data.json",
    { cache: "no-store" } 
     
  );


  const data = await res.json();
  console.log(data)
  

    return (
        <div>
            <h1 className="font-bold m-5 text-2xl">All Tiles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.tiles.map(tile=> <TilesCard key={tile.id} tile={tile} />)}
            </div>
        </div>
    );
};

export default AllTilesPage;