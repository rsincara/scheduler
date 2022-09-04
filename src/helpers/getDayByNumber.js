export const getDayByNumber = (number) => {
    switch (number) {
        case 0: {
            return 'Понедельник'
        }
        case 1: {
            return 'Вторник'
        }
        case 2: {
            return 'Среда'
        }
        case 3: {
            return 'Четверг'
        }
        case 4: {
            return 'Пятница'
        }
        case 5: {
            return 'Суббота'
        }

        default: {
            return 'Неопознанный день'
        }
    }
}