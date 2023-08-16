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
  // const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    getAllCollections()
      .then((fetchedCollections: Collections) =>
        setCollections(fetchedCollections)
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(collections);

  const handleCollectionChange = (collectionName: keyof Collections) => {
    setActiveCollection(collections[collectionName] || []);
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
      <h2 className="md:text-5xl font-bold pb-10 text-4xl">Top Collections</h2>
      <div className="flex justify-evenly gap-2 flex-wrap">
        <CollectionBtn
          label="Arts"
          onClick={() => handleCollectionChange("artCollection")}
        />
        <CollectionBtn
          label="Music"
          onClick={() => handleCollectionChange("musicCollection")}
        />
        <CollectionBtn
          label="Games"
          onClick={() => handleCollectionChange("gamingCollection")}
        />
        <CollectionBtn
          label="Photograph"
          onClick={() => handleCollectionChange("photosCollection")}
        />
      </div>
      <div className="py-10 flex flex-wrap items-center justify-center gap-7">
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
    </section>
  );
};
export default Collection;
