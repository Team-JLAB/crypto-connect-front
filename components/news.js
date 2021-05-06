import React, { useEffect, useState } from 'react'
import axios from 'axios'

console.log(process.env.REACT_APP_GUARDIAN_KEY)
// import guardian from '../services/guardian'

export default function News() {
    // require('dotenv').config()
    // const [article, setArticle] = useState('')
    const [article1, setarticle1] = useState()
    const [link1, setlink1] = useState()
    const [article2, setarticle2] = useState()
    const [link2, setlink2] = useState()
    

    useEffect(() => {
        // const api_key = '23537971-a8db-4e0d-a80e-c72ce1b045a4'
        const request = axios.get(`https://content.guardianapis.com/search?q=cryptocurrency&api-key=${process.env.REACT_APP_GUARDIAN_KEY}`)
        .then(response => {
            setarticle1(response.data.response.results[0].webTitle)
            console.log('TEST')
            setlink1(response.data.response.results[0].webUrl)
            setarticle2(response.data.response.results[1].webTitle)
            setlink2(response.data.response.results[1].webUrl)
            // console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <img src='https://www.usnews.com/dims4/USNEWS/0087eb5/2147483647/crop/1996x1310%2B3%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F0f%2F3e%2Fb10501f74fa6b123dad8dbc925a7%2F210416-stock.jpg' width='280'/>
            <a href={ link1 }>{ article1 }</a>
            <br/>
            <img src='https://b2bm.s3.amazonaws.com/styles/default_image/s3/istock-1165342430_edited.jpg?itok=BilR0KOM' width='280'/>
            <a href={ link2 }>{ article2 }</a>
        </div>
    )
}