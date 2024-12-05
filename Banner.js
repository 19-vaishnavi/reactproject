import Card from '../Card/Card';
import data from './Banner_data.js';

export default function Banner()
{
    return(
        <div class="card-container">
        <Card title={data.card_content[0].title}
        description={data.card_content[0].description}
        image={data.card_content[0].image}/>

        <Card title={data.card_content[1].title} description={data.card_content[1].description} image={data.card_content[1].image}/>

        <Card title={data.card_content[2].title} description={data.card_content[2].description} image={data.card_content[2].image}/>
        </div>
    );
}
