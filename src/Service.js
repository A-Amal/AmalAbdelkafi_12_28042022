/**
 * Get user data
 */
export const getUser = (id) => {
    let user;
    return fetch(`http://localhost:3000/user/${id}`)
        .then((response => response.json()))
        .then(data => user = data.data)
}

/**
 * Get user activity data
 */
export const getUserActivity = (id) => {
    let activity;
    return fetch(`http://localhost:3000/user/${id}/activity`)
        .then((response => response.json()))
        .then(data => activity = data.data)
}
/**
 * Get user average sessions data
 */

export const getUserAverageSessions = (id) => {
    let averageSessions
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then((response => response.json()))
        .then(data => averageSessions = data.data)

}

/**
 * Get user performance data
 */

export const getUserPerformance = (id) => {
    let performance;
    return fetch(`http://localhost:3000/user/${id}/performance`)
        .then((response => response.json()))
        .then(data => performance = data.data)

}

