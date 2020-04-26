import React from 'react';
import ReactDOM from 'react-dom';
import GalleryScroller from '../src/index';
import './app.css';
const root = document.createElement('div');
const resourcespropsList = [
    {
        img: '../resources/demoImg/9.jpg',
        marker: '独家',
        color: '#ff1744',
        onClick:()=>{
            console.log('go to 9.jpg 独家 #ff1744 url')
        }
    },
    {
        img: '../resources/demoImg/10.jpg',
        marker: '直播',
        color: '#00b8d4',
        onClick:()=>{
            console.log('go to 10.jpg 直播 #00b8d4 url')
        }
    },
    {
        img: '../resources/demoImg/1.jpg',
        marker: '独家',
        color: '#ff1744',
        onClick:()=>{
            console.log('go to 1.jpg 独家 #ff1744 url')
        }
    },
    {
        img: '../resources/demoImg/2.jpg',
        marker: '写真集',
        color: '#aa00ff',
        onClick:()=>{
            console.log('go to 2.jpg 写真集 #aa00ff url')
        }
    },
    {
        img: '../resources/demoImg/3.jpg',
        marker: '数字资源',
        color: '#00bfa5',
        onClick:()=>{
            console.log('go to 3.jpg 数字资源 #00bfa5 url')
        }
    },
    {
        img: '../resources/demoImg/7.jpg',
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