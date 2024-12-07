class SchoolChild {
    constructor(surname, name, patronymic, gender, nationality, height, weight, dateBirth, phone, address, school, classroom) {
        this.surname = surname
        this.name = name
        this.patronymic = patronymic
        this.gender = gender
        this.nationality = nationality
        this.height = height
        this.weight = weight
        this.dateBirth = dateBirth
        this.phone = phone
        this.address = address
        this.school = school
        this.classroom = classroom
    }
}

function formingArray() { // собирает данные о школьниках
    const schoolKids = []
    while (confirm("Хотите добавить школьника?")) {
        const surname = prompt("Введите фамилию:")
        const name = prompt("Введите имя:")
        const patronymic = prompt("Введите отчество:")
        const gender = prompt("Введите пол:")
        const nationality = prompt("Введите национальность:")
        const height = parseFloat(prompt("Введите рост:"))
        const weight = parseFloat(prompt("Введите вес:"))
        const dateBirth = prompt("Введите дату рождения (ГГГГ-ММ-ДД):")
        const phone = prompt("Введите номер телефона:")
        const address = {
            zipCode: prompt("Введите почтовый индекс:"),
            country: prompt("Введите страну:"),
            region: prompt("Введите область:"),
            district: prompt("Введите район:"),
            city: prompt("Введите город:"),
            street: prompt("Введите улицу:"),
            house: prompt("Введите дом:"),
            apartment: prompt("Введите квартиру:"),
        };
        const school = prompt("Введите школу:")
        const classroom = prompt("Введите класс:")

        schoolKids.push(new SchoolChild(surname, name, patronymic, gender, nationality, height, weight, dateBirth, phone, address, school, classroom))
    }

    return schoolKids
}

function viewSchool(schoolKids) { //выводит список школьников
    if (!schoolKids.length) {
        console.log("Массив школьников пуст!")
        return
    }

    console.log("Список школьников:")
    schoolKids.forEach((child, index) => { // метод выполняет переданную функцию для каждого элемента
        console.log(`\nШкольник ${index + 1}:`)
        console.table(child)
    });
}

function addSchoolChild(schoolKids) { // добавляет новых школьников в массив
    const newSchoolKids = formingArray()
    schoolKids.push(...newSchoolKids)
    console.log("Новые школьники добавлены в массив.")
}

function findSchoolChild(schoolKids, property, value) { // поиск школьников
    const foundChildren = schoolKids.filter(child => child[property] === value) // метод возвращает массив элементов по условию

    if (foundChildren.length) {
        console.log(`Найдены школьники с ${property} = ${value}:`)
        foundChildren.forEach(child => console.table(child))
    } else {
        console.log(`Школьники с ${property} = ${value} не найдены.`)
    }
}

function sortSchoolChild(schoolKids, properties) { // сортировка
    schoolKids.sort((a, b) => { // метод упорядочивает
        for (let prop of properties) {
            if (a[prop] > b[prop]) return 1
            if (a[prop] < b[prop]) return -1
        }
        return 0
    })
    console.log("Список школьников отсортирован.")
}

function deleteSchoolChild(schoolKids, property, value) { // удаление
    const index = schoolKids.findIndex(child => child[property] === value) // метод возвращает индекс элемента

    if (index !== -1) {
        schoolKids.splice(index, 1) // удаление по индексу
        console.log(`Школьник с ${property} = ${value} удален из массива.`)
    } else {
        console.log(`Школьник с ${property} = ${value} не найден.`)
    }
}

function countSchoolChildren(schoolKids) { // считает кол-во
    console.log(`Общее количество школьников: ${schoolKids.length}`);
}

function interactiveMenu(schoolKids) { // меню
    let continueUsing = true;

    while (continueUsing) {
        const choice = prompt(
            "Выберите действие:\n" +
            "1. Посмотреть список школьников\n" +
            "2. Добавить школьника\n" +
            "3. Найти школьника\n" +
            "4. Упорядочить школьников\n" +
            "5. Удалить школьника\n" +
            "6. Подсчитать количество школьников\n" +
            "7. Выход"
        );

        switch (choice) {
            case "1":
                viewSchool(schoolKids)
                break
            case "2":
                addSchoolChild(schoolKids)
                break
            case "3":
                const findProperty = prompt("Введите свойство для поиска (например, name):")
                const findValue = prompt(`Введите значение свойства ${findProperty}:`)
                findSchoolChild(schoolKids, findProperty, findValue)
                break
            case "4":
                const sortProperties = prompt("Введите свойства для сортировки через запятую (например, surname,name):").split(",");
                sortSchoolChild(schoolKids, sortProperties)
                break
            case "5":
                const deleteProperty = prompt("Введите свойство для удаления (например, name):")
                const deleteValue = prompt(`Введите значение свойства ${deleteProperty}:`)
                deleteSchoolChild(schoolKids, deleteProperty, deleteValue)
                break
            case "6":
                countSchoolChildren(schoolKids)
                break
            case "7":
                continueUsing = false;
                console.log("Работа завершена.")
                break
            default:
                console.log("Некорректный выбор. Попробуйте снова.")
        }
    }
}

const schoolKids = formingArray()
interactiveMenu(schoolKids)
