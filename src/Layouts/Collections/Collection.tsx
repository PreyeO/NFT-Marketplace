import { FC } from "react";
import CollectionBtn from "../../Component/UI/Buttons/collectionBtn";
import NftCard from "../../Component/UI/Cards/NftCard";
import project from "../../assets/heroimage.webp";

const Collection: FC = () => {
  return (
    <section
      className="py-20 flex flex-col items-center text-center"
      id="collection"
    >
      <h2 className="text-5xl font-bold pb-10">Top Collections</h2>
      <div className="flex justify-evenly gap-2 flex-wrap">
        <CollectionBtn label="View All" />
        <CollectionBtn label="Arts" />
        <CollectionBtn label="Music" />
        <CollectionBtn label="Sports" />
        <CollectionBtn label="Music" />
        <CollectionBtn label="Music" />
      </div>
      <div className="py-10 flex flex-wrap items-center justify-center gap-7">
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
        <NftCard
          image={project}
          description="Project Frontend The best place for travelsProject Frontend he best place for travelsProject Frontend"
          currency="$"
          amount={12345}
        />
      </div>
    </section>
  );
};
export default Collection;
