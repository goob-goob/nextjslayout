import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import 'animate.css'

import source from '../public/EarBear.png'

export default function EarBear(state = true) {
    const [isAnimating, setIsAnimating] = useState(true)
    const animation = 'relative animate__animated animate__fadeInRightBig'
    const antimation = 'relative -inset-2/4'

    useEffect(() => {
        window.addEventListener('animationend', (e) => {
            console.log('hi')
            console.log(isAnimating)
            console.log(e)
            setIsAnimating(false)
        })

        return (
            window.removeEventListener('animationend', () => {})
        )
    }, [])
   
    return (
        <div className=''>
            <Image
                src={source}
                alt="Very Cute Bear"
                className={isAnimating ? animation : antimation} />
        </div>
    )
}

// const styles = StyleSheet.
