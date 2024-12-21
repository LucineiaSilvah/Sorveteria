import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Products = () => {
  return (
    <>
    
<section style={{background:'#FFD8F3'}}>
<h1 className='text-center'>Produtos</h1>
<div className="container" >
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' , margin:'1rem'}}>
            <img src="https://images.pexels.com/photos/3086861/pexels-photo-3086861.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sorvete de Lavanda com Mel</h5>
              <p className="card-text">
              Uma mistura delicada e sofisticada de lavanda aromática com o sabor suave e doce do mel. Este sorvete oferece um equilíbrio entre a flor de lavanda e a doçura natural do mel, criando uma experiência de sabor única e refrescante
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">lavanda aromática</li>
              <li className="list-group-item">mel</li>
             
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem', margin:'1rem' }}>
            <img src="https://cdn.pixabay.com/photo/2015/09/19/08/30/ice-cream-946913_960_720.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sorvete de Pistache com Framboesa</h5>
              <p className="card-text">
              Um sorvete que combina o sabor terroso e rico do pistache com a acidez vibrante da framboesa. A textura cremosa do pistache é complementada pela explosão de frescor das framboesas
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">pistache</li>
              <li className="list-group-item">framboesa</li>
             
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' , margin:'1rem'}}>
            <img src="https://c.pxhere.com/photos/f3/92/photo-47360.jpg!d" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sorvete de Chá Verde com Chocolate Branco</h5>
              <p className="card-text">
              Um sorvete que une o sabor terroso e levemente amargo do chá verde com a doçura cremosa do chocolate branco. A mistura resulta em uma experiência de sabor única 
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">chá verde</li>
              <li className="list-group-item">chocolate branco</li>
    
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>




</section>      
    </>

  );
}

export default Products;
