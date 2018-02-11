import { Option } from 'funfix-core'

export default function (original_html: CheerioStatic): Option<string> {
    const found = original_html('.lemma-summary')
    if (found.length) {
        return Option.of(found).map(
            m => {
                const text = m.text()
                const abstract = text.slice(1, text.length - 1)
                return abstract
            }
        )
    } else return Option.none()
}
