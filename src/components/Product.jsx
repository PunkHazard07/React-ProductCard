import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Product = (props) => {
    const {name, description, price, image} = props;
    
    const style = {
        card: {
            border: "1px solid black",
            borderRadius: "10px",
            padding:"10px",
            margin: "10px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
        },

        button: {
            width: "100px"
            
        },

        cardImg: {
            // height: "200px",
            // objectFit: "cover",
            // objectPosition: "center",
        },
    }
return (
    <div className="">

    <Card style={{ width: '20rem' }}>
        <Card.Img src= {image} alt= {name} style={style.card}/>
        <Card.Title style={{ padding: '10px'}}>{name}</Card.Title>
        <Card.Text style={{ padding: '10px'}}>
        {description}
        </Card.Text>
        <Card.Text style={{ padding: '10px'}}><strong>${price}</strong></Card.Text>
        <Button variant="primary" style={style.button}>Buy Now</Button>
    </Card>

   </div>
  )
}

export default Product