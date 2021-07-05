import React from 'react'
import '../styles/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className = "home">
      <img className = "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TTW_H1Banner_en-UK_EndCard_Desktop_1500x300_002._CB665717410_.jpg" alt="" />

      {/* Product component - 2 row*/}
      <div className="home__row">
        <Product 
        id = "1233646456545"
        title = "AMONAX Barbell Squat Pad, Extra Thick Foam Padding for Neck & Shoulder Support, Heavy Duty Gym Fitness Workout Cover for Women Hip Thrusts, Weight Lifting and Heavy Weight Squats (Black)"
        price = {10.99}
        rating = {4}
        image = "https://images-na.ssl-images-amazon.com/images/I/71-Ot5pke1L._AC_SL1500_.jpg"
        />
          <Product 
        id = "12456548987"
        title = "Senshi Japan Cable Machine Attachments Pull Down Rope, Tricep Rope, Straight Bar, Stirrup Handle, Row Handle, Lat Pulldown Bar - Multigym Multi Home Gym Exercise Accessories Bars And Straps"
        price = {29.99}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/81xfK4qPTEL._AC_SX679_.jpg"
        />
      </div>

      {/* Product 3 row */}
      <div className="home__row">
        <Product 
        id = "879707089-"
        title = "Barbell Pad by Beast Gear - Professional Standard Heavy Duty Weight Lifting Barbell Pad with Secure Hook and Loop Fastener. For Shoulder, Neck, Back & Hip Protection During Squats & Hip Thrusts."
        price = {13.97}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/71E9vm4eeqL._AC_SX679_.jpg"
        />
         <Product 
        id = "98-9=0-=0-"
        title = "YOLEO Adjustable Weight Bench - Utility Weight Benches for Full Body Workout, Foldable Incline/Decline Bench Press for Home Gym"
        price = {59.99}
        rating = {3}
        image = "https://images-na.ssl-images-amazon.com/images/I/41KKgjXaXzL._AC_SY780_.jpg"
        />
        <Product 
        id = "1233,9y,87.8678"
        title = "WEALLNERSSE Adjustable Folding Weight Bench - 7 Incline/Decline Positions, Foldable Workout Bench, Full Body Strength Training, Perfect for Home Gym"
        price = {99.99}
        rating = {5}
        image = "https://images-na.ssl-images-amazon.com/images/I/51Y5d-iWnNS._AC_SX679_.jpg"
        />
      </div>

      {/* Product 1 row */}
      <div className="home__row">
        <Product 
          id = ".l6;.78u6y"
          title = "DTX Fitness Squat Rack Power Cage With Pull Up Bar"
          price = {189.99}
          rating = {5}
          image = "https://images-na.ssl-images-amazon.com/images/I/61vHIWoGMKL._AC_SX679_.jpg"
          />
      </div>
    </div>
  )
}

export default Home
