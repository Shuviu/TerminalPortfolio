

function Terminal() {
    return (
        <div className='m-4 bg-term-background text-main border-accent-color border-4 rounded-xl'>
            {/* Terminal header */}
            <div className='flex justify-between items-center m-4'>
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
            {/* Terminal Body / Output */}
            <div className='m-4 p-4'>
                owa
            </div>
            {/* Terminal Input Field */}
            <div className='m-4 p-4 flex'>
                {'> ' } <input className="w-full pl-1 bg-term-background border-none outline-none"></input>
            </div>
        </div>
    )
}

export default Terminal