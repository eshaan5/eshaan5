import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className='cta-text'>Wanna collaborate with me? <br className="sm:block hidden" /> Let's build something big together!</p>
        <Link to="/contact" className="btn">Get in touch</Link>
    </section>
  )
}

export default CTA