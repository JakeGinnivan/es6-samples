/* tslint:disable */

export const fetchAgenda = done => {
    return httpGet('http://ndcsydney.com/agenda', result => {
        if (result.status !== 200) {
            return done(new Error('Request failed'))
        }

        result.text(body => {
            done(undefined, body)
        })
    })
}

fetchAgenda((err, agenda) => console.log(agenda))

function httpGet(url, done) {
    setTimeout(() => {
        done({
            status: 200,
            text: cb => setTimeout(() => cb('Talk 1\nTalk 2'), 200)
        })
    }, 200)
}
