const formatDate =(date: Date): string=> {// personnaliser le hook
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}

export default formatDate;