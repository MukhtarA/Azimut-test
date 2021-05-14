import React, {FC} from "react";
import Item from "../Item/component";
import { Droppable } from "react-beautiful-dnd";
import {Props} from "./props";

const Column: FC<Props> = ({ column: { itemList, id } }) => {
    console.log('error')
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <h2>{id}</h2>
                    <div style={{
                        backgroundColor: "#e2e2e2",
                        borderRadius: 5,
                        padding: 16
                    }}
                         {...provided.droppableProps} ref={provided.innerRef}>
                        {itemList.map((item, index) => (
                            <Item title={item.title} index={index} description={item.description}/>
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    );
};

export default Column;
