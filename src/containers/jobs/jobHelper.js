const getEmploymentTypeLabel = (text) => {
    let texts = text.split('_');
    texts = texts.map(([firstLetter, ...rest]) => (`${firstLetter.toUpperCase()}${rest.join('')}`));
    return texts.join(' ');
};

const synthesizeJobData = (list) => {
    return list.map(({ employment_type, ...rest }) => {
        return {
            ...rest,
            employment_type,
            employmentTypeLabel: getEmploymentTypeLabel(employment_type)
        };
    });
};

export { synthesizeJobData };
