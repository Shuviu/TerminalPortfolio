function AboutMe() {
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
                    <span>shuviu@aboutme-os</span>
                </div>
            </div>
            {/* Terminal Body */}
            <div className='overflow-y-scroll scroll-smooth flex-2 h-7/8 m-4 p-4'>                
                {/* Output field */}
                <div className='m-4 flex-col'>
                        <div className="flex flex-wrap">
                            <p className="w-1/3">Name:</p><p className="w-2/3">Lukas</p> 
                        </div>
                        <div className="flex">
                            <p className="w-1/3">Degree:</p><p className="w-2/3">Currently persuing an IT apprenticeship</p>
                        </div>
                        <div className="flex flex-wrap">
                            <p className="w-1/3">Experience:</p><p className="w-2/3">-Basic C# and Java <br />
                                                                                     -Basic Web-Dev using React <br />
                                                                                     -Trying out Rust development
                                                                </p>
                        </div>
                        <div className="flex flex-wrap">
                            <p className="w-1/3">Location:</p><p className="w-2/3">Germany</p>
                        </div>
                        <div className="flex flex-wrap">
                            <p className="w-1/3">Languages:</p><p className="w-2/3">German, English</p>
                        </div>
                </div>
            </div>                
            {/* Terminal Input Field */}
            <div>
                <div className="text-char-accent pl-4">
                    <p><b>~/projects/aboutme</b></p>
                </div>
                <div className='m-4 align-bottom flex mt-0'>
                    <div className="pr-1 text-green-400">
                        <b>{'> ' }</b>
                    </div>
                    <input className="w-full pl-1 bg-term-background border-none outline-none" readOnly='true'></input>
                </div>   
            </div>
        </div>
    )
}

export default AboutMe