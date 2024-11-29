import { memo,useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useRef } from 'react';
import resets from '../../_resets.module.css';
import classes from './EnterName_Property1Default.module.css';
import { useNavigate } from 'react-router-dom';
import { XIconIcon } from './XIconIcon.js';

const navigate = useNavigate(); 

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    enterEmail?: ReactNode;
    enterPass?: ReactNode;
  };
}

type User = {
  name: string;
  pass: string;
};

const users: User = {name: "TaMi", pass: "123" }; 


/* @figmaId 1:3 */
export const EnterName_Property1Default: FC<Props> = memo(function EnterName_Property1Default(props = {}) {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [show,setshow] = useState<string>("")
  const [showerr, setshowerr] = useState(false);
  const maskTimeoutRef = useRef<number | null>(null); // Ref to track timeout as a number


  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const changePass = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const currentValue = e.target.value; 
    if (currentValue.length < password.length) {
      setpassword(password.slice(0, -1)); 
      setshow (show.slice(0,-1));
      if(maskTimeoutRef.current){
        clearTimeout(maskTimeoutRef.current)
      }
    } else {
      const newChar = currentValue.slice(-1);
      setpassword(password + newChar); 
      const masked = '*'.repeat(currentValue.length - 1) + currentValue.slice(-1);
      setshow(masked);

      if(maskTimeoutRef.current){
        clearTimeout(maskTimeoutRef.current)
      }

      maskTimeoutRef.current = window.setTimeout(() => {
        setshow('*'.repeat(currentValue.length));
      }, 500);    }
  };


  const LoginCheck = () => {
    if(username != users.name || password != users.pass) {
      setshowerr(true) 
    }

    else {
      setshowerr(false)
      // navigate('/user/${username}')
    }
      
  } 
  
  return (
    <form
      onSubmit={handleUsernameSubmit}
    > 
     <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2}>
          <div className={classes.enterEmail}>
          <input 
            type = "text"
            placeholder= "Enter Email" required
            onChange={(e) => setusername(e.target.value)} 
          />
          </div>
      </div>
      <div className={classes.rectangle3}>  
        <div className= {classes.enterEmail}>
           <input 
            type = "text"
            placeholder= "Enter password" required
            value = {show}
            onChange={changePass} 
          />
        </div>
      </div>

      {/* {showerr && (
        <div className={classes.error}>
            Invalid username or password. Please try again.
        </div>
      )} */}

      <div className={classes.rectangle4}>
        <button onClick = {LoginCheck}>
        <div className={classes.signIn}>
            Sign In  
          </div> 
        </button>
      </div>
    </div>
    </form> 

);
});
