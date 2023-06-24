"use client"
import React,{useState} from 'react';
import axios from 'axios';


const Dejitarusuko = () => {
  const [contractName, setContractName] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [router,setRouter]= useState("")
  const [name, setName] = useState("");
  const [symbol,setSymbol]= useState("");
  const [decimals,setDecimals]= useState("")
  const [totalSupply,setTotalSupply]= useState("")
  const [privateKey, setPrivatekey] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("DATA enter field");
      let res = await axios.post("http://3.230.239.114/deploy/dejitarutsuka", {
        contractName: contractName,
        templateName: templateName,
        router:router,
        name: name,
        symbol:symbol,
        decimals:decimals,
        totalSupply:totalSupply,
        privateKey: privateKey
      });
      console.log(res.data, "resJson");
  
      if (res.status === 200) {
        console.log("success");
        setContractName("");
        setTemplateName("");
        setRouter("");
        setName("");
        setSymbol("");
        setDecimals("");
        setTotalSupply("");
        setPrivatekey("");
        // Add any success handling logic here
      } else {
        console.log("form error");
        // Add any error handling logic here
      }
    } catch (err) {
      console.log("error catch find");
      console.log(err);
    }
  };

  return (
    <div className="p-10 flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold ">Dejitarusuko</h1>
      <form className=" mt-10 border md:p-12 p-5 glass-card" onSubmit={handleSubmit}>
        <div className="md:w-[500px]">
          <input
            type="text"
            placeholder="Contract Name"
            className="border border-black w-full p-2 rounded-md"
            value={contractName}
            onChange={(e) => setContractName(e.target.value)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Template Name"
            className="border border-black w-full p-2 rounded-md"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder=" Routes"
            className="border border-black w-full p-2 rounded-md"
            value={router}
            onChange={(e) => setRouter(e.target.value)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-black w-full p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Symbol"
            className="border border-black w-full p-2 rounded-md"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Decimals"
            className="border border-black w-full p-2 rounded-md"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Total supply"
            className="border border-black w-full p-2 rounded-md"
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Private Key"
            className="border border-black w-full p-2 rounded-md"
            value={privateKey}
            onChange={(e) => setPrivatekey(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border mt-5 btn py-2 px-8 rounded-md float-right"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default Dejitarusuko