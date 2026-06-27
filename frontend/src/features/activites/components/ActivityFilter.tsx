interface Props {

  value: string;

  onChange: (
    value: string
  ) => void;

}

export default function ActivityFilter({

  value,

  onChange,

}: Props) {

  return (

    <select

      value={value}

      onChange={(e)=>

        onChange(
          e.target.value
        )

      }

      className="
        rounded-lg
        border
        p-3
      "

    >

      <option value="">
        All Activities
      </option>

      <option value="LEAD">
        Lead
      </option>

      <option value="CONTACT">
        Contact
      </option>

      <option value="COMPANY">
        Company
      </option>

      <option value="DEAL">
        Deal
      </option>

      <option value="TASK">
        Task
      </option>

    </select>

  );

}