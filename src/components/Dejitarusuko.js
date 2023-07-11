"use client"
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BigNumber } from 'bignumber.js';


const Dejitarusuko = () => {
  const [contractName, setContractName] = useState("");
  const [templateName, setTemplateName] = useState("DejitaruTsuka");
  const [router,setRouter]= useState("")
  const [name, setName] = useState("");
  const [symbol,setSymbol]= useState("");
  const [decimals,setDecimals]= useState("")
  const [totalSupply,setTotalSupply]= useState("")
  const [privateKey, setPrivatekey] = useState("");
  const [addTotalSupplyWei,setAddTotalSupplyWei]= useState();

   const handleInputChange = (event) => {
    let value = event.target.value;
    // Check if the input value starts with "0x"
    if (!value.startsWith('0x')) {
      // If it doesn't start with "0x", add it to the beginning
      value = `0x${value}`;
    }
    setPrivatekey(value);
  };

   useEffect(()=>{
      if(decimals && totalSupply !==null){
         const total = totalSupply * Math.pow(10, decimals);
         const number = new BigNumber(total);
         const realNumber = number.toFixed(); 
         console.log(realNumber,"value");
          setAddTotalSupplyWei(realNumber);
      }
  },[decimals,totalSupply])


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("DATA enter field");
      let res = await axios.post("https://deployment.debwebdomain.xyz/deploy/dejitarutsuka", {
        contractName: contractName,
        templateName: templateName,
        router:router,
        name: name,
        symbol:symbol,
        decimals:decimals,
        totalSupply:addTotalSupplyWei,
        privateKey: privateKey
      });
      console.log(res.data, "resJson");
  
      if (res.status === 200) {
        toast("Form Submitted Succesfull");
        console.log("success");
        setContractName("");
        setTemplateName("");
        setRouter("");
        setName("");
        setSymbol("");
        setDecimals("");
        setTotalSupply("");
        setPrivatekey("");
        // window.location.reload();
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
    <div className="p-10 flex flex-col justify-center items-center">
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
            disabled="true"
            value="DejitaruTsuka"
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
            type="number"
            placeholder="Decimals"
            className="border border-black w-full p-2 rounded-md"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="number"
            placeholder="enter token total supply (exclude decimal digits)"
            className="border border-black w-full p-2 rounded-md"
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value)}
          />
        </div>
        <div className="my-4">
          <input
            type="password"
            placeholder="Private Key"
            className="border border-black w-full p-2 rounded-md"
            value={`${privateKey.substring(2)}`}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="border mt-5 btn py-2 px-8 rounded-md float-right"
        >
          Submit
        </button>
      </form>
      <ToastContainer/>
    </div>
  )
}
export default Dejitarusuko
