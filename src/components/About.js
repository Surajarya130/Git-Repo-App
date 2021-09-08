import React from 'react'


// About us page code
function About(props) {
    return (
        <div className={`container mx-auto text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2>About Us</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ipsum?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea consequatur corrupti consectetur? Quidem eos rem harum, quisquam libero voluptate quas perspiciatis qui eum consequuntur mollitia nam saepe a. Quaerat similique quam hic reprehenderit atque, perspiciatis, ab, consequuntur natus esse praesentium autem commodi. Ullam praesentium nesciunt officia repellendus porro voluptatibus consequatur!</p>
        </div>
    )
}

export default About
