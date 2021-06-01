import { Component } from "react";
import './gaya.css'
import produk from './produk.json'

class Bagian2 extends Component{
    render(){
        return(
            <div class="konten">
                {
                produk.offers.map((i) => {
                    return(
                        <div  class="card2">
                            <img class="gambar2" src={i.image}alt="gambar" ></img>
                            <div class="detail">
                                <h1 class="judul">{i.name}</h1>
                                <p class="harga">Rp {i.price}</p>
                                <p class="deskripsi2">{i.detail}</p>
                                <a href={i.link+"&dl=1"}>
                                    <button class="btn">
                                            Beli Sekarang
                                    </button>
                                </a>

                            </div>
                        </div>

                    )
                })
            }
            </div>
        )
    }

}

export default Bagian2;