import http from './axios';

class LibraryServices {

    /* **************************************************************** */
    // *** Collections
    getAllCollections = () => {
        return http.get('/fcCollections')
    }

    getCollectionById = id => {
        return http.get(`/fcCollections/${id}`)
    }

    createCollection = data => {
        return http.post('/fcCollections', data)
    }

    editCollection = (id, data) => {
        return http.put(`/fcCollections/${id}`, data)
    }

    deleteCollection = id => {
        return http.delete(`/fcCollections/${id}`)
    }


    /* **************************************************************** */
    // *** CollectionTypes

    getAllCollectionTypes = () => {
        return http.get('/fcCollectionType')
    }

    getCollectionTypeById = id => {
        return http.get(`/fcCollectionType/${id}`)
    }

    createCollectionType = data => {
        return http.post('/fcCollectionType', data)
    }

    editCollectionType = (id, data) => {
        return http.put(`/fcCollectionType/${id}`, data)
    }

    deleteCollectionType = id => {
        return http.delete(`/fcCollectionType/${id}`)
    }

    /* **************************************************************** */
    // *** FlashCards

    // getFlashCardsByCollection = () => {
    //     return http.get('/flashCard')
    // }

    getFlashCardById = id => {
        return http.get(`/flashCard/${id}`)
    }

    createFlashCard = data => {
        return http.post('/flashCard', data)
    }

    editFlashCard = (id, data) => {
        return http.put(`/flashCard/${id}`, data)
    }

    deleteFlashCard = id => {
        return http.delete(`/flashCard/${id}`)
    }
}
export default new LibraryServices();