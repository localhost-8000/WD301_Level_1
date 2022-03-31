import React from 'react';
import { Field } from '../functions/types/formTypes';

interface TextareaInputProps {
    field: Field;
    answer: string;
    changeValueCB: (id: number, value: string) => void;
}

export default function TextareaInput(props: TextareaInputProps) {
    const { field, answer, changeValueCB } = props;

    return (
        <div className="mb-1">
            <label className="block text-gray-700 text-lg">
                {props.field.label}
            </label>
            <textarea 
                autoFocus
                value={answer}
                title="Enter your answer"
                onChange={e => changeValueCB(field.id!, e.target.value)}
                className="w-full p-2 border-2 border-gray-200 rounded-lg mt-1"    
            ></textarea>
        </div> 
    )
}
