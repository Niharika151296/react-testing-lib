const empFilter = (emp,property) => {
    return emp.filter(e=>e.department===property)
}

export default empFilter
