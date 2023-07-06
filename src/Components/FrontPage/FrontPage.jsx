import React, { useEffect, useState } from 'react'
import './FrontPage.scss'
import Category from '../Category/Category'
import axios from 'axios'
// import Loader from '../Loader/Loader'

const FrontPage = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    // API calling for Category
    useEffect(() => {
        axios.get(`https://api.chucknorris.io/jokes/categories`).then((res) => {
            console.log("table data", res)
            setData(res.data)
            setLoading(false)
        }).catch((err) =>
            console.log(err, "api fetch error")
        )
    }, []);

    // console.log(data, "api fetched sucessfuly")

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    <>
                        <div className='' id='mainDiv'>
                            <div className='' id='catDiv'>
                                <Category data={data} />
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default FrontPage