import * as assert from 'assert'
// tslint:disable-next-line:no-implicit-dependencies
import axios from 'axios'
import * as Cheerio from 'cheerio'

import pic_url_parser from './pic_url'

async function get_html(url: string): Promise<CheerioStatic> {
    const { data } = await axios.get(url)
    const $ = Cheerio.load(data)
    return $
}

describe('Pic URL Parser', function () {
    this.slow(5000)
    this.timeout(10000)

    it('Return None if it does not exist', async function () {
        const mock_url = 'https://www.baidu.com/'
        const html = await get_html(mock_url)
        assert(pic_url_parser(html).isEmpty())
    })

    it('Return Some if it exists', async function () {
        const mock_url = 'https://baike.baidu.com/item/%E8%91%A3%E6%98%8E%E7%8F%A0/1133'
        const html = await get_html(mock_url)
        const pic_url = pic_url_parser(html).get()
        assert.equal(pic_url, 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=342d1b5192eef01f4d141fc3d8c5fe18/1e30e924b899a901ccaaf9031b950a7b0208f56c.jpg')
    })
})
