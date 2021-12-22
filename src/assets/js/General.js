import { useState, useEffect } from 'react';
import kanye from '../img/kanye.png'
import kanye_card from '../img/kanye_card.png'
import cristina from '../img/cristina.png'
import cristina_card from '../img/cristina_card.png'
import elon from '../img/elon.png'
import elon_card from '../img/elon_card.png'
import greta from '../img/greta.png'
import greta_card from '../img/greta_card.png'
import malala from '../img/malala.png'
import malala_card from '../img/malala_card.png'
import mark from '../img/mark.png'
import mark_card from '../img/mark_card.png'

export function celebrities (){
    return  [
            {
                "name": "Kanye West",
                "description": "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
                "category": "entertainment",
                "picture": kanye,
                "picture_card": kanye_card,
                "lastUpdated": "2020-03-10T23:08:57.892Z",
                "votes": {
                    "positive": 23,
                    "negative": 36
                }
            },
            {
                "name": "Mark Zuckerberg",
                "description": "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
                "category": "business",
                "picture": mark,
                "picture_card": mark_card,
                "lastUpdated": "2021-02-14T23:10:19.134Z",
                "votes": {
                    "positive": 418,
                    "negative": 324
                }
            },
            {
                "name": "Cristina Fernández de Kirchner",
                "description": "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
                "category": "politics",
                "picture": cristina,
                "picture_card": cristina_card,
                "lastUpdated": "2020-12-10T23:41:07.120Z",
                "votes": {
                    "positive": 45,
                    "negative": 97
                }
            },
            {
                "name": "Malala Yousafzai",
                "description": "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
                "category": "politics",
                "picture": malala,
                "picture_card": malala_card,
                "lastUpdated": "2020-12-10T23:41:07.120Z",
                "votes": {
                    "positive": 18,
                    "negative": 3
                }
            },
            {
                "name": "Elon Musk",
                "description": "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
                "category": "business",
                "picture": elon,
                "picture_card": elon_card,
                "lastUpdated": "2020-12-20T23:43:38.041Z",
                "votes": {
                    "positive": 1237,
                    "negative": 894
                }
            },
            {
                "name": "Greta Thumberg",
                "description": "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
                "category": "environment",
                "picture": greta,
                "picture_card": greta_card,
                "lastUpdated": "2021-02-26T23:44:50.326Z",
                "votes": {
                    "positive": 118,
                    "negative": 45
                }
            }
        ]
}


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
 export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }


export function cutTextDescriptionList(width, text){
    if(width > 950) return text.length > 100 ? `${text.substr(0,100)}...` : text;
    else if(width > 900 && width < 950 ) return text.length > 80 ? `${text.substr(0,80)}...` : text;
    else return text.length > 68 ? `${text.substr(0,68)}...` : text;
}

export function cutText(width, text, length){
     return text.length > length ? `${text.substr(0,length)}...` : text;
}