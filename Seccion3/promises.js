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

const getEmployeeById = ( id ) => {
    
    return new Promise((res, rej) => {

        const employee = employees.find(e => e.id === id);

        (employee) 
            ? res(employee) 
            : rej(`No existe un empleado con el id ${id}`)

    }) 

}

const getSalaryById = (id) => {
    
    return new Promise((res, rej) => {

        const salary = salaries.find(s => s.id === id);

        (salary)
            ? res(salary)
            : rej(`No existe un salario con el id ${id}`)

    })

}

const id = 3

/* getEmployeeById(id)
    .then(employee => { 
        console.log(`El empleado con id ${employee.id} es ${employee.name}`)
    })
    .catch(err => {
        console.log(err)
    })

getSalaryById(id)
    .then(salary => {
        console.log(`El salario del empleado con id ${salary.id} es $ ${salary.salary}`)
    })
    .catch(err => {
        console.log(err)
    }) */


//Promesas en cadena

let employeeById;

getEmployeeById(id)
    .then(employee => {
        employeeById = employee
        return getSalaryById(id)
    })
    .then(salary => {
        console.log(`El salario del empleado ${employeeById.name} es $ ${salary.salary}`)
    })
    .catch(err => {
        console.log(err)
    })