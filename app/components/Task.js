import React from "react";
import { DndContext,closestCenter,clousestCorners } from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'
import {useSortable} from '@dnd-kit/sortable'
import '/app/app.css';
import {CSS} from '@dnd-kit/utilities'
function Task({task}) {
    const {attributes, listeners,setNodeRef, transform, transition} = useSortable({
        id: task._id
     })  
     const style = {
        transition,
        transform: CSS.Transform.toString(transform)
     };
    return(
        <div id="taskUI" 
        ref={setNodeRef} 
        {...attributes} 
        {...listeners} 
        style={style}>
            <tr>
                <td>{task.priority}</td>
                <td>{task.description}</td>
            </tr>
        </div>
    )
}

export default Task