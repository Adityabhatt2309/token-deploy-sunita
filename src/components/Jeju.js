"use client"
import axios from "axios"
import { useState } from "react"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import ClipLoader from "react-spinners/ClipLoader";


const Jeju = () => {
const [contractName, setContractName] = useState("");
const [templateName, setTemplateName] = useState("JEJU");
const [router,setRouter]= useState("")
const [name, setName] = useState("");
const [symbol, setSymbol] = useState("");
const [privateKey, setPrivatekey] = useState("");
const[selectedValue, setSelectedValue] = useState('');
const [loading, setLoading] = useState(false);
const [color, setColor] = useState("green");
const [modal,setModal]= useState(false);
const [LinkUrl,setLinkUrl]=useState("");
const [address,setAddress]= useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

const handleChangeRouter=(event)=>{
    if(event.target.value == 1){
      setRouter("0x10ED43C718714eb63d5aA57B78B54704E256024E");
    }else if(event.target.value == 2){
      setRouter("0xEfF92A263d31888d860bD50809A8D171709b7b1c");
    }else if(event.target.value == 3){
      setRouter("0xD99D1c33F9fC3444f8101754aBC46c52416550D1");
    }else if(event.target.value == 4){
      setRouter("0x13f4EA83D0bd40E75C8222255bc855a974568Dd4");
    }else if(event.target.value == 5){
      setRouter("0x13f4EA83D0bd40E75C8222255bc855a974568Dd4");
    }else if(event.target.value == 6){
      setRouter("0x9a489505a00cE272eAa5e07Dba6491314CaE3796");
    }else if(event.target.value == 7){
      setRouter("0x9a489505a00cE272eAa5e07Dba6491314CaE3796");
    }else if(event.target.value == 8){
      setRouter("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
    }else if(event.target.value == 9){
      setRouter("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
    }else if(event.target.value == 10){
      setRouter("0x045312C737a6b7a115906Be0aD0ef53A6AA38106");
    }else if(event.target.value == 11){
      setRouter("0x5DE02F06382E24A6f65203c526d0314d86b681dD");
    }
  }
  
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
    setLoading(true)
    let res = await axios.post("https://deployment.debwebdomain.xyz/deploy/jeju", {
      contractName: contractName,
      templateName: templateName,
      router:router,
      name: name,
      symbol: symbol,
      privateKey: privateKey,
      chainId:Number(selectedValue)
    });
    console.log(res.data, "resJson");

    if (res.status === 200) {
      console.log("success");
      toast("Form Submitted Succesfull");
      setContractName("");
      // setTemplateName("");
      setRouter("");
      setName("");
      setSymbol("");
      setPrivatekey("");
      setSelectedValue("");
      setModal(true)
      setLoading(false)

       if(res.data){
          let newPageUrl;
          if(selectedValue=="4002"){
            newPageUrl=`https://testnet.ftmscan.com/address/${res.data.address}`;
          }else if(selectedValue == "1"){
            newPageUrl=`https://etherscan.io/address/${res.data.address}`
          }else if(selectedValue == "250"){
            newPageUrl=`https://ftmscan.com/address/${res.data.address}`
          }else if(selectedValue == "56"){
            newPageUrl=`https://bscscan.com/address/${res.data.address}`
          }else if(selectedValue == "42161"){
            newPageUrl=`https://arbiscan.io/address/${res.data.address}`
          }else if(selectedValue == "137"){
            newPageUrl=`https://polygonscan.com/address/${res.data.address}`
          }else if(selectedValue == "97"){
            newPageUrl=`https://testnet.bscscan.com/address/${res.data.address}`
          }
          setLinkUrl(newPageUrl);
          setAddress(res.data.address)
          }else{
              console.log("responce error link");
          }
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
    <div className="p-10 flex flex-col justify-center items-center relative">
      <h1 className="text-3xl font-bold ">Jeju</h1>
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
            value="JEJU"
            onChange={(e) => setTemplateName(e.target.value)}
          />
        </div>
        <div className="">
          {/* <input
            type="text"
            placeholder="Router"
            className="border border-black w-full p-2 rounded-md"
            value={router}
            onChange={(e) => setRouter(e.target.value)}
          /> */}
           <select
            name="Select Router"
            className="mt-4 bg-transparent border w-full p-2 rounded-md"
            // value={router}
            onChange={handleChangeRouter}
            >
              <option disabled value={""} >Select Router Address</option>
               <option value="1">PancakeswapV2_BscScan </option>
               <option value="2">PancakeswapV2_Ethereum </option>
               <option value="3">PancakeswapV2_BscTestnet </option>
               <option value="4">PancakeswapV3_BscScan </option>
               <option value="5">PancakeswapV3_Ethereum </option>
               <option value="6">PancakeswapV3_Goerli </option>
               <option value="7">PancakeswapV3_BscTestnet </option>
               <option value="8">UniswapV2_Ethereum  </option>
               <option value="9">UniswapV2_Goerli </option>
               <option value="10">DarkKnightRouter_FantomMainnet</option>
               <option value="11">Router_FantomTestnet</option>
          </select>
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
            className="btn border mt-5  py-2 px-8 rounded-md float-right"
          >
            {
              loading?
               <ClipLoader
                color={color}
                loading={loading}
                className="block mx-auto border-red"
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />:"submit"
            }
      </button>
      </form>
       <ToastContainer/>
        {
          modal? <div className=' absolute inset-0  flex justify-center items-center backdrop-blur-sm '>
            <div className='h-[250px] p-5 rounded-md flex-col justify-around min-w-fit glass-card text-white flex  text-center'>
               <h1 className='text-[22px] font-bold'>Address</h1>
            <p>{address}</p>
            <div className='gap-[12px] flex justify-center'>
              <button className=' cursor-pointer btn border mt-5  py-2 px-8 rounded-md' onClick={()=>{setModal(false)}}>Close</button>
              <Link href={LinkUrl} target="_blank">
              <button className='cursor-pointer btn border mt-5  py-2 px-8 rounded-md'>Open Link</button>
              </Link>
            </div>
            </div>
        </div>:""
        }
    </div>
  )
}

export default Jeju
