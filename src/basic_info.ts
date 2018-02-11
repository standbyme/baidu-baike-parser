import * as Cheerio from 'cheerio'
import { Option } from 'funfix-core'
import * as _ from 'lodash'

export default function (original_html: CheerioStatic): Option<Map<string, string>> {
    const basic_info_html = original_html('.basic-info')
    const len = basic_info_html.length
    if (len) {
        const table__list = basic_info_html.text().split('\n').filter(x => x !== '').map(x => x.replace(/\s+/g, ''))
        const table__list_len = table__list.length
        const table__list_with_index = _.zip(_.range(0, table__list_len), table__list)
        const key__list = table__list_with_index.filter(x => x[0] % 2 === 0).map(x => x[1])
        const value__list = table__list_with_index.filter(x => x[0] % 2 !== 0).map(x => x[1])
        const map = new Map(_.zip(key__list, value__list))
        if (map.size > 0) return Option.of(map)
        else return Option.none()
    } else {
        return Option.none()
    }
}
