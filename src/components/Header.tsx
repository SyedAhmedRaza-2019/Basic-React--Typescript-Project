import {type PropsWithChildren} from 'react'

type goalimageProps= PropsWithChildren<{image:{src:string;alt:string;}}>
const Header = (props: goalimageProps) => {
  return (
    <header>
        <img {...props.image} />
        {props.children}
    </header>
  )
}

export default Header