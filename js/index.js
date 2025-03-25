const surname = prompt("Введите фафмилию: ");
const name = prompt("Введите имя: ");
const patronymic = prompt("Введите отчество: ");

const bool = confirm("выввести сообщение?");

if(bool)
    alert(`Фамилие - ${surname}, имя - ${name}, отчество - ${patronymic}`);

else
    alert("Сообщение не выведено из за отказа!");