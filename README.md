## Использование: 
  ### 1.Должна быть html структура:
  ```html
  <div class="spoiler">
    <div class="spoiler__head">Заголовок спойлера</div>
    <div class="spoiler__body">
        <div class="spoiler__descr"> Описание </div>
    </div>
  </div> 
  ```
  <br>
  spoiler - Главная обертка спойлера (*Обязательный класс)<br>
  spoiler__head - Заголовок спойлера (*Обязательный класс)<br>
  spoiler__body - Тело спойлера (*Обязательный класс)<br>
  spoiler__descr - К нему применяются все оформление для описания
  
  #### В элемент spoiler пишется data атрибут формата:
  data-spoiler - Создать спойлер на всех разрешениях экрана <br>
  data-spoiler="768" - Создать спойлер на разрешении max-width: 768px <br>
  data-spoiler="768/min" - Создать спойлер на разрешении min-width: 768px <br>
  <br>
  <i>!Если будет ошибка в синтасисе data, то по умолчанию создатся на всех разрешениях!</i>


### Пример использования: 
  ```html
       <div data-spoiler='768/max' class="spoiler">
        <div class="spoiler__head">hello world</div>
        <div class="spoiler__body">
          <div class="spoiler__descr">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Voluptates consequatur deleniti  ab reprehenderit voluptatibus enim a facere quod aliquid, 
            molestiae quis quas optio accusantium rerum corrupti tempora! Praesentium, odio similique.
          </div>
        </div>
    </div>
  ```
