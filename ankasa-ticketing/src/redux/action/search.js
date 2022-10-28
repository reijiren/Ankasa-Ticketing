export const sortBy = (e) => {
    return {
        type: `SORTBY${e}`,
    }
}

export const sortOrder = () => {
    return {
        type: 'SORTORDER',
    }
}

export const direct = () => {
    return {
        type: 'DIRECT',
    }
}

export const transit = () => {
    return {
        type: 'TRANSIT',
    }
}