import React,{createContext,useState} from 'react'

export const UserContext = createContext();

export const UserDetails = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [uid, setUID] = useState("");
    // const [newPassword, setNewPassword] = useState("");
    const [dob, setDoB] = useState("");
    // const [gender, setGender] = useState("");
    // const [feets, setFeets] = useState(0);
    // const [inches, setInches] = useState(0);
    // const [heightM, setHeightM] = useState(0.0);
    const [mass, setMass] = useState(0.0);
    // const [bmi, setBMI] = useState(0.0);
    // const [bmr, setBMR] = useState(0.0); 
    const [logged, setLogged] = useState(false)
    const [loaded, setLoaded] = useState(false)
 
 return <UserContext.Provider value={{Name: [name,setName],Email: [email,setEmail],Password: [password,setPassword], Mass: [mass, setMass],DOB: [dob,setDoB], Logged: [logged, setLogged], UID: [uid, setUID], Loaded: [loaded, setLoaded]}}>
 {props.children}
 </UserContext.Provider>

}