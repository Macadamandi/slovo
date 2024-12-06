import CardSet from "../cardSet/CardSet";
import "./favoritiesSets.css";

const FavoritiesSets = () => {
    const titleArray = ["Most pupular 1000 words", "Intermediate 500 words", "Languages", "Arts", "Culture", "Nature", "Languages", "Arts", "Culture", "Nature"];
    return (
        <div className="w-75 m-auto">
            <div className="mb-20">Favorities Sets</div>
            <CardSet wrap={5} titleArray={titleArray}/>
        </div>
    );
};

export default FavoritiesSets;
