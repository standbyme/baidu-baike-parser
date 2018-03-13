# baidu-baike-parser

## Install

`npm install funfix-core`

`npm install axios`

`npm install baidu-baike-parser`

## Use
```javascript
import baidu_baike_parser from 'baidu-baike-parser'
import axios from 'axios'
import { Option } from 'funfix-core'

async function get_html(url: string): Promise<string> {
    // @ts-ignore
    const { data } = await axios.get(url)
    return data
}

async function get_from_link(link: string) {
    const html__str = await get_html(link)
    return baidu_baike_parser(html__str)
}

async main(){
    const result = await get_from_link('https://baike.baidu.com/item/%E5%B0%A4%E9%9B%A8%E6%BA%AA')
    console.log(result)
}

main()
```
