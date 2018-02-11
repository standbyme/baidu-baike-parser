import * as assert from 'assert'
// tslint:disable-next-line:no-implicit-dependencies
import axios from 'axios'
import * as Cheerio from 'cheerio'

import basic_info_parser from './basic_info'

async function get_html(url: string): Promise<CheerioStatic> {
    const { data } = await axios.get(url)
    const $ = Cheerio.load(data)
    return $
}

describe('Parser for basic-info', function () {
    this.slow(1000)
    this.timeout(6000)

    it('basic test', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/2652548'
        const html = await get_html(url)
        const map__opt = basic_info_parser(html)
        assert(map__opt.nonEmpty())
        const map = map__opt.get()

        assert.equal(map.size, 8)
        assert.equal(map.get('出生地'), '北京')
        assert.equal(map.get('出生日期'), '1953年10月')
    })
})
