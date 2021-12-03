import styled from 'styled-components'
interface Props {
    name: string,
    values: string[]
}

const SelectBox = ({name, values}: Props) => {
    return ( 
        <SelectInput defaultValue={name}  name={name}>
            <option disabled value={name}>{name}</option>
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
  font-size: 14px;

  @media only screen and (max-width: 800px){
    font-size: 13px;
  }
`
const SelectOption = styled.option`
  background: #fff;
  padding: 5px;
`
export default SelectBox;