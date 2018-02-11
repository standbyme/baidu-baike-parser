import * as Cheerio from 'cheerio'
import { Option } from 'funfix-core'

import abstract_parser from './abstract'
import basic_info_parser from './basic_info'
import pic_url_parser from './pic_url'

// tslint:disable-next-line:no-any
export default function (html_str: any): { abstract__opt: Option<string>, basic_info__opt: Option<Map<string, string>>, pic_url__opt: Option<string> } {
    const $ = Cheerio.load(html_str)
    return {
        abstract__opt: abstract_parser($),
        basic_info__opt: basic_info_parser($),
        pic_url__opt: pic_url_parser($)
    }
}
