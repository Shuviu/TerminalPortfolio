function Status() {
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
                    <span>shuviu@status-os</span>
                </div>
            </div>
            {/* Terminal Body */}
            <div className='overflow-y-scroll scroll-smooth flex-2 h-7/8 m-4 p-4'>                
                {/* Output field */}
                <div className='m-4'>
                    <p>Filler Text</p>
                </div>                
                {/* Terminal Input Field */}
                <div>
                    <div className="text-char-accent pl-4">
                        <p><b>~/projects/status</b></p>
                    </div>
                    <div className='m-4 align-bottom flex mt-0'>
                        <div className="pr-1 text-green-400">
                            <b>{'> ' }</b>
                        </div>
                        <input className="w-full pl-1 bg-term-background border-none outline-none"></input>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Status