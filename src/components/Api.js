export default class Api {
    constructor(url, headers) {
        this._url = url;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        }).then((res) =>
            this._handleResponse(res)
        );
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        }).then((res) => this._handleResponse(res));
    }

    patchUserInfo(input) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: input.name,
                about: input.description
            })
        }).then((res) => this._handleResponse(res));
    }

    postCard(input) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: input.name,
                link: input.link
            })
        }).then((res) => this._handleResponse(res));
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => this._handleResponse(res));
    }

    putLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then((res) => this._handleResponse(res));
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => this._handleResponse(res));
    }

    changeAvatar(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                {avatar: avatar}),
        })
            .then((res) => this._handleResponse(res));
    }
}
