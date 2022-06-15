import React from "react";

class App extends React.Component{

    state ={

        products: [
            {
                name:'Xman',
                valume:789,
                pitture:"https://comicvine.gamespot.com/a/uploads/scale_small/8/84205/3542386-xmen127vf8m092.jpg"
            },
            {
                name:'marvel',
                valume:456,
                pitture:"https://images-na.ssl-images-amazon.com/images/I/61yLW-xSYeL._SX258_BO1,204,203,200_QL70_ML2_.jpg"
            },
            {
                name:'Weapon X',
                valume:897,
                pitture:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1btlLefJegyeKqnZQ-7-6rFyVXel_5YfQuyQDqT0oIwP2Q4aAr2QLC0jpQ9QhEstjIoPq7nfzjuk1q6gBs0mwluswkdThE72yjUXge4U&usqp=CAc"
            },
            {
                name:'vemon',
                valume:8,
                pitture:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSEONJwJHK_MBt-RNmhopc14CIQ7ji467Actj7cqQLiWSox0hL20vZW091Wj5MmqIpBmTXQNih5S-jo3FJU8zQ_XGMMx3cnto5CAKbWVUc&usqp=CAc"
            }
       
        ]
    };

    render(){





/*
        const html = this.state.products.map(function(product){
            return(
                <figure className="snip1171">
                <img src={product.pitture} alt="this is xman"/>
                <div className="discription">the X Man</div>

                <figcaption>
                    <h3>{product.name}</h3>
                    <p>{product.valume}</p>
                    <a href="yes">Buy this NOW</a>
                </figcaption>
            </figure>  
            )
        })
*/
        /*const html =[];
        for(let product of this.state.products){
            html.push(
            <figure className="snip1171">
                <img src={product.pitture} alt="this is xman"/>
                <div className="discription">the X Man</div>

                <figcaption>
                    <h3>{product.name}</h3>
                    <p>{product.valume}</p>
                    <a href="yes">Buy this NOW</a>
                </figcaption>
            </figure>

            )
        }*/
        return (
        <div className="container">{this.state.products.map((product)=>(
            <figure className="snip1171">
                <img src={product.pitture} alt="this is xman"/>
                <div className="discription">the X Man</div>

                <figcaption>
                    <h3>{product.name}</h3>
                    <p>{product.valume}</p>
                    <a href="yes">Buy this NOW</a>
                </figcaption>
            </figure>
        ))}</div>
        
        );
    }
}

export default App;