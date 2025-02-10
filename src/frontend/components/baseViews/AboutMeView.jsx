function AboutMeView() {
    return (
        <div className="">
            <div className='overflow-y-scroll scroll-smooth flex-2'>
                {/* Output field */}
                <div className='flex-col'>

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
        </div>
    )
}

export default AboutMeView