import TilesCard from "./TilesCard";

const FeaturedTiles = async () => {
  const res = await fetch(
    "https://tiles-gallery-ecommerce.vercel.app/data.json",
    { cache: "no-store" }
  );

  const data = await res.json();
  const topTiles = data.tiles.slice(0, 4);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6">The Top Featured Tiles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {topTiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTiles;