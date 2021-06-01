import { Component } from "react";
import produk from './produk.json'

class Headline extends Component{
    render(){
        return(
            
            <body className="App" >
                <div class="Headline">
                    <img class="gambar" src={produk.image}></img>
                    <div class="detail">
                        <h1 class="judul">{produk.name}</h1>
                        <p class="harga">Rp {produk.price}</p>
                        <p class="deskripsi">{produk.detail}</p>
                        <a href={produk.link+"&dl=1"}>
                            <button class="btn">
                                    Beli Sekarang
                            </button>
                        </a>
                    </div>
                </div>

            </body>
        )
    }

}

export default Headline;