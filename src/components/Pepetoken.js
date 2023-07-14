"use client"
import React,{useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pepetoken = () => {
const [contractName, setContractName] = useState("");
const [templateName, setTemplateName] = useState("PepeToken");
const [name, setName] = useState("");
const [symbol, setSymbol] = useState("");
const [totalSupply,setTotalSupply]= useState("")
const [privateKey, setPrivatekey] = useState("");
const[selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  

 const handleInputChange = (event) => {
    let value = event.target.value;
    // Check if the input value starts with "0x"
    if (!value.startsWith('0x')) {
      // If it doesn't start with "0x", add it to the beginning
      value = `0x${value}`;
    }
    setPrivatekey(value);
  };

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("DATA enter field");
    let res = await axios.post("https://deployment.debwebdomain.xyz/deploy/pepetoken", {
      contractName: contractName,
      templateName: templateName,
      name: name,
      symbol: symbol,
      totalSupply:totalSupply,
      privateKey: privateKey,
      chainId:Number(selectedValue)
    });
    console.log(res.data, "resJson");

    if (res.status === 200) {
      console.log("success");
      toast("Form Submitted Succesfull");
      setContractName("");
      // setTemplateName("");
      setName("");
      setSymbol("");
      setTotalSupply("");
      setPrivatekey("");
      setSelectedValue("");
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

//  const { contractName, templateName, name, symbol, totalSupply, privateKey } = req.body;

  return (
    <div className="p-10 flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold ">Pepetoken</h1>
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
            value="PepeToken"
            onChange={(e) => setTemplateName(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder=" Name"
            className="border border-black w-full p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Symbol"
            className="border border-black w-full p-2 rounded-md"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="number"
            placeholder="Enter token total supply (include decimal digits)"
            className="appearance_remove border border-black w-full p-2 rounded-md"
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Private Key"
            className="border border-black w-full p-2 rounded-md"
            value={privateKey.substring(2)}
            onChange={handleInputChange}
          />
        </div>
         <div className="my-4">
          <select
            name="Chain Select"
            className="mt-4 bg-transparent border w-full p-2 rounded-md"
            value={selectedValue}
            onChange={handleChange}
            >
              <option disabled value={""} >Select Chain ID</option>
                <option value="1">Ethereum Mainnet</option>
               <option value="250">Fantom Opera</option>
               <option value="56">BSC Mainnet</option>
               <option value="42161">Arbitrum One</option>
               <option value="137">Polygon Mainnet</option>
               <option value="97">BSC Testnet</option>
               <option value="4002">Fantom Testnet</option>
          </select>
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

export default Pepetoken
