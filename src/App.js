import React from 'react'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Orders from './components/Orders'
import TopStudents from './components/TopStudents'
import Reviews from './components/Reviews'
import './App.css'

const App = () => {
  // Sample data for user profile
  const userProfileData = {
    name: 'Amit Jha',
    phoneNumber: '+91774696033',
    email: 'amit.jha6700@gmail.com',
    address:
      'R107, AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGALORE, INDIA - 846089',
  }

  // Sample data for orders
  const ordersData = [
    {
      id: 1,
      orderNumber: '1293',
      product: 'Sample Book Name',
      date: '10/04/2021',
      address:
        'R107, AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGALORE, INDIA - 846089',
    },
    // Add more orders as needed
  ]

  // Sample data for top students
  const topStudentsData = [
    {
      name: 'Amit Jha',
      review: 'Some review submitted by the user about the company',
    },
    // Add more top students as needed
  ]

  // Sample data for reviews
  const reviewsData = [
    'Some review submitted by the user about the company',
    // Add more reviews as needed
  ]

  return (
    <div className="App">
      <Header />
      <div className="container">
        <UserProfile {...userProfileData} />
        <Orders orders={ordersData} />
        <TopStudents students={topStudentsData} />
        <Reviews reviews={reviewsData} />
      </div>
    </div>
  )
}

export default App