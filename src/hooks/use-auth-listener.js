import {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from '../context';

export default function useAuthListener(){
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const [firebase] = useContext(FirebaseContext);

  useEffect(() => {
    
  }, []);

  return {user};
}