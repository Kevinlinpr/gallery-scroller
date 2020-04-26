a light-weight React full screen gallery Scroller Component.

<div align=center>

![](./doc/gallery-scroller.gif)

</div>


## Installation

```sh
npm i gallery-scroller
```
## Demo

```sh
npm start
```



## Usage

```js
import GalleryScroller from '../src/index';

const resourcespropsList = [{...},{...},{...},{...},{...},{...},] 
// resourcespropsList is Array about the Gallery Object.
// you can rename it to whatever you want.
const MyGalleryList = () => {
    <GalleryScroller list={resourcespropsList}/>
}
```
## API
| param                 | detail                                            | type                    | require* |
| --------------------- | --------------------------------------------------| ----------------------- | -------- |
| list                  | Gallery object list (only available for images)   | GalleryObject[ ]        |   true   |

> CardList - Example

```js
const resourcespropsList = [{...},{...},{...},{...},{...},{...},] 

const MyGalleryList = () => {
    <GalleryScroller list={resourcespropsList}/>
}
```

### GalleryObject

| param                 | detail                                         | type     | require* |
| --------------------- | ---------------------------------------------- | -------- | -------- |
| img                   |  relative url string for image which each 'div' box display| string   |   true   |
| marker              | the label about img you want to display(categray or the info)| string   |   true   |
| color               | the background color for the marker              | string   |   true   |
| onClick               | onClick Event handler(use it to route to the detail of the page)| function |   false  |

> CardObject - Example

```js
{
        img: '../resources/demoImg/7.jpg',
        marker: '直播',
        color: '#00b8d4',
        onClick:()=>{
            console.log('go to 7.jpg 直播 #00b8d4')
        }
}
```