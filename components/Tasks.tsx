import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { columnType, taskType, boardType } from '@/store'

type tasksType = {
    columname : string
}
export default function Tasks(props : tasksType) {
    const tasks = useSelector((state: any) => {
        const activeBoard = state.boards.boards.find((board: boardType) => board.isActive);
        const column = activeBoard ? activeBoard.columns.find((col: columnType) => col.name === props.columname) : undefined;
        return column ? column.tasks : [];
    });
    return (
        <div className='mt-[2rem] h-full flex flex-col'>
            {tasks.map((tasks : taskType) => (
                <div className='mb-10 cursor-pointer flex shadow-md hover:text-[rgba(99,95,199,255)] justify-start font-bold items-start text-[rgb(0,0,0)] dark:text-[rgba(255,255,255,255)] pr-1 pt-2 rounded-md pl-2 h-[7rem] w-[17rem] dark:bg-[rgba(43,44,55,255)] bg-[rgba(255,255,255,255)] ' key={tasks.title}>
                    {tasks.title}
                </div>
            ))}
        </div>
    )
}