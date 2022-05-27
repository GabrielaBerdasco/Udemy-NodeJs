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

        const employee = employees.find(e => e.id === id)?.name;

        (employee) 
            ? res(employee) 
            : rej(`No existe un empleado con el id ${id}`)

    }) 

}

const getSalaryById = (id) => {
    
    return new Promise((res, rej) => {

        const salary = salaries.find(s => s.id === id)?.salary;

        (salary)
            ? res(salary)
            : rej(`No existe un salario con el id ${id}`)

    })

}

const id = 5;

const getInfoEmployee = async (id) => {
    try {
        const employee = await getEmployeeById(id);
        const salary = await getSalaryById(id);

        return `${employee} tiene un salario de ${salary}`;
    } catch (error) {
        throw error;
    }
}

getInfoEmployee(id)
    .then(info => console.log(info))
    .catch(err => console.log(err))