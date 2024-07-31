// https://minibus-travel-2c2aa-default-rtdb.europe-west1.firebasedatabase.app/
// https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/

export const TRAVELS_URL = 'https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/travels.json'
export const travelUrl = (index, token) => {
    return `https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/travels/${index}.json?auth=${token}`
}

export const CITIES_URL = 'https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/cities.json'
export const citiesUrl = (index, token) => {
    return `https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/cities/${index}.json?auth=${token}`
}

export const COSTS_URL = 'https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/costs.json'
export const costsUrl = (index, token) => {
    return `https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/costs/${index}.json?auth=${token}`
}

export const DIRECTIONS_URL = 'https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/directions.json'
export const directionsUrl = (index, token) => {
    return `https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/directions/${index}.json?auth=${token}`
}

export const QUEUES_URL = 'https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/queues.json'
export const queuesUrl = (index, token) => {
    return `https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/queues/${index}.json?auth=${token}`
}

export const AUTH_URL = 'https://app.sms.by/api/v1/sendQuickSMS'

export const REPORT_URL = 'https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/report.json'
export const reportUrl = (index, token) => {
    return `https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/report/${index}.json?auth=${token}`
}

export const DRIVERS_URL = 'https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/drivers.json'
export const driversUrl = (index, token) => {
    return `https://minibus-travel-ccc15-default-rtdb.europe-west1.firebasedatabase.app/drivers/${index}.json?auth=${token}`
}
//".write": "auth != null"
