import React,{useContext} from "react";
import Item from "../Item/Item";
import { FilterContext } from "./PocketContainer";
import "./PocketItems.css"

const PocketItems = () => {
    const {filteredItems} = useContext(FilterContext);

    if (filteredItems.length === 0) {
        return(
            <div className="pocket__items">
                <span
                    className="fw-light fs-normal"
                    style={{display: "block", textAlign: "center"}}
                >
                    입력된 데이터가 없어요
                </span>
            </div>
        );
    };

    const copyFilteredItems = [...filteredItems];
    const sortedFilteredItems = copyFilteredItems.sort((a,b) => {
        if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
            return b.id - a.id;
        }

        return new Date(b.date) - new Date(a.date);
    });

    return (
        <div className="pocket__items">
            {sortedFilteredItems.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    date={item.date}
                    title={item.title}
                    amount={item.amount}
                    amountType={item.amountType}
                />
            ))}
        </div>
    );
};

export default PocketItems;