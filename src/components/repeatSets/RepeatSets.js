import CardSet from '../cardSet/CardSet';

import './repeatSets.css';

const RepeatSets = () => {
  const titleArray = ["Most pupular 1000 words", "Intermediate 500 words", "Languages", "Arts", "Culture", "Nature"];

  return(
    <>
    <div className="mb-30">Repeat sets</div>
      <CardSet wrap={3} titleArray={titleArray} />
    </>
  );
}

export default RepeatSets;