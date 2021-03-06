import React from 'react'
import PostsList from './Posts/PostsList'
import Sidebar from './Sidebar/Sidebar'
import { Route } from 'react-router-dom'
import LifeStylePage from './LifeStylePage/LifeStylePage'
import PodcastPage from './PodcastPage/PodcastPage'
import ReviewsPage from './ReviewsPage/ReviewsPage'
import TravelPage from './TravelPage/TravelPage'

const Main=()=> {
    return (
    <main>
		<div className="container">
			<Route exact path="/" component = {PostsList} />
			<Route path="/lifestyle" component = {LifeStylePage} />
			<Route path="/podcast" component = {PodcastPage} />
			<Route path="/reviews" component = {ReviewsPage} />
			<Route path="/travel" component = {TravelPage} />
			<Sidebar/>
		</div>
	</main>
    )
}

export default Main