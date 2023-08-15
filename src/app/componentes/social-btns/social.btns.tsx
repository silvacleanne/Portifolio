import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import "./social.btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
           
            <a href="https://www.linkedin.com/in/cleanne-silva-74a3121b3/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/silvacleanne">
                <GitHubIcon/>
            </a>
            
        </div>
    )
}