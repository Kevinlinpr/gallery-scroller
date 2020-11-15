import React from 'react';
import ReactDOM from 'react-dom';
import GalleryScroller from '../src/index';
import SelfAdaptionGalleryScroller from '../src/v2/index';
import './app.css';
const root = document.createElement('div');
import Img1 from '../resources/demoImg/recommand_1.jpg';
import Img2 from '../resources/demoImg/recommand_2.jpg';
import Img3 from '../resources/demoImg/recommand_3.jpg';
import Img4 from '../resources/demoImg/recommand_4.png';

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
    }
]
window.document.body.appendChild(root);

ReactDOM.render(
    <div style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        
        <SelfAdaptionGalleryScroller
            list={resourcespropsList}
        />
    </div>,
    root
)