import Cart from "../Cart/cart";


const Carts = ({ courses, remaining, totalCredit }) => {
    

    return (

        <div className='w-1/3 rounded  mx-5'>

            <div className="px-4 py-5 bg-white">
                <h1 className="text-[#2F80ED] text-xl font-bold">Credit Hour Remaining {remaining}  hr</h1>
                <hr className="mt-5 border-b-2" />
            </div>

            <h1 className="text-xl px-4 py-3 font-bold bg-white ">Course Name</h1>
           

            
            <div className="px-4 py-3 bg-white text-[#1C1B1B99]">
                {
                    courses.map(course => <Cart key={course.id} course={course} totalCredit={totalCredit}></Cart>)
                }
            </div>
                <hr/>
            <h2 className="px-4 py-3 font-bold bg-white ">Total Credit Hour: {totalCredit}</h2>

        </div>
    );
};

export default Carts;