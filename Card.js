import './Card.css';
import '../Banner/Banner_data';

export default function Card(prop){
    return(
        <div class="card">
            <div class="card-header">{prop.title}
                <div class="header">
                    <img src={prop.image[0]}  class="header-image" alt="mission"/>
                    <img src={prop.image[1]}  class="header-image" alt="vision"/>
                    <img src={prop.image[2]}  class="header-image" alt="value"/>
                </div>
            </div>

            <div class="card-body">{prop.description}</div>
        </div>
    );
}