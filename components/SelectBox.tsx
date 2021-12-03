import styled from 'styled-components'
interface Props {
    name: string,
    values: string[]
}

const SelectBox = ({name, values}: Props) => {
    return ( 
        <SelectInput name={name}>
            <option disabled defaultValue="">{name}</option>
            {
                values.map((value, index) => {
                    return <SelectOption key={index} value={value}>{value}</SelectOption>
                })
            }
        </SelectInput>
     );
}

const SelectInput = styled.select`
  width: 50%;
  background: #eee;
  padding: 6px;
  outline: none;
  border-radius: 5px;
  border: 1px #ddd solid;
`
const SelectOption = styled.option`
  background: #fff;
  padding: 5px;
`
export default SelectBox;