import * as assert from 'assert'
// tslint:disable-next-line:no-implicit-dependencies
import axios from 'axios'
import * as Cheerio from 'cheerio'

import abstract_parser from './abstract'

async function get_html(url: string): Promise<CheerioStatic> {
    const { data } = await axios.get(url)
    const $ = Cheerio.load(data)
    return $
}

describe('Abstract Parser', function () {
    this.slow(5000)
    this.timeout(10000)

    it('Return Some if it exists', async function () {
        const mock_url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/2652548'
        const html = await get_html(mock_url)
        const { abstract } = abstract_parser(html).get()
        const text = `王毅，男，北京人`
        assert.equal(abstract.slice(0, 8), text)
    })
})
