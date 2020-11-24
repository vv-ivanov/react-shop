import React from 'react';
import {SliderFullWidth} from "components/Slider"
import {BannerBigLeft} from  "components/Banner"
import TabCategoryMain from 'components/TabCategoryMain'


const slides = [{
  image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  text: ""
},{
  image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  text: "INTRODUCING THE NEW Iphone"
},{
  image:"https://images.unsplash.com/photo-1498753427761-548428edfa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
  text: "Macbook The New Super Powerful Note Pre-Oder Starts From 2PM"
}]

const bannerCollection = [{
  image: "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  alt: "",
  link: "/",
  description: "Regb офигенный девайс"
},{
  image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  alt: "",
  link: "/",
  description: "Regb офигенный девайс"
},{
  image:"https://images.unsplash.com/photo-1498753427761-548428edfa67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
  alt: "",
  link: "/",
  description: "Regb офигенный девайс"
}]

 const Home = () => (
  <div>
      <SliderFullWidth slides={slides} />
      <BannerBigLeft big={bannerCollection[0]} top={bannerCollection[1]} bottom={bannerCollection[2]} />
      <TabCategoryMain />
  </div>
)
export default Home