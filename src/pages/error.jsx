const Error = () => { 
    <>
    <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: 400 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>404 Page not found</h1>
                        <h4 className='mb-3'>Opps, looks like we couldn't find the page you were looking for</h4>
                       
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Error;