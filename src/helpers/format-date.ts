const formatDate =(date: Date = new Date()): string => {// personnaliser le hook
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

export default formatDate;