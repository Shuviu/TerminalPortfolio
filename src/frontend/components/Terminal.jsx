import { useEffect, useState } from "react";
import { callCommand } from "../../backend/commandHandler";

function Terminal({initialView}) {
    // State storing the current terminal output
    const [view, setView] = useState([initialView]);

    // handle input submit
    const handleInputKeyDown = (e) => {
        if (e.key == 'Enter') {
            // call commandHandler to handle the inputed command
            callCommand(e.target.value, view, setView)
            e.target.value = ''
        }
    } 
    
    return (
        <div className='bg-term-background text-char-main border-accent-color border-4 rounded-xl h-full flex-col overflow-hidden'>
            {/* Terminal header */}
            <div className='flex flex-1 justify-between items-center m-4 h-.5/8'>
                {/* Top left button row */}
                <div className='justify-start p-4'>
                    <button className='p-1 pl-0'>File</button>
                    <button className='p-1'>Edit</button>
                    <button className="p-1">View</button>
                </div>
                {/* Session title */}
                <div className='flex-1 justify-center flex'>
                    <span>shuviu@portfolio-os</span>
                </div>
            </div>
            {/* Terminal Body */}
            <div className='overflow-y-scroll scroll-smooth flex-2 h-7/8 m-4'>                
                {/* Output field */}
                <div className='m-4'>
                    {/* Render whole outputView */}
                    {view.map((value, index) => (
                        <div key={index}>{value.call()}</div>
                    ))}
                </div>                
                {/* Terminal Input Field */}
                <div>
                    <div className="text-char-accent pl-4">
                        <p><b>~/projects/portfolio</b></p>
                    </div>
                    <div className='m-4 align-bottom flex mt-0'>
                        <div className="pr-1 text-green-400">
                            <b>{'> ' }</b>
                        </div>
                        <input className="w-full pl-1 bg-term-background border-none outline-none" onKeyDown={handleInputKeyDown}></input>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Terminal