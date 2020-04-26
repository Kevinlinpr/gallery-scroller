a light-weight React full screen gallery Scroller Component.

<div align=center>

![](https://github.com/Kevinlinpr/gallery-scroller/blob/master/doc/gallery-scroller.gif?raw=true)

</div>

![GitHub stars](https://img.shields.io/github/stars/kevinlinpr/gallery-scroller?logo=github&style=for-the-badge)
![npm](https://img.shields.io/npm/v/gallery-scroller?logo=npm&style=for-the-badge)

![Twitter Follow](https://img.shields.io/twitter/follow/Tvierrousjan?style=social)

## Installation

```sh
npm i gallery-scroller
```
## Demo

```sh
npm start
```
before that you should put your images into ./resources/demoImg or wherever path your code can catch them ,it's up to your convenience.have fun.

## Usage

```js
import GalleryScroller from 'gallery-scroller';

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
| img                   |  import object for image which each 'div' box display via relative url | object   |   true   |
| marker              | the label about img you want to display(categray or the info)| string   |   true   |
| color               | the background color for the marker              | string   |   true   |
| onClick               | onClick Event handler(use it to route to the detail of the page)| function |   false  |

> CardObject - Example

```js
import Img from '../resources/demoImg/9.jpg';
{
        img: Img,
        marker: '直播',
        color: '#00b8d4',
        onClick:()=>{
            console.log('go to 7.jpg 直播 #00b8d4')
        }
}
```