```jsx
import { useState } from "react";
import { Pages } from "./Pages";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";

const [arrows, setArrows] = useState(true);
const [currentPage, setCurrentPage] = useState(0);

const pageDown = () => {
  if (currentPage > 0) setCurrentPage((prevPage) => prevPage - 1);
};

const pageUp = () => {
  if (currentPage + 1 < 20) setCurrentPage((prevPage) => prevPage + 1);
};

<div className="pagination">
  {arrows && <img src={leftArrow} alt="Prev" onClick={() => pageDown()} />}
  <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} pages={20} />
  {arrows && <img src={rightArrow} alt="Next" onClick={() => pageUp()} />}
</div>;
```
