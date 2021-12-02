interface Props {
    name: string,
    values: string[]
}

const SelectBox = ({name, values}: Props) => {
    return ( 
        <select name={name}>
            <option disabled value="">{name}</option>
            {
                values.map((value, index) => {
                    return <option key={index} value={value}>{value}</option>
                })
            }
        </select>
     );
}

export default SelectBox;