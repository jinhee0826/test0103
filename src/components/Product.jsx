import {} from '../css/product.css'


const Product = () => {

    const product = ([
      {id : "옷1", img : "옷1.png"},
      {id : "옷2", img : "옷2.png"},
      {id : "옷3", img : "옷3.png"}  
    ])
    return ( 
        <div className='ProductList'>
            <a className="moreLink" href=''>더보기</a>
        <div className="imgFile">
                {
                    product.map((img,index) => (
                        <div key={index}>
                        <img src={require(`../img/${img.img}`)} alt="" />
                        <p className='productName'>{img.id}</p>
                    </div>    
                ))
            }        
        </div>
            </div>
    );
}
export default Product;
