import {useEffect, useState} from "react";
import {Session} from "@supabase/supabase-js";
import {supabase} from "@/lib/supabase";
import {Redirect} from "expo-router";

const Home = () => {
  const [session, setSession] = useState<Session | null>(null)
  
  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session)
    })
    
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
  }, [])
  
  if (session && session.user) {
    return <Redirect href={"/(auth)/Auth"}/>
  }
  return <Redirect href={"/(tabs)"}/>
  
  
}

export default Home;