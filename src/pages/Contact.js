import React, { Component } from 'react'
import{ Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contactStyles.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>Mohammed Sadiq Ali<br/>
        <span>Address: #4-54-87 MaqdumNagar Jagathgririgutta
        Kukatpally Hyderabad</span></p>
        <span>For more details ...</span>
        <ul className="social">
        <li>
            <a href="https://www.linkedin.com/in/sadiq-ali-702659a6">
                <i className="fab fa-linkedin"></i></a>
        </li>
        <li>
            <a href="https://github.com/sadiq79" target="_blank">
                <i className="fab fa-github"></i>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/sadiq123ali" target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="http://sadiq.md.ali@gmail.com" target="_blank">
                <i class="fas fa-envelope-square"></i>
            </a>
        </li>
        <li>
            <a href="http://gmail.com" target="_blank">
                <i className="fab fa-google"></i>
            </a>
        </li>
        <li>
            <a href="http://facebook.com/cruzealii" target="_blank">
                <i class="fab fa-facebook-square"></i>
            </a>
        </li>
        
        </ul>
      </div>
    )
  }
}
