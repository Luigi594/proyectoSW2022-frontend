import { Select, Option } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

interface ISelectInput {
    selected: string;
    disabled: boolean
}

const InputSelect= ({children, selected,disabled,...props}: PropsWithChildren<ISelectInput>) => {
    return (
        <div>
        <fieldset>
        <label htmlFor="small" className="block mb-2 ml-4 text-sm text-gray-500 dark:text-gray-400">Estado</label>
        < select defaultValue={selected} disabled={disabled} id="small" className="block w-11/12 p-2 mx-4 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option >Eljia un Status</option>
            <option value="ACT">Activo</option>
            <option value="INA">Inactivo</option>
        </select>
        </fieldset>
        </div>
    )
}

export default InputSelect;