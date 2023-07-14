import React,{useEffect, useState,CSSProperties} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BigNumber } from 'bignumber.js';
import ClipLoader from "react-spinners/ClipLoader";




const BigEyes = () => {
    const [contractName, setContractName] = useState("");
    const [templateName, setTemplateName] = useState("BigEyes");
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [decimals, setDecimals] = useState("");
    const [totalSupply, setTotalSupply] = useState("");
    const [privateKey, setPrivatekey] = useState("");
    const [addTotalSupplyWei,setAddTotalSupplyWei]= useState();
    const[selectedValue, setSelectedValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("green");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    if (!value.startsWith('0x')) {
      value = `0x${value}`;
      setPrivatekey(value);
    }else{
      setPrivatekey(value);
    }
  };

  console.log(selectedValue,"selectedValue");
  useEffect(()=>{
      if(decimals && totalSupply !==null){
         const total = totalSupply * Math.pow(10, decimals);
         const number = new BigNumber(total);
         const realNumber = number.toFixed(); 
         console.log(realNumber,"value");
          setAddTotalSupplyWei(realNumber);
      }
  },[decimals,totalSupply])

  console.log(addTotalSupplyWei,"addTotalSupplyWei");

  let handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      try {
        console.log("DATA enter field");
        let res = await axios.post("https://deployment.debwebdomain.xyz/deploy/bigeyes", {
          contractName: contractName,
          templateName: templateName,
          name: name,
          symbol: symbol,
          decimals: decimals,
          totalSupply: addTotalSupplyWei,
          privateKey: privateKey,
          chainId:Number(selectedValue)
        });
        if (res.status === 200) {
          toast("Form Submitted Succesfull",res.data);
          setContractName("");
          setLoading(false)
          // setTemplateName("");
          setName("");
          setSymbol("");
          setDecimals("");
          setTotalSupply("");
          setPrivatekey("");
          setSelectedValue("")
          console.log("success");
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
    <div className='p-10 flex flex-col justify-center items-center '>
        <form
           onSubmit={handleSubmit}
          className=" mt-10 border md:p-12 p-5 glass-card"
        >
          <div className="md:w-[500px]">
            <input
              type="text"
              value={contractName}
              placeholder="enter contract name without space"
              onChange={(e) => setContractName(e.target.value)}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              disabled="true"
              value="BigEyes"
              placeholder="enter template name"
              onChange={(e) => setTemplateName(e.target.value)}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="">
            <input
               type="text"
               value={name}
               placeholder="enter token Name"
               onChange={(e) => setName(e.target.value)}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="my-4">
            <input
              type="text"
              value={symbol}
              placeholder="enter token symbol"
              onChange={(e) => setSymbol(e.target.value)}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="">
            <input
              type="number"
              value={decimals}
              min={1}
              max={18}
              placeholder="enter token decimals range 1 to 18"
              onChange={(e) => setDecimals(e.target.value)}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="py-4">
            <input
              type="number"
              value={totalSupply}
              placeholder="enter token total supply (exclude decimal digits)"
              onChange={(e) => setTotalSupply(e.target.value)}
              className="appearance_remove border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="">
            <input
               type="password"
               value={privateKey.substring(2)}
               placeholder="enter wallet private key"
               onChange={handleInputChange}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
           <div className="">
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
    </div>
  )
}
export default BigEyes
