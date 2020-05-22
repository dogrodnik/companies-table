```jsx
import { useState } from "react";
import { Pages } from "./Pages";

const [arrows, setArrows] = useState(true);
const [currentPage, setCurrentPage] = useState(0);

<div className="pagination">
  <Pages currentPage={currentPage} setCurrentPage={setCurrentPage} pages={20} />
</div>;
```
