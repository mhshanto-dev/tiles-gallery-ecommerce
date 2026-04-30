

const FeaturedTiles = async () => {
    const res = await fetch("https://tiles-gallery-ecommerce.vercel.app/data.json");
    const data = await res.json();
    const topTiles = data.tiles.slice(0, 4);
    // console.log(topTiles);
    
    return (
        <div>
            <h1 className="text-3xl font-bold mt-6">The Top Tiles</h1>
        </div>
    );
};

export default FeaturedTiles;