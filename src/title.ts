import { Option } from 'funfix-core'

export default function (original_html: CheerioStatic): Option<string> {
    const found = original_html('.lemmaWgt-lemmaTitle-title').find('h1')
    if (found.length) return Option.of(found.text())
    else return Option.none()
}
