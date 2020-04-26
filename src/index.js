import React, { useState, useEffect } from 'react';
import './style.css';



export default function GalleryScroller(props){
    let [centerIndex,setCenterIndex] = useState(0);
    let [leftIndex,setLeftIndex] = useState(props.list.length-1);
    let [rightIndex,setRightIndex] = useState(1);
    useEffect(()=>{
        setLeftIndex((centerIndex-1)<0?(props.list.length-1):(centerIndex-1))
        setRightIndex((centerIndex+1)>(props.list.length-1)?0:(centerIndex+1))
    },[centerIndex])
    return (
        <>
            <div style={{width:'1400px',height:'330px',position:'relative'}}>
            <div style={{width:'1400px',height:'300px',display:'flex',alignItems:'flex-end',marginLeft:'0px',position:'relative'}}>
                {
                    props.list.map((item,index)=>{
                        return(
                            <div
                            key={index}
                            style={{
                                position:'absolute',
                                width:index==centerIndex?'720px':(index==leftIndex||index==rightIndex)?'700px':'700px',
                                height:index==centerIndex?'300px':(index==leftIndex||index==rightIndex)?'280px':'280px',
                                zIndex:index==centerIndex?1:(index==leftIndex||index==rightIndex)?-1:-2,
                                left:index==centerIndex?'340px':index==leftIndex?'0px':index==rightIndex?'700px':'340px',
                                transition:index==centerIndex?
                                'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 1ms':
                                index==leftIndex?
                                'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 1ms':
                                index==rightIndex?'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 5ms':
                                'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 5ms',
                                cursor:'pointer'
                                }}
                                onClick={()=>{
                                    if(item.onClick){item.onClick();}
                                }}
                                >
                                    {
                                        <>
                                        <div style={{
                                            width:index==centerIndex?'720px':(index==leftIndex||index==rightIndex)?'700px':'700px',
                                            height:index==centerIndex?'300px':(index==leftIndex||index==rightIndex)?'280px':'280px',
                                            transition:index==centerIndex?
                                            'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 1ms':
                                            index==leftIndex?
                                            'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 1ms':
                                            index==rightIndex?'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 5ms':
                                            'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 5ms',
                                            position:'relative',overflow:'hidden'}}>
                                        <img alt={""} src={item.img} style={{width:'100%',paddingRight:'5px'}}/>
                                        </div>
                                        <div style={{height:'24px',backgroundColor:item.color,position:'absolute',right:'-5px',
                                                        top:index==centerIndex?'246px':'226px',
                                                        borderRadius:'24px 0px 0px 24px',
                                                        transition:'top 10ms ease-in-out 200ms',
                                                        zIndex:1
                                                        }}>
                                                            <span className='web-font'>{item.marker}</span>
                                                        </div>
                                        <div style={{height:'100%',width:'100%',backgroundColor:'black',position:'absolute',top:'0px',left:'0px',
                                                    opacity:index==centerIndex?0:0.5,
                                                    transition:'opacity 200ms ease-in-out 200ms'
                                                    }}/>
                                        </>
                                    }
                                </div>
                        )
                    })
                }
                <div style={{width:'340px',height:'280px',position:'absolute',cursor:'pointer'}}
                onClick={()=>{
                    setCenterIndex((centerIndex-1)<0?(props.list.length-1):(centerIndex-1))
                }}></div>
                <div style={{width:'340px',height:'280px',position:'absolute',left:'1060px',cursor:'pointer'}}
                onClick={()=>{
                    setCenterIndex((centerIndex+1)>(props.list.length-1)?0:(centerIndex+1))
                }}></div>
            </div>
            <div style={{width:'1400px',height:'30px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{display:'flex'}}>
                    {
                        props.list.map((value,index)=>{
                            return (
                                <div 
                                key={index}
                                style={{
                                    width:'30px',
                                    height:'4px',
                                    backgroundColor:index==centerIndex?'#263238':'#b0bec5',
                                    marginLeft:'2px',
                                    marginRight:'2px',
                                    cursor:'pointer'}}
                                    onMouseEnter={()=>{
                                        setCenterIndex(index);
                                    }}                                    
                                />
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </>
    )
}
