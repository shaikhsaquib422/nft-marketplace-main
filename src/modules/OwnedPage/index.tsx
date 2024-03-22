import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";

const OwnedPage = () => {
  const { ownedNFTs, ownedListedNFTs } = useNFTMarket();

  console.log("ownedNFTs", ownedNFTs);
  console.log("ownedListedNFTS", ownedListedNFTs);

  return (
    <div className="flex w-full flex-col">
      {/* Display owned (listed or not) NFTs */}
      <div className="flex flex-wrap">
        {ownedNFTs?.map((nft) => (
          <NFTCard className="mb-1 mr-1" nft={nft} key={nft.id} />
        ))}
      </div>
      {ownedListedNFTs && ownedListedNFTs.length > 0 && (
        <>
          <div className="relative my-4 h-[1px] w-full flex-shrink-0 bg-black">
            <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform bg-white px-2 font-mono font-semibold">
              LISTED
            </div>
          </div>
        </>
      )}
      {/* Owned Listed NFTs*/}
      <div className="flex flex-wrap">
        {ownedListedNFTs?.map((nft) => (
          <NFTCard nft={nft} className="mb-2 mr-2" key={nft.id} />
        ))}
      </div>
    </div>
  );
};

export default OwnedPage;
