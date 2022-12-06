import { Select, Option } from "@material-tailwind/react";
import { InputHTMLAttributes, PropsWithChildren } from "react";

export interface IFieldSelectProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  name?: string;
  labelText?: string;
  value?: string;
  options?: { value: string; text: string }[];
  valueField?: string;
  textField?: string;
  disabled: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelect = ({
  name = "",
  labelText = "",
  value = "",
  disabled,
  options = [],
  valueField = "value",
  textField = "text",
  onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {},
  ...rest
}: IFieldSelectProps) => {
  return (
    <div>
      <fieldset>
        <label
          htmlFor={name}
          className="block mb-2 ml-4 text-sm text-gray-500 dark:text-gray-400">
          Estado
        </label>
        <select
          name={name}
          id={name}
          defaultValue={value}
          onChange={onChange}
          {...rest}
          disabled={disabled}
          className="block w-11/12 p-2 mx-4 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {options.map((option: { value: string; text: string }) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </fieldset>
    </div>
  );
};

export default InputSelect;
