function App(){
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes, setRandomQuotes] = React.useState("");
    const [colors, setColor] =  React.useState("#111")
    React.useEffect(()=> {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex =  Math.floor(Math.random()*data.length)
            setRandomQuotes(data[randIndex])
        }
        fetchData();
    },[])

    const getNewQuote = () =>  {
        const colors=[
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ];
        let randColorIndex = Math.floor(Math.random()*colors.length)
        let randIndex =  Math.floor(Math.random()*quotes.length)
            setRandomQuotes(quotes[randIndex])
            setColor(colors[randColorIndex])
    }
    const styles = {
        backgroundColor:colors,
    }

    
    
    return (
    <div style={{backgroundColor:colors, minHeight: "100vh"}}>
        <div className="container pt-5" >
            <div className="jumbotron" style={styles} >
                <div className="card">
                    <div className="card-body">
                        {randomQuotes ? (
                            <>
                            <h2 className="card-text"><i class="fas fa-quote-left"></i>{randomQuotes.text}</h2>
                            <h5 className="card-title">- {randomQuotes.author || "No author"}</h5>
                            </>
                        ) : (
                            <h2>Loading...</h2>
                        )}

                        <div className="row">
                            <button onClick={getNewQuote} style={styles} className="btn btn-primary ml-3">New Quote</button>
                            <a href="" className="btn ml-5" style={styles} >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="btn" style={styles} >
                                <i className="fab fa-tumblr"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

ReactDOM.render(<App/>,document.getElementById("app"))