import React, { useState, useEffect } from 'react';
import '../style.css';


function horizontalPct(horizontalPx) {
    return `${(horizontalPx / 1920) * 100}vw`;
}

function verticalPc(verticalPx) {
    return `${(verticalPx / 1080) * 100}vh`;
}

function GalleryCard(props){
    let {
        index,
        centerIndex,
        leftIndex,
        rightIndex,
        item
    } = props;
    return (
        <div style={{
            position:'absolute',
            width:index==centerIndex?horizontalPct(720):(index==leftIndex||index==rightIndex)?horizontalPct(700):horizontalPct(700),
            height:index==centerIndex?verticalPc(300):(index==leftIndex||index==rightIndex)?verticalPc(280):verticalPc(280),
            zIndex:index==centerIndex?1:(index==leftIndex||index==rightIndex)?-1:-2,
            left:index==centerIndex?horizontalPct(340):index==leftIndex?horizontalPct(0):index==rightIndex?horizontalPct(700):horizontalPct(340),
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
                        width:index==centerIndex?horizontalPct(720):(index==leftIndex||index==rightIndex)?horizontalPct(700):horizontalPct(700),
                        height:index==centerIndex?verticalPc(300):(index==leftIndex||index==rightIndex)?verticalPc(280):verticalPc(280),
                        transition:index==centerIndex?
                        'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 1ms':
                        index==leftIndex?
                        'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 1ms':
                        index==rightIndex?'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 5ms':
                        'left 400ms ease-in-out,width 400ms ease-in-out,height 400ms ease-in-out,z-index 400ms ease-in-out 5ms',
                        position:'relative',overflow:'hidden'
                    }}>
                        <div style={{
                            width:'100%',
                            height:'100%',
                            backgroundSize:'cover',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                            backgroundImage:`url(${item.img})`
                        }}></div>
                    </div>
                    <div style={{
                        height:'24px',
                        backgroundColor:item.color,
                        position:'absolute',
                        right:horizontalPct(-5),
                        top:index==centerIndex?verticalPc(246):verticalPc(226),
                        borderRadius:'24px 0px 0px 24px',
                        transition:'top 10ms ease-in-out 200ms',
                        zIndex:1
                    }}>
                        <span className='web-font'>
                            {item.marker}
                        </span>
                    </div>
                        <div style={{
                            width:index==centerIndex?horizontalPct(720):(index==leftIndex||index==rightIndex)?horizontalPct(700):horizontalPct(700),
                            height:index==centerIndex?verticalPc(1080):(index==leftIndex||index==rightIndex)?verticalPc(1080):verticalPc(1080),
                            backgroundColor:'black',
                            position:'absolute',
                            top:verticalPc(0),
                            left:horizontalPct(0),
                            opacity:index==centerIndex?0:0.5,
                            transition:'opacity 200ms ease-in-out 200ms'
                        }}/>
                </>
            }
        </div>
    )
}


export default function SelfAdaptionGalleryScroller(props){
    let [centerIndex,setCenterIndex] = useState(0);
    let [leftIndex,setLeftIndex] = useState(props.list.length-1);
    let [rightIndex,setRightIndex] = useState(1);

    useEffect(()=>{
        setLeftIndex((centerIndex-1)<0?(props.list.length-1):(centerIndex-1));
        setRightIndex((centerIndex+1)>(props.list.length-1)?0:(centerIndex+1));
    },[centerIndex])

    return (
        <>
            <div style={{
                width: horizontalPct(1400),
                height: verticalPc(330),
                position:'relative'
            }}>
                <div style={{
                width: horizontalPct(1400),
                height: verticalPc(300),
                display:'flex',
                alignItems:'flex-end',
                marginLeft:'0px',
                position:'relative',
                overflow:'hidden'
                }}>
                {
                    Array.isArray(props.list)
                    && props.list.map((item,index)=>{
                        return (
                            <GalleryCard
                                key={`img-${index}`}
                                index={index}
                                centerIndex={centerIndex}
                                leftIndex={leftIndex}
                                rightIndex={rightIndex}
                                item={item}    
                            />
                        )
                    })
                }
                <div style={{
                    width:horizontalPct(340),
                    height:verticalPc(280),
                    position:'absolute',
                    cursor:'pointer'
                }}
                onClick={()=>{
                    setCenterIndex((centerIndex-1)<0?(props.list.length-1):(centerIndex-1))
                }}/>
                <div style={{
                    width:horizontalPct(340),
                    height:verticalPc(280),
                    position:'absolute',
                    left:horizontalPct(1060),
                    cursor:'pointer'
                }}                 
                onClick={()=>{
                    setCenterIndex((centerIndex+1)>(props.list.length-1)?0:(centerIndex+1))
                }}/>
            </div>
            <div style={{
                width:horizontalPct(1400),
                height:verticalPc(30),
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <div style={{display:'flex'}}>
                    {
                        props.list.map((value,index)=>{
                            return(
                                <div
                                key={index}
                                style={{
                                    width:horizontalPct(30),
                                    height:verticalPc(4),
                                    backgroundColor:index==centerIndex?'#263238':'#b0bec5',
                                    marginLeft:horizontalPct(2),
                                    marginLeft:horizontalPct(2),
                                    cursor:'pointer'
                                }}
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