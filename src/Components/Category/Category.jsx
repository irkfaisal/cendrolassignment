import React, { useEffect, useState } from 'react'
import './Category.scss'
import Dialog from '../Dialog/Dailog'
import axios from 'axios'
// import Loader from '../Loader/Loader'

const Category = ({ data }) => {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState({})
    const [open, setOpen] = useState(false)
    const [joke, setJoke] = useState([])
    const [select, setSelect] = useState("")
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(true);

    //OnClick event when we slect a category
    const handleClick = (item, id) => {
        setValue(...data)
        let res = (data.filter((e, i) => i === id))[0]
        setValue({ ...data, item: res })
        setSelect(item)
        handleOpen()
    }
    // console.log(value, "value")

    // fteching api of jokes when modal will open
    const fetchJoke = async () => {
        const url = `https://api.chucknorris.io/jokes/random?category=${select}`
        return await axios.get(url)
            .then((response) => {
                // console.log("table data", response)
                setJoke(response.data)
                setLoading(false)
            }).catch((err) =>
                console.log(err, "api joke fetch error")
            )
    }

    useEffect(() => {
        fetchJoke();
    }, [select])
    // console.log(joke, "joke")
    // console.log(joke?.value, "joke integration")
    // console.log(select, "select")

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    <>
                        {
                            data.length > 0 && data.map((item, index) => {
                                return (
                                    <div className='' id='catBox' key={index}
                                        onClick={() => handleClick(item, index)}>
                                        <h1>{item}</h1>
                                        <p>{`Unlimited Jokes On ${item}`}</p>
                                    </div >
                                )
                            })
                        }
                        < Dialog handleOpen={handleOpen} handleClose={handleClose} fetchJoke={fetchJoke} setOpen={setOpen} open={open} value={value} joke={joke} setJoke={setJoke} select={select} />
                    </>
            }
        </>
    )
}

export default Category