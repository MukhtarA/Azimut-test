import React, {FC} from 'react';

import {Props} from './props';
import {Draggable} from 'react-beautiful-dnd';

const Item: FC<Props> = ({title, description, creationDate, editDate, index, ...rest}: Props) => {
    return (
        <div>
            <Draggable draggableId={title} index={index}>
                {provided => (
                    <div
                        style={{
                            flex: 1,
                            backgroundColor: '#e76f6f',
                            borderRadius: 4,
                            margin: 10,
                        }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <p style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            {title}
                        </p>
                        <p style={{
                            fontSize: 15,
                        }}>
                            {description}
                        </p>
                    </div>
                )}
            </Draggable>
        </div>
    );
};

export default Item;

