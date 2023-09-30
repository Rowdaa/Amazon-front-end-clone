import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="Home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
          alt="#"
        />
      </div>
      <div className="row_container">
        <Product
          id="0000"
          title="Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil With Biotin & Essential Oils, Nourishing Treatment for Split Ends and Dry Scalp for All Hair Types, 2-Fluid Ounces"
          image="https://m.media-amazon.com/images/I/716gEi8p8IL._SX425_.jpg"
          rating={5}
          price="9"
        />
        <Product
          id="0001"
          title="Concept One Microsoft Xbox Baseball Hat, Glow in The Dark Skater Adult Snapback Cap with Flat Brim, Green/Black, One Size"
          image="https://m.media-amazon.com/images/I/71sqiypdHAL._AC_UX522_.jpg"
          rating={4}
          price="50"
        />
      </div>
      <div className="row_container">
        <Product
          id="0003"
          title="Fossil Gen 6 44mm Touchscreen Smartwatch with Alexa Built-In, Heart Rate, Blood Oxygen, Activity Tracking, GPS"
          image="https://m.media-amazon.com/images/I/712swHvvx1L._AC_UX679_.jpg"
          rating={5}
          price="10"
        />
        <Product
          id="0004"
          title="Kindle Paperwhite Kids Essentials Bundle Including Kindle Kids Device - (16 GB), Kids Cover - Emerald Forest,"
          image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg"
          rating={5}
          price="399"
        />
        <Product
          id="0010"
          title="Seagate Portable 2TB External Hard Drive HDD — USB 3.0 for PC, Mac, PlayStation,"
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          rating={4}
          price="463"
        />
      </div>
      <div className="row_container">
        <Product
          id="0011"
          title="Logitech G PRO Wireless Gaming Mouse, Hero 16K Sensor, 16,000 DPI, RGB, Ultra Lightweight, 4 to 8 Programmable Buttons, Long Battery Life, On-Board Memory, Built for Esport, PC / Mac - Black"
          image="https://m.media-amazon.com/images/I/51ySu55JzAL._AC_SL1500_.jpg"
          rating={4}
          price="100"
        />
      </div>
    </div>
  );
}

export default Home;
