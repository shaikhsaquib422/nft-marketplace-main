import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";

const HomePage = () => {
  const { listedNFTs } = useNFTMarket();

  return (
    <div className="flex w-full flex-col">
      {/* TODO: display listed NFTs */}
      <div className="flex flex-wrap">
        {listedNFTs?.map((nft) => (
          <NFTCard className="mb-1 mr-1" nft={nft} key={nft.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
