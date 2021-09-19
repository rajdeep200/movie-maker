import React, {useEffect} from 'react'
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import Matches from "../component/Matches";
import { getMatches } from "../redux/matchSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMatches())
    }, [dispatch])
    return (
        <div>
            <NavBar />
            <Header />
            <Matches />
        </div>
    )
}

export default HomePage
