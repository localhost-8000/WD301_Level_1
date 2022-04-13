import { Link } from 'raviger';
import React from 'react';
import { FormData } from '../functions/types/formTypes';

export default function FormCard(props: {form: FormData}) {
    const { form } = props;

    return (
        <li className="flex flex-row w-full justify-between items-center my-2 rounded-lg py-2 px-4 shadow-sm bg-gray-200 hover:bg-gray-300" tabIndex={0}>
            <div className="">
                <h2 className="text-xl font-medium">{form.title}</h2>
            </div>
            <div className="flex gap-2">
                <Link
                    href={`/forms/${form.id}`}
                    className="px-6 py-1 rounded-lg font-semibold text-lg border-2 border-blue-400 text-blue-600"
                >
                    Edit form
                </Link>
                <Link 
                    href={`/preview/${form.id}`}
                    className="px-6 py-1 rounded-lg font-semibold text-lg border-2 border-blue-400 text-blue-600"
                >
                    Preview
                </Link>
                <Link 
                    href="#"
                    className="px-4 py-1 rounded-lg font-semibold text-lg border-2 text-slate-670"
                >
                    Drag
                </Link>
            </div>
        </li>
    );
}
