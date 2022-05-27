/**
 * Get user data
 * @param {Number} id
 * @return {json.Element}
 */
export const getUser = (id) => {
    return fetch(`http://localhost:3000/user/${id}`)
        .then((response => response.json()))
        .then(data => data.data)
}

/**
 * Get user activity data
 * @param {Number} id
 * @return {json.Element}
 */
export const getUserActivity = (id) => {
    return fetch(`http://localhost:3000/user/${id}/activity`)
        .then((response => response.json()))
        .then(data =>  data.data)
}
/**
 * Get user average sessions data
 * @param {Number} id
 * @return {json.Element}
 */

export const getUserAverageSessions = (id) => {
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then((response => response.json()))
        .then(data => data.data)

}

/**
 * Get user performance data
 * @param {Number} id
 * @return {json.Element}
 */

export const getUserPerformance = (id) => {
    return fetch(`http://localhost:3000/user/${id}/performance`)
        .then((response => response.json()))
        .then(data => data.data)

}

