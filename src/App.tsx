import React, { useState } from 'react'
import Column from './components/Column/component'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

function App () {
    const initialColumns = {
        backlog: {
            id: 'Backlog',
            itemList: [
                {
                    index: 1,
                    title: "1",
                    description: "Task 1",
                },
                {
                    index: 2,
                    title: "22",
                    description: "Task 2",
                },
                {
                    index: 3,
                    title: "333",
                    description: "Task 3",
                }]
        },
        test: {
            id: 'Test',
            itemList: [
                {
                    index: 4,
                    title: "4444",
                    description: "Task 4",
                },
                {
                    index: 5,
                    title: "55555",
                    description: "Task 5",
                },
                {
                    index: 6,
                    title: "66666",
                    description: "Task 6",
                }]
        }
    }
    const [columns, setColumns] = useState(initialColumns)

    const onDragEnd = ({ source, destination }: DropResult) => {
        if (destination === undefined || destination === null) return null

        if (
            source.droppableId === destination.droppableId &&
            destination.index === source.index
        )
            return null

        const start = columns.backlog
        console.log(start)
        const end = columns.test
        if (start === end) {
            const newList = start.itemList.filter(
                (_: any, idx: number) => idx !== source.index
            )

            newList.splice(destination.index, 0, start.itemList[source.index])

            const newCol = {
                id: start.id,
                list: newList
            }

            setColumns(state => ({ ...state, [newCol.id]: newCol }))
            return null
        } else {
            const newStartList = start.itemList.filter(
                (_: any, idx: number) => idx !== source.index
            )

            const newStartCol = {
                id: start.id,
                list: newStartList
            }

            const newEndList = end.itemList

            newEndList.splice(destination.index, 0, start.itemList[source.index])

            const newEndCol = {
                id: end.id,
                list: newEndList
            }

            setColumns(state => ({
                ...state,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            }))
            return null
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                width: '80%',
                gap: 20,
            }}>
                {Object.values(columns).map(col => (
                    <Column column={col} key={col.id} />
                ))}
            </div>
        </DragDropContext>
    )
}

export default App
