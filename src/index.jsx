import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
{
    id: 1,
    name: 'Smartphone',
    brand: 'Apple',
    modelno: 'iphoneX',
    colour: 'Jet black',
    media: 'https://cdn.macrumors.com/article-new/2017/09/iphonexdesign.jpg',
    about: 'Released 2017, October,174g, 7.7mm thickness,iOS 11.1.1, up to iOS 11.2.5,64/256GB storage, no card slot'

},
{
    id: 2,
    name: 'Computer',
    brand: 'Apple',
    modelno: 'macbook air',
    colour: 'gray',
    media: 'https://img.grouponcdn.com/deal/27NkRMDnmGuykMFP9zq4rKjfnX1b/27-1500x900/v1/c700x420.jpg',
    about: 'The MacBook Air has long been the choice of Mac-buying consumers who value portability and light weight above all else, and Apple has set the standard that the rest of the industry follows when it comes to making a lightweight, powerful computer that works well'

},
{
    id: 3,
    name: 'Tablet',
    brand: 'Apple',
    modelno: 'Ipad pro',
    colour: 'black',
    media: 'http://img.ltn.com.tw/Upload/3c/page/2017/08/08/170808-31100-1.jpg',
    about: 'The iPad Pro is a line of iPad tablet computers designed, developed, and marketed by Apple Inc., that runs the iOS mobile operating system.'
},
{
    id: 4,
    name: 'HomeTheater',
    brand: 'Samsung',
    modelno: 'HT-E5400 5.1',
    colour: 'black',
    media: 'https://images-na.ssl-images-amazon.com/images/G/01/SAMF9/TV/2012/APLUS_Content/HT-E5400._V146141731_.jpg',
    about: '5.1 Channel1000 Watts,2nd Generation Open-Type Speakers with Phase Plug,3D Blu-ray Disc Player,iPod Dock,DVD Video Up Conversion,AllShare Play,Anynet+'
},
{
    id: 5,
    name: 'Digital camera',
    brand: 'Canon',
    modelno: 'Canon EOS 1300D',
    colour: 'Black',
    media: 'https://images-na.ssl-images-amazon.com/images/I/81dSBIDNGEL._SL1500_.jpg',
    about: 'Large 18 megapixel CMOS-sensor in APS-C format.TL-CT-SIR with CMOS-sensor, AF-value save, by pressing the trigger down halfway in One-Shot AF-mode.'
}
];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/Sites" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/Sites/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
