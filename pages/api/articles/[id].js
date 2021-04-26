const articles = [
    {userId:1,id:'1',title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},

    {userId:2,id:'2',title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",body:"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
]

export default function getArticle ({ query: { id } }, res) {
    const filtered = articles.filter(article => article.id === id);
    if (filtered.length > 0) {
        res.status(200).json({ status: 'success', data: filtered[0] })
    } else {
        res.status(404).json({ message: `Article with the id ${id} is not found` })
    }
}