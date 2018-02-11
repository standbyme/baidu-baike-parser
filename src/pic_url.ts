import { Option } from 'funfix-core'

export default function (original_html: CheerioStatic): Option<string> {
    const found = original_html('.summary-pic').find('img')
    if (found.length) {
        return Option.of(found).map(
            m => {
                return found.attr('src')
            }
        )
    } else return Option.none()
}
