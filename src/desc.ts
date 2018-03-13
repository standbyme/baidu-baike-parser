import { Option } from 'funfix-core'

export default function (original_html: CheerioStatic): Option<string> {
    const found = original_html('.lemmaWgt-lemmaTitle-title').find('h2')
    if (found.length) {
        return Option.of(found).map(
            m => {
                const text = m.text()
                const desc = text.slice(1, text.length - 1)
                return desc
            }
        )
    } else return Option.none()
}
