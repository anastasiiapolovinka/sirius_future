import { FC, useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'arithmetic', label: 'Ментальная арифметика' },
  { value: 'programming', label: 'Программирование' },
  { value: 'speed_reading', label: 'Скорочтение' },
];


const SelectSubject: FC = () => {
   const [selectedOption, setSelectedOption] = useState(null);
   const handleChange = (option: any) => {
      setSelectedOption(option);
   }
   return (
         <Select
            className="select-subject"
            placeholder="Выбрать предмет"
            value={selectedOption}
            onChange={handleChange}
            options={options}
         />
   )
}

export default SelectSubject;