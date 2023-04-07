import React from 'react'
import Header from '../Header/Header'
import CustomerReview from '../Review/CustomerReview'
import Blogs from '../Blogs/Blogs'
import Footer from '../Footer/Footer'
import FeaturedServicesSection from '../Services/Services'

const Home = () => {
    return (
        <div>
            {/* Hero */}
            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <div className="w-full md:w-1/2 md:pr-12">
                        <h1 className="font-bold text-3xl md:text-5xl leading-tight mb-6">
                            Welcome to My Website
                        </h1>
                        <p className="text-xl mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in scelerisque lorem, ac bibendum justo. Integer quis est et est maximus vehicula.
                        </p>
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="#">
                            Call to Action
                        </a>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="w-full md:max-w-sm mx-auto" src="https://source.unsplash.com/7H77FWkK_x8/400x400" alt="Hero" />
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <FeaturedServicesSection></FeaturedServicesSection>

            {/* Customer Review */}
            <CustomerReview></CustomerReview>

            {/* letest blogs */}
            <Blogs></Blogs>

            {/* Footer */}
            <Footer></Footer>
        </div>
    )
}

export default Home