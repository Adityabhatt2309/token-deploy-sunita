import React,{useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BigEyes = () => {
    const [contractName, setContractName] = useState("");
    const [templateName, setTemplateName] = useState("BigEyes");
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [decimals, setDecimals] = useState("");
    const [totalSupply, setTotalSupply] = useState("");
    const [privateKey, setPrivatekey] = useState("");

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
        let res = await axios.post("https://deployment.debwebdomain.xyz/deploy/bigeyes", {
          contractName: contractName,
          templateName: templateName,
          name: name,
          symbol: symbol,
          decimals: decimals,
          totalSupply: totalSupply,
          privateKey: privateKey
        });
        console.log(res.data, "resJson");
    
        if (res.status === 200) {
          toast("Form Submitted Succesfull",res.data);
          setContractName("");
          setTemplateName("");
          setName("");
          setSymbol("");
          setDecimals("");
          setTotalSupply("");
          setPrivatekey("");
          console.log("success");
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
              type="text"
              value={decimals}
              placeholder="enter token decimals"
              onChange={(e) => setDecimals(e.target.value)}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="py-4">
            <input
              type="text"
              value={totalSupply}
              placeholder="enter token total supply"
              onChange={(e) => setTotalSupply(e.target.value)}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <div className="">
            <input
               type="password"
               value={`${privateKey}`}
               placeholder="enter wallet private key"
               onChange={handleInputChange}
              className="border border-black w-full p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="btn border mt-5  py-2 px-8 rounded-md float-right"
          >
            Submit
          </button>
        </form>
         <ToastContainer/>
    </div>
  )
}
export default BigEyes
