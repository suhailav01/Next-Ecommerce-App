"use client";
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
function Banner() {
    const route = useRouter();
  return (
     <Carousel style={{margin:"120px 5px 5px "}}>
      <Carousel.Item>
        <img onClick={() => route.push('/products')} height={300} className="d-block w-100" src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80" alt="Banner 2" />
      </Carousel.Item>
      <Carousel.Item >
        <img onClick={() => route.push('/products')} height={300}  className="d-block  " src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/fd432eb30bcf2f85.jpg?q=80" alt="Banner 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img onClick={() => route.push('/products')} height={300} className="d-block w-100" src="https://i.pinimg.com/736x/8e/bc/a2/8ebca2ecd61e110b2bf90d957a8edf5e.jpg" alt="Banner 3" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner;