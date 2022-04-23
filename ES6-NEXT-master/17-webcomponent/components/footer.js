export default class Footer extends HTMLElement{
    connectedCallback(){
        const current = this.getAttribute("current")
        this.innerHTML=`
        <footer>
            <nav>
                <ul>
                    <li> 
                        <a style="color:${current === "home" ? "chartreuse" : 'burlywood'}" href="./">
                            Acceuil
                        </a>
                    </li>
                    
                    <li> 
                        <a style="color:${current === "contact" ? "chartreuse" : 'burlywood'}" href="./contact.html">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
        `
    }
}