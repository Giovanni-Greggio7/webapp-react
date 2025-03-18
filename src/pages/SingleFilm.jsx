import axios from "axios"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import RewiewCard from "../components/ReviewCard"

export default function SingleFilm() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    const fetchMovies = () => {
        console.log('Fetching movies...')

        axios
            .get(`http://localhost:3000/movie/${id}`)
            .then((res) => {
                setMovie(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(fetchMovies, [id])

    const renderReviews = () => {
        return movie.reviews?.map((review) => {
            return <RewiewCard key={review.id} review={review} />
        })
    }

    return (

        <>
            <h1>{movie?.title}</h1>
            <img className="img-fluid" src={movie?.image} alt={movie?.title} />
          
            <section>
                <h4>Our community reviews</h4>
                {renderReviews()}
            </section>
        </>

    )
}