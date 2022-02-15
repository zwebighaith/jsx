import './App.css';
import img from "./image/gaith.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 style = {{color:"red"}}>Your name here</h1>

<br/>

<img src="../images/GAITH.jpg" style={{width:"100px",height:"80px"}} />

<br/>

<img src={img} style={{width:"100px",height:"80px"}}/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
