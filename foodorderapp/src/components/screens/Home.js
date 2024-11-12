import React , {useEffect,useState} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Card from '../Card';

export default function Home() {
  const [search, setsearch] = useState("");
  const [foodcat,setfoodcat] = useState([]);
  const [fooditem,setfooditem] = useState([]);

  const loaddata = async ()=>{
    let response = await fetch('http://localhost:5000/api/fooddata',{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      }   
    })
    response = await response.json()
    setfooditem(response[0])
    setfoodcat(response[1])
    // console.log(response[0],response[1]);
  }


  useEffect(()=>{
    loaddata()
  },[])


  return (
    <div>
      <div> <Navbar /> </div>
      <div> <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: "cover !Important"}}>
      <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption d-flex justify-content-centre align-items-center"  style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translate(-50%)",
          width: "60%",
          textAlign: "center",
          zIndex: "10",
        }} >
        <div className="d-flex" style={{width : '100%'}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
        </div>
        </div>
        <div className="carousel-item active">
          <img src="\fresh-tasty-burger-landscape-imageburger-with-landscape-background_1125611-815.jpg" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}}/>
        </div>
        <div className="carousel-item">
          <img src="\istockphoto-1341504203-2048x2048.jpg" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}}/>
        </div>
        <div className="carousel-item">
          <img src="\istockphoto-1365977387-1024x1024.jpg" className="d-block w-100" alt="..." style={{filter: "brightness(30%)"}}/>
        </div>
      </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> </div> </div>
      <div className='container'>
        {
          foodcat.length !== 0 ? 
          foodcat.map((data)=>{
            return(<div className='row mb-3'>
              <div key={data.id} className='fs-3 m-3'>{data.CategoryName}</div>
              <hr/>
              {fooditem.length !== 0 ? fooditem.filter((item)=> (item.CategoryName===data.CategoryName) && (typeof item.name === 'string')&&  item.name.toLowerCase().includes(search.toLowerCase())) 
              .map(filteritems =>{
                  return (
                    <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card foodItem = {filteritems}
                            options = {filteritems.options[0]} 
                            > 
                      </Card>
                    </div>
                  )
              }):<div>No such data found</div>}
            </div>
            )
          }):""
        }
      </div>
      <div> <Footer /> </div>
    </div>
  );
}
