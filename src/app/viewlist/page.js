import React from "react";
import Navbar from "../Components/Navbar";

async function getRankings() {
  const url =
    "https://crickbuzz-official-apis.p.rapidapi.com/rankings/batsman/?formatType=t20&women=0";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b652232e49mshd4bef1899ea3843p171010jsn94608490b1d4",
      "x-rapidapi-host": "crickbuzz-official-apis.p.rapidapi.com",
    },
    cache: "no-store",
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }

  return response.json();
}

const page = async () => {
  let rankingList;
  try {
    rankingList = await getRankings();
  } catch (error) {
    return (
      <>
        <div className="text-red-600 text-lg">Error loadind data</div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
        <div className="grid grid-cols-3 bg-blue-600 text-white p-3 font-semibold text-lg rounded-t-md">
          <div className="text-center">Current Ranking</div>
          <div className="text-center">Name</div>
          <div className="text-center">Country</div>
        </div>
        <div>
          {rankingList.rank.slice(0, 15).map((player, index) => (
            //debugger;
            <div
              key={player.id}
              className="grid grid-cols-3 border-b last:border-none p-4 text-center"
            >
              <span className="font-bold text-lg text-blue-600">
                #{player.rank}
              </span>
              <span className="text-gray-800">{player.name}</span>
              <span className="text-gray-500">{player.country}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
