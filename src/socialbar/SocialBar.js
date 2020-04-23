import React, { Component } from 'react';
import './SocialBar.css';
import GithubLogo from './logos/githubLogo.png';
import LinkedinLogo from './logos/linkedinLogo.png';
import emailLogo from './logos/emailLogo.png';

class SocialBar extends Component {
  render() {
    return (
        <div>
            {/* <ul className="logos">
                <li>
                    <a href="">
                        <img src={GithubLogo}></img>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={LinkedinLogo}></img>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={emailLogo}></img>
                    </a>
                </li>
            </ul> */}
            <div className="vl"></div>
        </div>
    );
  }
}

export default SocialBar;