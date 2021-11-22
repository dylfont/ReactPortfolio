import React from 'react';
import '../../style.css';
import profPhoto from '../../assets/myface.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
return (
<div>
<section id="contact" className="hero is-fullheight">
                <div className="contact-grid content-box" id="contact-box">
                    <div className="block tile contact-item">
                        <p></p>
                    </div> 
                    <div className="block tile contact-item">
                        <h3 className="title is-3">I'd love to work with you! Contact me for more info:</h3>
                    </div> 
                    <div className="block tile contact-item">
                        <h4><a href="mailto:dylanfontenot@protonmail.com">dylanfontenot@protonmail.com</a></h4>
                    </div> 
                    <div className="block tile contact-item">
                        <h4>Add me on <a href="https://www.linkedin.com/in/dylan-fontenot-248a67213/" target="_blank">LinkedIn</a></h4>
                    </div>
                    <div className="block tile contact-item">
                        <h4>Find me on <a href="https://github.com/dylfont" target="_blank">Github</a></h4>
                    </div>
                    <div className="block tile contact-item">
                        <figure className="level-item image is-16by16">
                            <img src={profPhoto} alt="profile photo" className="is-rounded" id="profile-photo" />
                        </figure>
                    </div>
                </div>        
    </section>
</div>
)
}
