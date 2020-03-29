import React from 'react';
import '../Assets/styles/footer.css';

function Footer() {
    return(
        <footer class="footer row">
            <span className="col-12">Desarrollado por Israel Ledezma</span>
            <a href="https://github.com/LedezmaG">
                <i class="fa fa-github"></i>&nbsp;
                LedezmaG
            </a>
            <a href="mailto:israeledezmag@gmail.com">
                <i class="fa fa-at"></i>&nbsp;
                Israeledezmag@gmail.com
            </a>
            <a href="tel:33 3442 4120">
                <i class="fa fa-phone"></i>&nbsp;
                (33) 3442 4120
            </a>
        </footer>
    );
}

export default Footer