import XBBCode from 'xbbcode';

const parser = XBBCode.create({
    b: '<strong>{content}</strong>',
    i: '<em>{content}</em>',
    u: '<u>{content}</u>',
    s: '<s>{content}</s>',
    hr: '<hr>',
    br: '<br>',
    list: tag => {
    	let name = tag.getAttribute('type') === 'decimal' ? 'ol': 'ul';
    	return '<' + name + '>' + tag.getContent() + '</' + name + '>';
    },
    li: '<li>{content}</li>',
    font: '<span style="font-family: {option}">{content}</span>',
    size: '<span style="font-size: {option}">{content}</span>',
    color: '<span style="color: {option}">{content}</span>',
    img: '<img src="{option}">',
    url: tag => {
    	let target = (tag.getOption() || tag.getContent() || '#').replace(/"/g, '&quot;');
    	return `<a href="${target}" target="_blank" class="open-ext">${tag.getContent()}</a>`;
    },
    sup: '<sup>{content}</sup>',
    sub: '<sub>{content}</sub>',
    tt: '<tt>{content}</tt>',
    pre: '<pre>{content}</pre>',
    left: '<span style="text-align: left;">{content}</span>',
    right: '<span style="text-align: right;">{content}</span>',
    center: '<span style="text-align: center;">{content}</span>',
    table: '<table class="table">{content}</table>',
    tr: '<tr>{content}</tr>',
    td: '<td>{content}</td>',
    code: '<pre>{content}</pre>',
    quote: '<blockquote>{content}</blockquote>',
    yt: '<iframe width="640" height="385" allowfullscreen src="https://youtube-nocookie.com/embed/{content}?version=3&vq=hd720"></iframe>',
    p3d: '<iframe width="640" height="385" allowfullscreen src="http://p3d.in/e/{content}"></iframe>'
});

export default (text) => {
	text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\]\s*\n+\s*\[/g, '][').replace(/\n/g, '<br>');
	return parser(text);
}
