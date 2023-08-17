import axios from "axios";

// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = "fc843bb26a2f482c9bda0ebbfe1c5a41";
const apiLink = "https://api.opensea.io/v2/collection";

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": apiKey,
  },
};
const getArtCollection = async () => {
  const response = await axios.get(
    `${apiLink}/remivision/nfts?limit=6`,
    config
  );
  return response.data?.nfts;
};
const getMusicCollection = async () => {
  const response = await axios.get(`${apiLink}/loudpunx/nfts?limit=10`, config);
  return response.data?.nfts;
};
const getGamingCollection = async () => {
  const response = await axios.get(
    `${apiLink}/skyborne-genesisimmortals/nfts?limit=6`,
    config
  );
  return response.data?.nfts;
};
const getPhotosCollection = async () => {
  const response = await axios.get(
    `${apiLink}/crash-trading/nfts?limit=6`,
    config
  );
  return response.data?.nfts;
};

export const getAllCollections = async () => {
  try {
    const [artCollection, musicCollection, gamingCollection, photosCollection] =
      await Promise.all([
        getArtCollection(),
        getMusicCollection(),
        getGamingCollection(),
        getPhotosCollection(),
      ]);

    return {
      artCollection,
      musicCollection,
      gamingCollection,
      photosCollection,
    };
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw error;
  }
};
