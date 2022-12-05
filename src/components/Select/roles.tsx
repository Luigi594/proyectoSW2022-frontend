import { Select, Option } from "@material-tailwind/react";
import { PropsWithChildren } from "react";

interface ISelectInput {
    selected: string;
    disabled: boolean;
}

const InputSelectRole= ({children, selected, disabled,...props}: PropsWithChildren<ISelectInput>) => {
    return (
        <div>
        <fieldset>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Estado</label>
       <select id="countries" defaultValue={selected} disabled={disabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
       <option >Eljia un Role</option>
            <option value="public">Publico</option>
            <option value="admin">Administrador </option>
            <option value="support">Soporte </option>
            <option value="auditor">Auditor </option>
        </select>
        </fieldset>
        </div>
        
    )
}

export default InputSelectRole;