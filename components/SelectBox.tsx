interface Props {
    name: string,
    values: string[]
}

const SelectBox = ({name, values}: Props) => {
    return ( 
        <select name={name}>
            <option disabled value="">{name}</option>
            {
                values.map(value => {
                    return <option value={value}>{value}</option>
                })
            }
        </select>
     );
}

export default SelectBox;