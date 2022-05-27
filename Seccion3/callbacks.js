const employees = [
    {
        id: 1,
        name: "Gabriela"
    },
    {
        id: 2,
        name: "Pablo"
    },
    {
        id: 3,
        name: "Juan"
    }
]

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 2000
    }
]

const getEmployeeById = (id, callback) => {
    const employee = employees.find(e => e.id === id)
    if (!employee) {
        callback(`No existe un empleado con el id ${id}`)
    } else {
        callback(null, employee)
    }   
}

const getSalaryById = (id, callback) => {
    const salary = salaries.find(s => s.id === id)
    if (!salary) {
        callback(`No existe un salario con el id ${id}`)
    } else {
        callback(null, salary)
    }
}

getEmployeeById(2, (err, employee) => {
    if (err) {
        return console.log(err)
    }
    console.log(`El empleado con id: ${employee.id} es ${employee.name}`)
})

getSalaryById(5, (err, salary) => {
    if (err) {
        return console.log(err)
    }
    console.log(`El salario del empleado con id: ${salary.id} es $ ${salary.salary}`)
})