import './index.css'


export default function Dashboard(){
    return(
        <div className='page'>
            <div className='stats-section'>
                <div className='stat shadow-md rounded-xl p-3 h-44 w-44 grid grid-cols-1 content-center'>
                    <span className='text-xl'>
                        Total Customers
                    </span>
                    <h1 className='text-5xl my-3 font-bold'>
                        30
                    </h1>

                </div>
            </div>
        </div>
    )

}