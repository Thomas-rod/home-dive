import { PopupButton } from '@typeform/embed-react'

export default function Popover_Test() {
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: 10,
    border: 'none',
    background: 'navy',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
  }
  
  return (
    <PopupButton
        id={"ip7eLFkJ"}
        style={buttonStyle}
        size={66}
        medium="demo-test"
        hidden={{ foo: 'foo value', bar: 'bar value' }}
    >
        open popup
    </PopupButton>
  )    
}
