import { Button } from "react-bootstrap";
import { ListResultLimits } from "types/types.d";
import "./Pagination.scss";

interface Props {
  limits: ListResultLimits;
  ogGetData: (limits: ListResultLimits) => void;
}

export function Pagination({ ogGetData, limits }: Props) {
  const handlePrevious = () => {
    ogGetData({
      firstKey: limits?.firstKey,
    });
  };

  const handleNext = () => {
    ogGetData({
      lastKey: limits?.lastKey,
    });
  };

  return (
    <div className="Pagination">
      <Button
        size="sm"
        onClick={handlePrevious}
        className="Pagination__button Pagination__button-previous"
      >
        <i className="bi bi-arrow-left Pagination__arrow" />
      </Button>
      <Button
        size="sm"
        onClick={handleNext}
        className="Pagination__button Pagination__button-next"
      >
        <i className="bi bi-arrow-right Pagination__arrow" />
      </Button>
    </div>
  );
}
