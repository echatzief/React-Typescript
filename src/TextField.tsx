import React,{useRef} from 'react';

interface Person{
  firstName: string;
  lastName: string;
}

interface Props{
  text: string;
  ok?: boolean;
  i?:number;
  fn?: (bob: string)=> string;
  person: Person;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}


export const TextField: React.FC<Props> = ({ handleChange }) =>{
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return(
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}

export default TextField;