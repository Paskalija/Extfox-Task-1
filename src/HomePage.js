import React from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import './app.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PACKA from '../src/Cards'

function HomePage() {
    document.addEventListener('readystatechange', event => {
        const timer = setTimeout(() => {
            const reviews = document.getElementsByClassName('reviews');
            for (let elem of reviews) {
                elem.classList.remove('hide');
            }
        }, 10000);
        return () => clearTimeout(timer);
    });

    function AddItemToCard(e) {
        var addToCardButton = e.target;
        addToCardButton.classList.add("hide");
        var spinner = e.target.previousElementSibling;
        spinner.classList.remove("hide");
        const timer = setTimeout(() => {
            spinner.classList.add("hide");
            addToCardButton.classList.remove("hide");

        }, 1000);
        var item = document.getElementsByClassName('shopingCard');
        var newCount = parseInt(item[0].innerHTML);
        newCount++;
        item[0].innerHTML = newCount;
        item[0].classList.remove("hide");
    }

    return (
        <Container className='container'>
            {PACKA.map(x => (
                <div key={x.id} className="card">
                    <AwesomeSlider>
                        {x.img.map((item) =>
                            <div data-src={item} />
                        )}
                    </AwesomeSlider>
                    <div className="card-body">
                        <h5 className="card-title">{x.title}</h5>
                        <p className="card-text changeTextCollor">
                            {x.description}
                        </p>
                        <Button variant="primary" disabled className='hide' >
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>
                        <button href="#" onClick={(e) => AddItemToCard(e)} className="btn btn-primary cartclick " >Add to cart</button>
                        <p className='hide reviews'> {x.review} </p>
                    </div>
                </div>
            ))}
        </Container>
    );
}
export default HomePage;