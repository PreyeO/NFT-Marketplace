import { FC, useEffect, useState } from "react";
import CollectionBtn from "../../Component/UI/Buttons/collectionBtn";
import NftCard from "../../Component/UI/Cards/NftCard";
import { useDispatch } from "react-redux";
import { getAllCollections } from "../../Utilities/NftData";
import { addToCart } from "../Cart/CartSlice";
import { useNavigate } from "react-router-dom";
// import { RootState } from "../../Store/store";

interface Nft {
  identifier: string;
  name: string;
  image_url: string;
  description: string;
}

interface Collections {
  artCollection: Nft[];
  musicCollection: Nft[];
  gamingCollection: Nft[];
  photosCollection: Nft[];
}

const Collection: FC = () => {
  const [collections, setCollections] = useState<Collections>({
    artCollection: [],
    musicCollection: [],
    gamingCollection: [],
    photosCollection: [],
  });
  const [activeCollection, setActiveCollection] = useState<Nft[]>([]);
  const [activeCollectionName, setActiveCollectionName] =
    useState<keyof Collections>("artCollection");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getAllCollections()
      .then((fetchedCollections: Collections) => {
        setCollections(fetchedCollections);
        setActiveCollection(fetchedCollections[activeCollectionName] || []);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching (regardless of success or error)
      });
  }, [activeCollectionName]);

  console.log(collections);

  const handleCollectionChange = (collectionName: keyof Collections) => {
    setActiveCollectionName(collectionName);
    setActiveCollection(collections[collectionName] || []);

    localStorage.setItem("activeCollectionName", collectionName);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (nft: Nft) => {
    dispatch(addToCart(nft));
  };

  const handleSeeDetails = (nft: Nft) => {
    navigate(`/details/${nft.name}`, {
      state: {
        image: nft.image_url,
        name: nft.name,
        price: 200, // You need to provide the actual price here
      },
    });
  };
  return (
    <section
      className="py-20 flex flex-col items-center text-center"
      id="collection"
    >
      <h2 className="md:text-5xl font-bold pb-10 text-4xl pt-6">
        Top Collections
      </h2>
      <div className="flex justify-evenly gap-2 flex-wrap pt-6">
        <CollectionBtn
          label="Arts"
          isActive={activeCollectionName === "artCollection"} // Pass active state
          onClick={() => handleCollectionChange("artCollection")}
        />
        <CollectionBtn
          label="Music"
          isActive={activeCollectionName === "musicCollection"}
          onClick={() => handleCollectionChange("musicCollection")}
        />
        <CollectionBtn
          label="Games"
          isActive={activeCollectionName === "gamingCollection"}
          onClick={() => handleCollectionChange("gamingCollection")}
        />
        <CollectionBtn
          label="Photograph"
          isActive={activeCollectionName === "photosCollection"}
          onClick={() => handleCollectionChange("photosCollection")}
        />
      </div>
      <div className="py-10 ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-7 pt-5">
            {activeCollection.map((nft) => (
              <NftCard
                key={nft.identifier}
                name={nft.name}
                image={nft.image_url}
                description={nft.description}
                currency="$"
                price={200}
                onBuyNowClick={() => handleAddToCart(nft)}
                onSeeCartClick={() => handleSeeDetails(nft)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Collection;
