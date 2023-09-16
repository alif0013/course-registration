
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
const Card = ({ card, handCoursesBtn }) => {
    const { image, title, description, price, credit } = card;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-3 pt-4">
                    <img src={image} alt="courses" className="rounded" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-slate-500 text-[14px]">{description}</p>
                    <div className="flex w-[260px] mb-2 justify-evenly">
                        <div className='flex'>
                            <FiDollarSign className='mt-1'></FiDollarSign>
                            <p className='pl-2'>Price: {price}</p>
                        </div>
                        <div className='flex'>
                            <BsBook className='mt-1'></BsBook>
                            <p className='pl-2'>credit: {credit}hr</p>
                        </div>
                    </div>

                    <div className="card-actions">
                        <button onClick={() => handCoursesBtn(card)} className="btn px-16 btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;