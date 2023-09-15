

const Card = ({ card }) => {
    const { id, image, title, description, price, credit } = card;
    console.log(card);


    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-3 pt-4">
                    <img src={image} alt="courses" className="rounded" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-slate-500 text-[14px]">{description}</p>
                  
                    <div className="card-actions">
                        <button className="btn px-16 btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;