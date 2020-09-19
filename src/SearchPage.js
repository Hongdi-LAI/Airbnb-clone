import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResults from './SearchResults'

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage__info">
                <p> 62 stays · 26 August to 30 August · 2 guest </p>
                <h1>Stays nearby</h1>
                <Button
                variant = "outlined"
                >Cancellation Flexibility</Button>
                <Button
                variant = "outlined"
                >Type of Place</Button>
                <Button
                variant = "outlined"
                >Price</Button>
                <Button
                variant = "outlined"
                >Rooms and beds</Button>
                <Button
                variant = "outlined"
                >More Filters</Button>
            </div>

            <SearchResults 
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location = "Private room in center of London"
                title = "Stay at this Spacious Edwardian House"
                description = "1 guest · 1 bedroom · 1 bed · 1 shared bathroom · Wifi · Kitchen · Free Parking · Washing Machine"
                star = {4.73}
                price = "￡30 / night"
                total = "￡117 total"
            />

            <SearchResults 
                img = "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location = "Luxury studio in the south of London"
                title = "Independant Luxury Studio Apartment"
                description = "2 guests · 3 bedrooms · 3 beds · 2 shared bathrooms · Wifi · Kitchen"
                star = {4.3}
                price = "￡40 / night"
                total = "￡157 total"
            />

            <SearchResults 
                img = "https://a0.muscache.com/im/pictures/b0998d00-e88f-46c0-ae39-2097900641b0.jpg?im_w=960"
                location = "Beautiful studio in central London"
                title = "London Studio Apartments"
                description = "4 guests · 3 bedrooms · 4 beds · 2 shared bathrooms · Free Parking · Washing Machine"
                star = {4.9}
                price = "￡55 / night"
                total = "￡207 total"
            />

            <SearchResults 
                img = "https://a0.muscache.com/im/pictures/274df76c-89d2-4ec3-9d8c-1e7c9b67029f.jpg?im_w=960"
                location = "Spacious room near Buckingham Palace"
                title = "30 mins to Oxford Street, Excel London"
                description = "1 guest · 1 bedroom· 1 bed · 2 shared bathrooms · Wifi · Kitchen · Free Parking · Washing Machine"
                star = {4.1}
                price = "￡85 / night"
                total = "￡287 total"
            />
        </div>
    )
}

export default SearchPage
