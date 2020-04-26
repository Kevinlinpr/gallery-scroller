import React from 'react';
import ReactDOM from 'react-dom';
import GalleryScroller from '../src/index';
import './app.css';
const root = document.createElement('div');
import Img1 from '../resources/demoImg/9.jpg';
import Img2 from '../resources/demoImg/10.jpg';
import Img3 from '../resources/demoImg/1.jpg';
import Img4 from '../resources/demoImg/2.jpg';
import Img5 from '../resources/demoImg/3.jpg';
import Img6 from '../resources/demoImg/7.jpg';

const resourcespropsList = [
    {
        img: Img1,
        marker: '独家',
        color: '#ff1744',
        onClick:()=>{
            console.log('go to 9.jpg 独家 #ff1744 url')
        }
    },
    {
        img: Img2,
        marker: '直播',
        color: '#00b8d4',
        onClick:()=>{
            console.log('go to 10.jpg 直播 #00b8d4 url')
        }
    },
    {
        img: Img3,
        marker: '独家',
        color: '#ff1744',
        onClick:()=>{
            console.log('go to 1.jpg 独家 #ff1744 url')
        }
    },
    {
        img: Img4,
        marker: '写真集',
        color: '#aa00ff',
        onClick:()=>{
            console.log('go to 2.jpg 写真集 #aa00ff url')
        }
    },
    {
        img: Img5,
        marker: '数字资源',
        color: '#00bfa5',
        onClick:()=>{
            console.log('go to 3.jpg 数字资源 #00bfa5 url')
        }
    },
    {
        img: Img6,
        marker: '直播',
        color: '#00b8d4',
        onClick:()=>{
            console.log('go to 7.jpg 直播 #00b8d4')
        }
    },
]
window.document.body.appendChild(root);

ReactDOM.render(
    <div style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <GalleryScroller 
        list={resourcespropsList}/>
    </div>,
    root
)