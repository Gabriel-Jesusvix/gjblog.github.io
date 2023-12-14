/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api, issuesApi } from "../lib/api";
import { Issue } from "./@types/IIssues";


interface GithubContextType {
  user: IUser | undefined;
  fetchIssues: (query:string) => Promise<void>;
  issues: IIssues[];
}
interface GithubsProviderProps {
  children: ReactNode
}

type IIssues = {
  title: string;
  body: string;
  updated_at: Date
}
type IUser = {
  avatar_url: string;
  bio: string;
  company: string | null;
  followers: number;
  login: string;
  name: string;
}


export const GithubContenxt = createContext({} as GithubContextType)


export function GithubProvider({children}: GithubsProviderProps) {
  const [user,setUser] = useState<IUser | undefined>()
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchUser() {
    const {data} = await api.get('/gabriel-jesusvix')
    setUser(data)
  }

  async function fetchIssues(query: string) {
    const { data } = await issuesApi.get('/issues', {
      params: {
        q: query,
      }
    })
    setIssues(data.items)
  }

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <GithubContenxt.Provider
      value={{
        user,
        fetchIssues,
        issues,
      }}
    >
    {children}
    </GithubContenxt.Provider>
  )
}

export function useGitHub() {
  const context = useContext(GithubContenxt)

  return context
}