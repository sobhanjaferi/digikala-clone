import SupperOfferItem from "./supperOfferItem";

function SupperOffers() {
    return ( 
        <div className="mx-auto container bg-red-500 w-7/10 flex justify-between items-center">
            <SupperOfferItem />
            <SupperOfferItem />
        </div>
     );
}

export default SupperOffers;