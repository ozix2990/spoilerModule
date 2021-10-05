## Использование: 
<ol>
  <li>
  <h3>Должна быть html структура:</h3>

  ```
  <div class="spoiler">
    <div class="spoiler__head">Спойлер</div>
    <div class="spoiler__body">
        <div class="spoiler__descr"> Описание </div>
    </div>
  </div>
  ```
  spoiler - Главная обертка спойлера (*Обязательный класс)<br>
  spoiler__head - Заголовок спойлера (*Обязательный класс)<br>
  spoiler__body - Тело спойлера (*Обязательный класс)<br>
  spoiler__descr - К нему применяются все оформление для описания
  </li>
<li>
<h3>В элемент spoiler пишется data атрибут формата:</h3>
data-spoiler - Создать спойлер на всех разрешениях экрана <br>
data-spoiler="768" - Создать спойлер на разрешении max-width: 768px <br>
data-spoiler="768/min" - Создать спойлер на разрешении min-width: 768px <br>
<br>
<i>!Если будет ошибка в синтасисе data, то по умолчанию создатся на всех разрешениях!</i>
