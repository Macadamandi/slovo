import { useState } from "react";
import "./CardSet.css";

const CardSet = ({ wrap, titleArray }) => {
    return (
        <div
            className="all-sets"
            style={{ gridTemplateColumns: `repeat(${wrap}, 208px)` }}
        >
            {titleArray.map((obj, index) => {
                return (
                    <Card
                        title={obj.title}
                        isChecked={obj.isChecked}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

const Card = ({ title, isChecked }) => {
    const [isUserChecked, setIsUserChecked] = useState(isChecked);
    return (
        <div className="all-sets__item">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                100 words{" "}
                <input
                    type="checkbox"
                    checked={isUserChecked}
                    onChange={() => setIsUserChecked(!isUserChecked)}
                />
            </div>
            <img src="/images/picture.jpg" alt="" />
            <div>
                <p>{title}</p>
            </div>
            <button type="button" className="btn btn-success w-100">
                Learn
            </button>
        </div>
    );
};

export default CardSet;
